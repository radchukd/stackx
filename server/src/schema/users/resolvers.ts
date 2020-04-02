import { AuthenticationError } from 'apollo-server-express';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import database from '../../config/db';
import { JWT_SECRET, JWT_EXPIRY } from '../../config/secrets';

// Queries
export const login = async (args: Record<string, any>) => {
  const { input: { email, password } } = args;
  const user = await database.users.findOne({ email });
  if (!user) { throw new Error('Email not found.'); }
  const match = user && await compare(password, user.password);
  if (!match) { throw new Error('Incrorrect password.'); }
  return sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
};

export const getUser = async (context: Record<string, any>) => {
  if (!context.payload) { throw new AuthenticationError('User is not logged in'); }
  const { payload: { id } } = context;
  const projection = { password: 0 };
  return database.users.findOne(new ObjectId(id), { projection });
};

// Mutations
export const signup = async (args: Record<string, any>) => {
  const { input: { email, password } } = args;
  const existing = await database.users.findOne({ email });
  if (existing) { throw new Error('Email is already registered'); }
  const user = {
    email,
    password: await hash(password, 12),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  await database.users.insertOne(user);
  return 'Registration is successful.';
};

export const updateProfile = async (args: Record<string, any>, context: Record<string, any>) => {
  if (!context.payload) { throw new AuthenticationError('User is not logged in'); }
  const { payload: { id } } = context;
  const { value } = await database.users.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { profile: args.input, updatedAt: new Date() } },
    { projection: { password: 0 } },
  );
  return value;
};

export const updateEmail = async (args: Record<string, any>, context: Record<string, any>) => {
  if (!context.payload) { throw new AuthenticationError('User is not logged in'); }
  const { payload: { id } } = context;
  const email = args.input;
  const { value } = await database.users.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { email, updatedAt: new Date() } },
    { projection: { password: 0 } },
  );
  return value;
};

export const updatePassword = async (args: Record<string, any>, context: Record<string, any>) => {
  if (!context.payload) { throw new AuthenticationError('User is not logged in'); }
  const { payload: { id } } = context;
  const password = await hash(args.input, 12);
  const { value } = await database.users.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { password, updatedAt: new Date() } },
    { projection: { password: 0 } },
  );
  return value;
};

export const deleteUser = async (context: Record<string, any>) => {
  if (!context.payload) { throw new AuthenticationError('User is not logged in'); }
  const { payload: { id } } = context;
  await database.users.findOneAndDelete({ _id: new ObjectId(id) });
  return 'User was deleted.';
};
