import * as React from 'react';
import styled from '../theme';

interface ReceiptItemProps {
  className?: string;
  // order?: Order;
  updateOrder?(order: {}): {};
  itemName?: string;
  price?: number;
  quantity?: number;
}

// interface Order {
//   [combo: string]: {
//     price: number,
//     tenders: number,
//     quantity: number
//   }
// }

// <button onClick={() => updateOrder(update)} className={className}>{text}</button>
const ReceiptItem: React.SFC<ReceiptItemProps> = (props) => {
  console.log(props);
  return (
    <div>
      <span>{props.itemName} || {props.quantity} || {props.price}</span>
    </div>
  );
};

export default ReceiptItem;
