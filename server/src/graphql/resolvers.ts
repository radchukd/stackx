import {
  login,
  getUser,
  signup,
  updateProfile,
  updateEmail,
  updatePassword,
  deleteUser,
} from './users/resolvers';
import {
  Resolvers,
  ResolversParentTypes,
  QueryLoginArgs,
  MutationSignupArgs,
  MutationUpdateProfileArgs,
  MutationUpdateEmailArgs,
  MutationUpdatePasswordArgs,
} from '../types/generated';
import { Context } from '../types';

const resolvers: Resolvers = {
  Query: {
    login: async (
      _parent: ResolversParentTypes,
      args: QueryLoginArgs,
    ) => login(args),
    getUser: async (
      _parent: ResolversParentTypes,
      _args: null,
      context: Context,
    ) => getUser(context),
  },
  Mutation: {
    signup: async (
      _parent: ResolversParentTypes,
      args: MutationSignupArgs,
    ) => signup(args),
    updateProfile: async (
      _parent: ResolversParentTypes,
      args: MutationUpdateProfileArgs,
      context: Context,
    ) => updateProfile(args, context),
    updateEmail: async (
      _parent: ResolversParentTypes,
      args: MutationUpdateEmailArgs,
      context: Context,
    ) => updateEmail(args, context),
    updatePassword: async (
      _parent: ResolversParentTypes,
      args: MutationUpdatePasswordArgs,
      context: Context,
    ) => updatePassword(args, context),
    deleteUser: async (
      _parent: ResolversParentTypes,
      _args: null,
      context: Context,
    ) => deleteUser(context),
  },
};

export default resolvers;
