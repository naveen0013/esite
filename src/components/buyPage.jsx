import React,{useState} from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import './styles.scss';
import { Accordion ,Button , Alert} from 'react-bootstrap';

function BuyPage(data) {
   let navigate=useNavigate();
   let id=useParams();id=id.id;
   let product=data.data.Products.filter(p => p.id ==id );
   product=product[0];

  const cartAdd=(event)=>{
    event.preventDefault();
    if(data.data.activeUser.username===undefined){
        navigate('/login')
     }else{

            data.data.settingCart(product);
            navigate('/cart');
            data.data.setMsgHere({show:true,color:"success",msggg:"added to cart successfully"}); 
   }
  }

  const directBuy=(event)=>{
   event.preventDefault();
   if(data.data.activeUser.username===undefined){
      navigate('/login')
   }else{
         
          data.data.setOrders([product]);
          navigate(`/placeOrder`);
 }
  }
  
  return (
    <div>
         <div className="box">
      <article className="media">
         <div className="media-left">
            <figure className="image is-80x80">
               <img src={product.dynamic[0].img} alt="Imagess"/>
            </figure>
         </div>
         <div className="media-content">
            <div className="content">
               <p>
                  <strong>{product.name}</strong> <br/>
                  <small>{product.category}</small><br/>
                  <strong>${product.dynamic[0].price}</strong>
                  <br/>
                  <div>   {Array(product.rating).map(b=><i key={b} className="fa fa-star" style={{color:"orange"}} ></i> )}
             { Array(5-product.rating).map(b=><i key={b} className="fa fa-star"></i> )}
             <br /></div>
                  {product.description}
               </p>
               
            </div>
            <div >
                    <Button variant="success" onClick={directBuy} style={{marginRight:"5px",backgroundColor:"rgb(34, 161, 163)",border:"1px solid rgb(34, 161, 163)"}} >Buy Now</Button> &nbsp;
                    <Button variant="warning" onClick={cartAdd} >Add to Cart <i className="fa fa-cart-plus" aria-hidden="true"></i></Button>
            </div>

               <Accordion defaultActiveKey='0' className='desc' >
                  <Accordion.Item eventKey='0'>
                     <Accordion.Header >Full Description</Accordion.Header>
                     <Accordion.Body>{product.dynamic[0].descriptionn}</Accordion.Body>
                  </Accordion.Item>
               </Accordion>
         </div>
      </article>
   </div>
    </div>
  )
}

export default BuyPage