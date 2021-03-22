import { baseResolver } from './baseResolvers';
import { AuthenticationRequiredError } from '../error/errors';


export const isAuthenticatedResolver = baseResolver.createResolver(
    (_root, _args, { user }) => {
      if (!user) throw new AuthenticationRequiredError();
    }
  );