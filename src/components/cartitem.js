import React from "react";

export default function CartItem(props) {
  return (
    <div>
      <span className='orange-text'>{props.item.name}</span>: <span>{props.item.price}</span>
    </div>
  );
}
