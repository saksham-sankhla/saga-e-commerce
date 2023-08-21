import React from "react";
import "./CartComp.css";


export default function CartComp({ item }) {
  console.log(item);
  return (
    <div>
      <div className="cartProduct">
        <div className="cartProductDetails">
          <img className="cartProductImg" alt="" src={item.img} />
          <div className="cartProductNameContainer">
            <span className="cartProductName">
              <b>Product:</b>
              {item.name}
            </span>
            <span className="cartProductId">
              <b>Id:</b>JTSS180
            </span>
            <div
              className="cartProductColor"
              style={{ backgroundColor: "black" }}
            />
            <span className="cartProductSize">
              <b>Size:</b>{item.size}
            </span>
          </div>
        </div>
        <div className="cartPriceDetails">
          <div className="cartAmountContainer">
            <div className="cartProdQuant">Product Quantity: {item.quantity}</div>
          </div>
          <div className="cartProdPrice">Price: $ {item.price}</div>
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
  /* <div className='cartProduct'>
                        <div className='cartProductDetails'>
                            <img className='cartProductImg' alt='' src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' />
                            <div className='cartProductNameContainer'>
                                <span className='cartProductName'><b>Product:</b>HAKURA T-SHIRT</span>
                                <span className='cartProductId'><b>Id:</b>HKTGM18</span>
                                <div className='cartProductColor' style={{backgroundColor: 'grey'}}/>
                                <span className='cartProductSize'><b>Size:</b>M</span>
                            </div>
                        </div>
                        <div className='cartPriceDetails'>
                            <div className='cartAmountContainer'>
                                <AddIcon />
                                <div className='cartProdQuant'>2</div>
                                <RemoveIcon />
                            </div>
                            <div className='cartProdPrice'>$ 30</div>
                        </div>
                    </div>
  </div>*/
}
