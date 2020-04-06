import { Resolvers } from 'apollo-client';
import { ApolloCache } from 'apollo-cache';

type ResolverFn = (
  parent: any,
  args: any,
  { cache }: { cache: ApolloCache<any> }
) => any;

interface ResolverMap {
  [field: string]: ResolverFn;
}

interface AppResolvers extends Resolvers {
  Mutation: ResolverMap;
  Query: ResolverMap;
}

const resolvers: AppResolvers = {
  Mutation: {},
  Query: {},
};

export default resolvers;
