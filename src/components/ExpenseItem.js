import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// class ExpenseItem extends React.Component {
//   render() {
//     return (
//       <div className="expense-item">
//         <div>March 28 2021</div>
//         <div className="expense-item__description">
//           <h2>Home insurance</h2>
//           <div className="expense-item__price">$240.65</div>
//         </div>
//       </div>
//     );
//   }
// }

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
