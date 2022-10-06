import React,{useState} from 'react';
import { Form, Image ,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

function PlaceOrder(data) {
  let products=data.data.orders;
  let totally=0;
  products.map(pr=>{totally=totally+pr.totalPrice});
  let User=data.data.activeUser;
  let navigate=useNavigate();
  const [user,setUser]=useState({...User,paymentMethod:""});
  let date= new Date();

  console.log(products)
  const handleChange=(event)=>{
      let name=event.target.name;
      let value=event.target.value;
      setUser({...user,[name]:value});
      console.log(user)
  }
  const getDeliverydate=()=>{
      var deliverDate=new Date(date);
      deliverDate.setDate( deliverDate.getDate() + 2 );
      return deliverDate;
  }

  const onsubmitOrder=(event)=>{
    event.preventDefault();
      let orderDetails={
        date:date,
        deliverDate:getDeliverydate(),
        userDetails:data.data.activeUser,
        deliverAddress : user.address,
        paymentMethod :user.paymentMethod,
        purchased:products,
        Amount:(totally>0 ? totally: products[0].price ),
      }
      data.data.setCproducts([]);
      data.data.setOrders([]);
      data.data.setActiveuser({...user,orders:orderDetails});
      data.data.setUsers(data.data.users.map(u => u.email===user.email ? user:u ));
      console.log(data.data.users)
      navigate('/');
  }

  const cancelHere=(event)=>{
    event.preventDefault();
    data.data.setOrders([]);
    data.data.setCproducts([]);
    navigate('/');
  }
/* 
  const  googleSearch=(quest)=>{
    var googlefind = quest;
    let a=window.open(`http://www.google.com/search?hl=en&q=` +"distance between "+ quest +"and Guindy-600032");
    a.click();
    console.log(a);
   // fetch(a).then(r=>r.json()).then(o=>console.log(o));
   } */

  return (
    <div  className="placeorder">{ 
      products.length>1 ?
    <div style={{marginTop:"20px"}} > {products.map(pr=>
      <div key={pr.id} style={{display:"inline-grid"}}>
        <Image src={pr.dynamic[0].img} thumbnail style={{width:"auto",height:"70px"}} />
        <p>{pr.count}</p>
        
      </div>
        ) }
        <p>{totally}</p>
    </div>
      : <> <Image src={products[0].dynamic[0].img} thumbnail style={{width:"auto",height:"70px"}} /> 
            <p>1</p>
            <p>{products[0].dynamic[0].price}</p> </>  }

      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Enter address</Form.Label>
         <textarea required style={{marginLeft:"20px"}} type="text" placeholder="enter delivery Address"  rows="4" cols="50" value={user.address} name="address" onChange={handleChange} />
      </Form.Group>
      <Form.Label>Select Payment Method</Form.Label>
        <div className="paymentradio" style={{marginLeft:"20px"}}>
        <input required type="radio" id="online" name="paymentMethod" value="Online Payment" onChange={handleChange} onKeyUp={handleChange} />
            <label for="online">Online Payment</label><br />
          <input required type="radio" id="cashOn" name="paymentMethod" value="Cash On delivery" onChange={handleChange}  onKeyUp={handleChange} />
           <label for="cashOn">Cash On delivery</label><br />
        </div>
        <br />
        <Button  style={{marginLeft:"10px"}} onClick={onsubmitOrder}  variant="primary">Place your Order</Button>
        <Button  style={{marginLeft:"10px"}} onClick={cancelHere}  variant="danger">Cancel</Button>
      </Form>

    </div>
  )
}

export default PlaceOrder