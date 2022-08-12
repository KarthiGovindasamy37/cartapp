import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react'


function Card({item,eventh,cartitem}){
  
return <div className="col-lg-4 mb-2">
<div className="card" style={{width: "14rem"}}>
  <img src={item.img} style={{height: "180px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{item.title}</h5>
  <div className="card-text">Rs.{item.price}</div>
  
  <div style={{color: "yellow"}}>
    {
      item.rating===0?<span style={{color: "red"}}>No reviews</span>:
     [...Array(item.rating)].map((ele)=>{
  return <span><FontAwesomeIcon icon={faStar} /></span>})
    }
  </div>
  
  <button disabled={cartitem.some((ele)=>ele.id===item.id)} onClick={()=>{eventh(item)}} className="btn btn-primary">Add To Cart</button>
</div>
</div>
</div>


}
export default Card;