import OneProduct from "./OneProduct";

const Subscription = ({ products, removeSubscription }) => {
  return (
    <div className="all-products">
      {products.map((prod) => (
        <OneProduct product={prod} key={prod.id} inMySubscriptions={1} removeSubscription={removeSubscription} />
      ))}
    </div>
  );
};

export default Subscription;
