import { AuthenticationError } from 'apollo-server-express';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import { schema } from '../../util';
import {
  database,
  JWT_SECRET,
  JWT_EXPIRY,
} from '../../config';
import {
  Context,
  UserDocument,
  NewUserDocument,
  QueryLoginArgs,
  MutationSignupArgs,
  MutationUpdateProfileArgs,
  MutationUpdateEmailArgs,
  MutationUpdatePasswordArgs,
} from '../../types';

// Queries
export const login = async (args: QueryLoginArgs) => {
  const { input: { email, password } } = args;
  await schema.validateAsync({ email, password });
  const user: UserDocument = await database.users.findOne({ email });
  if (!user) { throw new Error('Email not found.'); }
  const match: boolean = user && await compare(password, user.password);
  if (!match) { throw new Error('Incrorrect password.'); }
  return sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
};

export const getUser = async (context: Context) => {
  if (!context.payload) { throw new AuthenticationError('User is not logged in'); }
  const { payload: { id } } = context;
  const projection = { password: 0 };
  return database.users.findOne(new ObjectId(id), { projection });
};

// Mutations
export const signup = async (args: MutationSignupArgs) => {
  const { input: { email, password } } = args;
  await schema.validateAsync({ email, password });
  const existing: UserDocument = await database.users.findOne({ email });
  if (existing) { throw new Error('Email is already registered'); }
  const user: NewUserDocument = {
    email,
    password: await hash(password, 12),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  await database.users.insertOne(user);
  return 'Registration is successful.';
};

export const updateProfile = async (args: MutationUpdateProfileArgs, context: Context) => {
  if (!context.payload) { throw new AuthenticationError('User is not logged in'); }
  const { payload: { id } } = context;
  const { firstName, lastName } = args.input;
  await schema.validateAsync({ firstName, lastName });
  const { value } = await database.users.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { profile: { firstName, lastName }, updatedAt: new Date() } },
    { projection: { password: 0 } },
  );
  return value;
};

export const updateEmail = async (args: MutationUpdateEmailArgs, context: Context) => {
  if (!context.payload) { throw new AuthenticationError('User is not logged in'); }
  const { payload: { id } } = context;
  const email = args.input;
  await schema.validateAsync({ email });
  const { value } = await database.users.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { email, updatedAt: new Date() } },
    { projection: { password: 0 } },
  );
  return value;
};

export const updatePassword = async (args: MutationUpdatePasswordArgs, context: Context) => {
  if (!context.payload) { throw new AuthenticationError('User is not logged in'); }
  const { payload: { id } } = context;
  const password = args.input;
  await schema.validateAsync({ password });
  const hashed: string = await hash(password, 12);
  const { value } = await database.users.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { password: hashed, updatedAt: new Date() } },
    { projection: { password: 0 } },
  );
  return value;
};

export const deleteUser = async (context: Context) => {
  if (!context.payload) { throw new AuthenticationError('User is not logged in'); }
  const { payload: { id } } = context;
  await database.users.findOneAndDelete({ _id: new ObjectId(id) });
  return 'User was deleted.';
};
