const QuantityManager = ({ productMetaInfo, productCartInfo }) => {
  return (
    <div>
      <span>{productMetaInfo.name}</span>
      <span>{productMetaInfo.amount}</span>
      <span>{productCartInfo.quantity}</span>
    </div>
  );
};

export default QuantityManager;
