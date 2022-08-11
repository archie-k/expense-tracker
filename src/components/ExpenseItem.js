import React from "react";
import "./ExpenseItem.css";

// function ExpenseItem() {
//   return <h2>Expense item</h2>;
// }

class ExpenseItem extends React.Component {
  render() {
    return (
      <div className="expense-item">
        <div>March 28 2021</div>
        <div className="expense-item__description">
          <h2>Home insurance</h2>
          <div className="expense-item__price">$240.65</div>
        </div>
      </div>
    );
  }
}

export default ExpenseItem;
