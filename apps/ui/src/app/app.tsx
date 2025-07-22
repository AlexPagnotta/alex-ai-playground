import { Link, Route, Switch } from "wouter";

import { HomePage } from "@/app/homepage";

export const App = () => (
  <>
    <Route path="/">
      <HomePage />
    </Route>
  </>
);
