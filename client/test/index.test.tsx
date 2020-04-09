import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from '../src/router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(AppRouter as unknown as React.ReactElement<any, any>, div);
});
