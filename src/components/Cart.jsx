import React,{useEffect, useState} from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../contexts/contextProvider";
import { cartData } from "../data/dummy";
import { Button } from ".";
import product5 from '../data/product5.jpg';
import product6 from '../data/product6.jpg';
import product7 from '../data/product7.jpg';


const Cart = () => {
  const { currentColor, setIsClicked } = useStateContext();
  const [count1,setCount1]=useState(0);
  const [count2,setCount2]=useState(0);
  const [count3,setCount3]=useState(0);
  const price={
    price1:25,
    price2:45,
    price3:19,
  }
  let cartData;
     cartData = [
      {
        image:
          product5,
        name: 'butterscotch ice-cream',
        category: 'Milk product',
        price: price.price1,
        count:count1,
      },
      {
        image:
          product6,
        name: 'Supreme fresh tomato',
        category: 'Vegetable Item',
        price: price.price2,
        count:count2
      },
      {
        image:
          product7,
        name: 'Red color candy',
        category: 'Food Item',
        price: price.price3,
        count:count3
      },
    ];
    function dec1(){
      setCount1(prev=>{
        if(prev===0){
          return 0
        }else{
          return prev-=1;
        }
      }
        );
    }
    function inc1(){
      setCount1(prev=>prev+=1);
    }

    function dec2(){
      setCount2(prev=>{
        if(prev===0){
          return 0
        }else{
          return prev-=1;
        }
      }
        );
    }
    function inc2(){
      setCount2(prev=>prev+=1);
    }

    function dec3(){
      setCount3(prev=>{
        if(prev===0){
          return 0
        }else{
          return prev-=1;
        }
      }
        );
    }
    function inc3(){
      setCount3(prev=>prev+=1);
    }

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            type="button"
            onClick={() => setIsClicked(false)}
            style={{ color: "rgb(153 , 171 , 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
            <div>
              <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img className="rounded-lg h-80 w-24" src={product5} alt="" />
                <div>
                  <p className="font-semibold ">{cartData[0].category}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                    {cartData[0].name}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">${price.price1}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p onClick={dec1}  className="p-2 border-r-1 cursor-pointer dark:border-gray-600 border-color text-red-600 ">
                        <AiOutlineMinus />
                      </p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                        {count1}
                      </p>
                      <p onClick={inc1} className="p-2 border-r-1 cursor-pointer border-color dark:border-gray-600 text-green-600">
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img className="rounded-lg h-80 w-24" src={product6} alt="" />
                <div>
                  <p className="font-semibold ">{cartData[1].category}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                    {cartData[1].name}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">${price.price2}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p onClick={dec2} className="p-2 border-r-1 cursor-pointer dark:border-gray-600 border-color text-red-600 ">
                        <AiOutlineMinus />
                      </p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                        {count2}
                      </p>
                      <p onClick={inc2} className="p-2 border-r-1 cursor-pointer border-color dark:border-gray-600 text-green-600">
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img className="rounded-lg h-80 w-24" src={product7} alt="" />
                <div>
                  <p className="font-semibold ">{cartData[2].category}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                    {cartData[2].name}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">${price.price3}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p onClick={dec3} className="p-2 border-r-1 cursor-pointer dark:border-gray-600 border-color text-red-600 ">
                        <AiOutlineMinus />
                      </p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                        {count3}
                      </p>
                      <p onClick={inc3} className="p-2 border-r-1 cursor-pointer border-color dark:border-gray-600 text-green-600">
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">${count1*price.price1+count2*price.price2+count3*price.price3}</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
