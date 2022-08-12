import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';
import Cart from './cart';
import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from "react"

function App() {
  let data=[
    {
      id:1,
      title:"Smart Phone",
      price:15000,
      rating:3,
      img:"images/smartphone.jpeg"
    },
    {
      id:2,
      title:"Laptop",
      price:50000,
      rating:2,
      img:"images/laptop.jpeg"
    },
    {
      id:3,
      title:"TV",
      price:30000,
      rating:0,
      img:"images/tv.jpeg"
    },
    {
      id:4,
      title:"T-shirt",
      price:1500,
      rating:2,
      img:"images/tshirt.jpeg"
    },
    {
      id:5,
      title:"Mascara",
      price:4000,
      rating:2,
      img:"images/mascara.jpeg"
    },
    {
      id:6,
      title:"Shoe",
      price:2000,
      rating:1,
      img:"images/shoes.jpeg"
    }
  ]
let [cart,setcart]=useState([])
let [total,settotal]=useState(0)
  let addtocart=(item)=>{
    setcart([...cart,item])
    settotal(total+item.price)
  }
   let removecart=(item)=>{
       let index=cart.findIndex((ele)=>ele.id===item.id)
       cart.splice(index,1)
       setcart([...cart])
       settotal(total-item.price)
   }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
          {
            data.map((item)=>{
              return <Card item={item} eventh={addtocart} cartitem={cart}></Card>
            })
          }
          </div>
          </div>
         
          <div className="col-lg-4">
       {
        cart.length===0?<h4 style={{color:"red"}}>No Items In Cart</h4>:
        <div> <ol class="list-group list-group-numbered">
        {
          cart.map((item)=>{
            return <Cart cartitem={item} remove={removecart}></Cart>
          })
        }
        </ol>
        <h3 style={{color:"green"}}>Total-Rs.{total}</h3>
        </div>
       }
       </div>
     </div>
     </div>
    
  );
}

export default App;
