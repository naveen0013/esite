import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function ModalPopup(data) {
    let product=data.data.show.product;
    let navigate=useNavigate();

    if(data.data.show.showing){
        setTimeout(() => {
            data.data.settingShow(false,{})
        }, 3000);
    }
    
  return (
    <div>
        <Modal show={data.data.show.showing} onHide={()=>{data.data.settingShow(false,{})}}>
            <Modal.Header closeButton>
                <Modal.Title >{product.name}</Modal.Title>

            </Modal.Header>
{ product&& product.dynamic && product.dynamic[0] &&          <Modal.Body >
                <img src={product.dynamic[0].img} style={{width:"auto",height:"300px"}}/>
                <h4>${product.dynamic[0].price}</h4>
                <h6>{product.dynamic[0].category}</h6>
        {  data.data.show.showing &&      <div>   {Array.from(Array(product.rating).keys()).map(b=><i key={b} className="fa fa-star" style={{color:"orange"}} ></i> )}
             { Array.from(Array(5-product.rating).keys()).map(b=><i key={b} className="fa fa-star"></i> )}
             <br /></div>}
                <p>{product.dynamic[0].descriptionn}</p>
                <Button onClick={()=> {navigate(`/buyPage/${product.id}`);data.data.settingShow(false,{})}} variant="success">check &rarr;</Button>
            </Modal.Body>}
        </Modal>
    </div>
  )
}

export default ModalPopup