import React, { useContext } from 'react';
import './CSS/ShopCatagory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';

const ShopCatagory = (props) => {

    const {all_product} = useContext(ShopContext);

    return (
        <div className='shop-catagory'>
            <img className='shopcatagery-banner' src={props.banner} alt="" />
            <div className="shopcatagory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcatagory-sort">
                    srt by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcatagory-products">
                {all_product.map((item,i)=>{
                    if(props.category===item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="shopcatargory-loadmore">
                Explore More
            </div>
        </div>
    );
};

export default ShopCatagory;