type TokenType = {
  id: string;
  iat: number;
  exp: number;
};

export type Context = {
  payload: TokenType | null;
};
