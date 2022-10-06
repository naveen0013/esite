import React from 'react'
import './styles.scss';
import {useNavigate} from 'react-router-dom';
import { Card,Col,Row,Button } from 'react-bootstrap';
function OneView(data) {
    //const {id,name,img,description,price,count,totalPrice,category}=data
    console.log(data)
    let navigate=useNavigate();
/*    const cartEvent=(event)=>{
     event.preventDefault();
     navigate(`/buyPage/${product.id}`);
  } */

  let pr=data.pr
  return (
<>
{/* 
   <div className="column">
<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={product.img} alt="Placeholder imagesss" />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      
      <div className="media-content">
        <p className="title is-4">{product.name}</p>
        <p className="subtitle is-6">{product.category}</p>
      </div>
    </div>

    <div className="content">
    {product.description[0]} <Nav.Link variant="info">@{product.name}</Nav.Link>
      <br />
      <nav className="level is-desktop">
               <div className="level-left">
                  <Nav.Link className="level-item" aria-label="reply" onClick={cartEvent} >
                  <span className="icon is-large">
                  <i className="fa fa-shopping-cart fas fa-x" aria-hidden="true" ></i>
                  </span>
                  </Nav.Link>
               </div>
            </nav>
    </div>
  </div>
</div>
  </div> */}
{/* 
<Col key={pr.id}  style={{maxHeight:"400px"}}>
      <Card> 
        <Card.Img variant="top" src={pr.img}  style={{width:"auto",height:"200px"}} />
        <Card.Body>
          <Card.Title>{pr.name}</Card.Title>
          <Card.Text>
            {pr.description[0]}
          </Card.Text>
          <Button onClick={()=> navigate(`/buyPage/${pr.id}`)} ><i className="fa fa-shopping-cart fas fa-x" aria-hidden="true" ></i></Button>
          <Button onClick={()=>data.data.settingShow()} style={{marginLeft:"10px"}} >@</Button>
        </Card.Body>
      </Card>
    </Col>
 */}
  </> 

  )
}

export default OneView