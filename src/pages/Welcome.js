import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>The Welcome page</h1>
      <Route path="react-router-basics/welcome/new-user">
        <p>Welcome new user!</p>
      </Route>
    </>
  );
};

export default Welcome;
