const BagSummary = () => {
  const bagSummary = {
    totalItem: 3,
    totalMRP: 234,
    totalDiscount: 34,
    finalPayment: 1234,
  };
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header h6">
          PRICE DETAILS (${bagSummary.totalItem} Items){" "}
        </div>
        <div className="row mb-3">
          <div className="col-8 text-start">
            <span className="price-item-tag summary-item-tag">Total MRP</span>
          </div>
          <div className="col-4">
            <span className="price-item-value">₹{bagSummary.totalMRP}</span>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-8 text-start">
            <span className="price-item-tag summary-item-tag">
              Discount on MRP
            </span>
          </div>
          <div className="col-4">
            <span className="price-item-value priceDetail-base-discount">
              ₹{bagSummary.totalDiscount}
            </span>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-8 text-start">
            <span className="price-item-tag summary-item-tag">
              Convenience Fee
            </span>
          </div>
          <div className="col-4">
            <span className="price-item-value">₹99</span>
          </div>
        </div>
        {/* <hr /> */}

        <div className="row mb-3 price-footer">
          <div className="col-8 text-start">
            <span className="price-item-tag">Total Amount</span>
          </div>
          <div className="col-4">
            <span className="price-item-value">₹{bagSummary.finalPayment}</span>
          </div>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
