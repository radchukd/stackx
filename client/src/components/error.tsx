import React, { FC } from 'react';

interface ErrorProps {
  message: string;
};

const Error: FC<ErrorProps> = ({ message }) => (
  <div>
    Error:
    { message }
  </div>
);

export default Error;
