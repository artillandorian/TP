import { render, screen } from '@testing-library/react';
import App from './Router';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Route, node } from "react-router-dom";

test("clicking filter links updates product query params", () => {
  let testFirstPage, testSecondPage;
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
      <Route
        path="*"
        render={({ first, second }) => {
          testFirstPage = first;
          testSecondPage = second;
          return null;
        }}
      />
    </MemoryRouter>,
    node
  );

  act(() => {
    // example: click a <Link> to /products?id=1234
  });

  // assert about url
  expect(testFirstPage.pathname).toBe("/pages/mon-premier-article");
});