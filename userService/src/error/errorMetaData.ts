export const ErrorMetadata: {
  Authentication: {
      code: string;
      defaultMessage: string;
  };
  Internal: {
      code: string;
      defaultMessage: string;
  };
} = {
    Authentication: {
      code: 'AuthenticationError',
      defaultMessage: 'AuthenticationRequiredError'
    },
    Internal: {
      code: 'InternalError',
      defaultMessage: 'Internal error. Please try again later'
    }
}