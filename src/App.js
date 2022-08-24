import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="react-router-basics/" exact>
            <Redirect to="react-router-basics/welcome"/>
          </Route>
          <Route path="react-router-basics/welcome">
            <Welcome />
          </Route>
          <Route path="react-router-basics/products" exact>
            <Products />
          </Route>
          <Route path="react-router-basics/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
