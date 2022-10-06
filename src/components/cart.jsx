import React from 'react'
import './styles.scss';
import { Card,Col,Row,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Cart(data) {
  let navigate=useNavigate();
let productLists=data.data.cartProducts;
productLists.forEach(element1=>{
        let count=0
        console.log(count)
        data.data.cartProducts.forEach(element2=>{ element1.id === element2.id && count++ ;});
        if( count>0  ) { element1.count=count  ;  element1.totalPrice=element1.dynamic[0].price*count }
    })
const ids = productLists.map(o => o.id)
let products=productLists.filter((pr, index) => !ids.includes(pr.id, index + 1))

const clearCart=()=>{
    data.data.setCproducts([]);
    data.data.setMsgHere({show:true,color:"danger",msggg:"cart cleared successfully"});
}

data.data.msg.show && setTimeout(() => {
  data.data.setMsgHere({show:false,color:"",msggg:""});
}, 1500);

const proceedTo=(event)=>{
  event.preventDefault();
  data.data.setOrders(products);
  navigate('/placeOrder');
}

  return (
      <div >
          <div style={{padding:"20px"}}>
    <div style={{float:'right'}}>
        {products.length>0 && <> <Button variant="danger" id="clearCart" onClick={clearCart} >clearCart</Button>  <Button variant="success" id="proceed" style={{marginLeft:"10px"}} onClick={proceedTo} >Proceed to Buy</Button> </> }
        </div>
  <Row xs={"auto"} md={7} className="g-4">
    {products.map((pr, idx) => (
      <Col key={pr.id} style={{maxHeight:"400px"}}>
        <Card>
          <Card.Img variant="top" src={pr.dynamic[0].img}  style={{width:"auto",height:"125px"}} />
          <Card.Body>
            <Card.Title>{pr.name}</Card.Title>
            <Card.Title>{pr.count}</Card.Title>
            <Card.Text>
             
              ${pr.totalPrice}
            </Card.Text>
            
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  </div>
 
          
  </div>
  );
}

export default Cart