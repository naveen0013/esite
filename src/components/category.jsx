import React from 'react'
import {useParams,useNavigate} from 'react-router-dom';
import { Card,Col,Row,Button } from 'react-bootstrap';
import './styles.scss';

function Category(data) {
    let navigate=useNavigate();
    let param=useParams();

    let products=data.data.Products.filter(pr=>pr.category===param.categoryName);

  return (
    <div id="frontOver">
    <div style={{padding:"20px"}}>
  <h3>{param.categoryName}</h3>
 <Row xs={"auto"} md={5} className="g-4">
   {products.map(pr => (
     <div key={pr.id}>
    <Col   style={{maxHeight:"480px"}}>
       <Card > 
         <div style={{margin:"10px"}}>
       <div id="cardImg" >
         <Card.Img variant="top" id="cImg" src={pr.dynamic[0].img}  />
         </div>
         <Card.Body  >
           <Card.Title>{pr.name}</Card.Title>
           <Card.Text onMouseOver={()=>data.data.settingShow(true,pr)}>
           {Array.from(Array(pr.rating).keys()).map(b=><i key={b} className="fa fa-star" style={{color:"orange"}} ></i> )}
             { Array.from(Array(5-pr.rating).keys()).map(b=><i key={b} className="fa fa-star"></i> )}
             <br />
             {pr.description}
           </Card.Text>
           <Button onClick={()=> navigate(`/buyPage/${pr.id}`)} id="rBtn" ><i className="fa fa-shopping-cart fas fa-x" aria-hidden="true" ></i></Button>
         </Card.Body>
         </div>
       </Card>
       
     </Col> 
     </div>
   ))}
 </Row>
 </div>
    </div>
  )
}

export default Category