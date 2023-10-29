import { useState } from "react";
import { productArray } from "../Data/productArray";
import Cards from"./Cards";
export default function Products(){
   
    const datashow = productArray.map((el)=>(
        <Cards img={el.img} price={el.price}/>
        ));

    const [toggle,settoggle]=useState(0);

    function updatetoggle(id){
        settoggle(id);
    }
    return(
        <div class="pro-cont">
            <div className="Categ-tabs">
                <button className={toggle === 0?"active" : "categories"} onClick={()=>updatetoggle(0)}>All</button>
                <button className={toggle === 1?"active" : "categories"} onClick={()=>updatetoggle(1)}>Studio</button>
                <button className={toggle === 2?"active" : "categories"} onClick={()=>updatetoggle(2)}>One room</button>
                <button className={toggle === 3?"active" : "categories"} onClick={()=>updatetoggle(3)}>Two rooms</button>
            </div>
            <div class="products">{datashow}</div>
            <div className="more-but">
                <span>View more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 90 90" fill="none">
                <g clip-path="url(#clip0_11_110)">
                <path d="M73.125 45L45 73.125L16.875 45" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M73.125 16.875L45 45L16.875 16.875" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_11_110">
                <rect width="90" height="90" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </div>
        </div>
    );
}