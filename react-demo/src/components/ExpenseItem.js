import "./ExpemseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>2022/12/09</div>
      <div className="expense-item__description">
        <h2>Book</h2>
        <div className="expense-item__price">$29</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
