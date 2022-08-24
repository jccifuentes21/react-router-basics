import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>The Products page</h1>
      <ul>
        <li><Link to='react-router-basics/products/p1'>A keyboard</Link> </li>
        <li><Link to='react-router-basics/products/p2'>A golf club</Link>  </li>
        <li><Link to='react-router-basics/products/p3'>A tv</Link> </li>
      </ul>
    </>
  );
};

export default Products;
