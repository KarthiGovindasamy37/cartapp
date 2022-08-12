function Cart({cartitem,remove}){
    return <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{cartitem.title}</div>
      {cartitem.price}
    </div>
    <button onClick={()=>{remove(cartitem)}} class="badge bg-primary rounded-pill">Remove</button>
  </li>
    
}

export default Cart;