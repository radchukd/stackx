import { UserType } from './generated';

export * from './generated';

export type TokenType = {
  id: string;
  iat: number;
  exp: number;
};

export type Context = {
  payload: TokenType | null;
};

export type NewUserDocument = {
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UserDocument = UserType & {
  password: string;
};
