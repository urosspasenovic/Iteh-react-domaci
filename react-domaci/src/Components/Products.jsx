import OneProduct from "./OneProduct.jsx";

const Products = ({ products, onAdd }) => {
  return (
    <div className="all-products">
      {products.map((prod) => (
        <OneProduct product={prod} key={prod.id} onAdd={onAdd} inMySubscriptions={0}/>
      ))}
    </div>
  );
};

export default Products;