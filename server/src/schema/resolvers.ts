import {
  login,
  getUser,
  signup,
  updateProfile,
  updateEmail,
  updatePassword,
  deleteUser,
} from './users/resolvers';

const resolvers = {
  Query: {
    login: async (_: any, args: any, ___: any, ____: any) => (
      login(args)
    ),
    getUser: async (_: any, __: any, context: any, ____: any) => (
      getUser(context)
    ),
  },
  Mutation: {
    signup: async (_: any, args: any, ___: any, ____: any) => (
      signup(args)
    ),
    updateProfile: async (_: any, args: any, context: any, ____: any) => (
      updateProfile(args, context)
    ),
    updateEmail: async (_: any, args: any, context: any, ____: any) => (
      updateEmail(args, context)
    ),
    updatePassword: async (_: any, args: any, context: any, ____: any) => (
      updatePassword(args, context)
    ),
    deleteUser: async (_: any, __: any, context: any, ____: any) => (
      deleteUser(context)
    ),
  },
};

export default resolvers;
/*
updateProfile(input: UpdateProfileInput!): UserType
updateEmail(input: String): UserType
updatePassword(input: String): UserType
deleteUser: String
*/