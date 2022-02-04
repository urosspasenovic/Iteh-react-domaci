import OneProduct from "./OneProduct";

const Subscription = ({ products }) => {
  return (
    <div className="all-products">
      {products.map((prod) => (
        <OneProduct product={prod} key={prod.id}  />
      ))}
    </div>
  );
};

export default Subscription;
