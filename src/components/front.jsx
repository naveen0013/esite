import React,{useState} from 'react'
import OneView from './oneView';
import './styles.scss';
import { Card,Col,Row,Button,Pagination } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import ModalPopup from './modal';

function Front(data) {
  let Products=[];
  let navigate=useNavigate();
   if( data.data.searchedProducts.length===0 ){  Products=data.data.Products ; }
   else { Products=data.data.searchedProducts;   };

  const newObj=data.data.newObj;

  let lastOne=newObj.currentPage * newObj.contentsPP;
  let firstOne=lastOne - newObj.contentsPP;
  let current=Products.slice(firstOne,lastOne)
  console.log(firstOne,lastOne,current) 

  //  const productLists=products.map(product=> <OneView  className="productLists" key={product.id} product={product} />  )

  let items = [];
  for (let number = 1; number <=Math.ceil(Products.length/newObj.contentsPP); number++) {
    items.push(
      <Pagination.Item id="pageItem" key={number} active={number === newObj.currentPage} onClick={()=>{data.data.setNewobj({currentPage:number,contentsPP:5})}} >
        {number}
      </Pagination.Item>
      
    );
  }
  

  return (
    <div id="frontOver">
    <div>
{/*         {productLists}   */}
<div style={{padding:"20px"}}>

<Row xs={"auto"} md={5} className="">
  {current.map(pr => (
    <div key={pr.id}>
      
      {/* <OneView pr={pr} settingShow={settingShow}/> */}

   <Col key={pr.id}  style={{maxHeight:"480px"}} >
      <Card className='cardCol' style={{height:"400px"}} > 
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
          <Button onClick={()=> navigate(`/buyPage/${pr.id}`)} id="rBtn"  ><i className="fa fa-shopping-cart" aria-hidden="true"></i></Button>
        </Card.Body>
        </div>
      </Card>
      
    </Col> 
    </div>
  ))}
</Row>

</div>
    </div>
    <Pagination id="pagenum">
  {items}
</Pagination>
    </div>
  )
}

export default Front;