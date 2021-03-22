import { v4 as uuidv4 } from 'uuid';
import { GraphQLError } from 'graphql';
import { ApolloError } from 'apollo-server-errors';
import { ErrorMetadata } from './ErrorMetadata';
import logger from '../helpers/logging';


class CustomApolloError extends ApolloError {
    constructor(
      code: string,
      metadata?: Partial<{ message: string; data: object }>
    ) {
      super(
        metadata?.message ??
          Object.entries(ErrorMetadata).find(([, v]) => v.code === code)?.[1]
            .defaultMessage ??
          'Unknown Error',
        code,
        metadata?.data
      );
    }
  }


export class AuthenticationRequiredError extends CustomApolloError {
  constructor(metadata?: Partial<{ message: string; data: object }>) {
    super(ErrorMetadata.Authentication.code, metadata);
  }
}

class InternalError extends CustomApolloError {
  constructor(metadata?: Partial<{ message: string; data: object }>) {
    super(ErrorMetadata.Internal.code, metadata);
  }
}

/**
 * This function is run on each error passed back to the client
 */
export function formatError(error: GraphQLError): ApolloError | GraphQLError {
  // apolloFormatError returns the serialized form of the form if it's a known ApolloError
  // otherwise the original error

  // originalError contains the error before it was wrapped and located by Graphql
  const { originalError } = error;

  if (originalError instanceof ApolloError) {
    logger.error('GraphQL Error:', originalError);
    return error;
  }

  // Unknown error
  if (originalError) {
    const errorId = uuidv4();

    logger.error(`Error ID: ${errorId}. `, originalError);

    return new InternalError({
      message: `Internal error. Please try again later. Error ID: ${errorId}.`,
      data: {
        errorId,
        locations: error.locations,
        path: error.path
      }
    });
  }

  logger.error('GraphQL Error:', error);
  // Graphql Error
  return error;
}
