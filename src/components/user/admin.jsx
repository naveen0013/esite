import{ Button ,Form,ListGroup,Image}from 'react-bootstrap';
import React from 'react';
import '../styles.scss';
import { useState } from 'react';

function AdminPanel(data) {
  let products=data.data.Products;
  let dynamicUsing={"img":'','descriptionn':'',"price":"","color":""};
  const [dyn,setDyn]=useState([dynamicUsing])
  let using= {"id":!null,"name":"","description":"","count":!null, "totalPrice":!null ,"category":"","rating":!null,"dynamic":[...dyn]};


  const [initial,setInitial]=useState(using);  
  const [edit,setEdit]=useState(false)

  const HandleChange=(e)=>{
      const name=e.target.name; const value=e.target.value;
    setInitial({...initial,[name]:value});
    
  }

  const HandleSubmit=()=>{
   console.log(initial.dynamic)
   data.data.settingAddAdmin(edit,initial);
   setEdit(false);
  }

  const HandleEdit=(pr)=>{
   console.log("edit",pr)
      setEdit(true);
      setInitial(pr)
  }

  const HandleDynamicChange=(e,i,dynn)=>{
   const dynamic=edit? dynn: dyn;
   dynamic[i][e.target.name]=e.target.value;
   setDyn(dynamic);
   setInitial({...initial,dynamic})
  }

  const deleteDyn=(i)=>{
      const data=[...dyn];data.splice(i,1);
      setDyn(data);
  }
  const AddDynamic=(e)=>{
   e.preventDefault()
   setDyn([...dyn,dynamicUsing]);
  }


  return (
    <div style={{float:'left',width:'100%'}}>
    <div className='adminList'>
       <ListGroup id="listgrp">
          {products.map( pr=> 
          <ListGroup.Item key={pr.id} action>
            <div style={{width:"50%",float:"left"}}>
             <h5>{pr.name}-<b>{pr.id}</b></h5>
             <Button onClick={()=>HandleEdit(pr)} variant='outline-warning'><i className="fa fa-edit"></i></Button> &nbsp;
             <Button onClick={()=>data.data.settingProductsAdmin(pr.id)} variant='outline-danger'><i className="fa fa-trash"></i></Button></div>
             <Image thumbnail src={pr.dynamic[0].img} id="imgg" />
          </ListGroup.Item>
          )}  
       </ListGroup>
    </div>
    <div className='adminForm'>
     
       <Form className='myform'>
       <h5>Add/Edit Products</h5> <br />
          <Form.Group className="mb-3" controlId="name">
             <Form.Label>Name</Form.Label>
             <Form.Control type="text" placeholder="Enter Name" name='name' onChange={HandleChange} value={initial.name} />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="category">
             <Form.Label>category</Form.Label>
             <Form.Control type="text" placeholder="Enter category" name='category' onChange={HandleChange} value={initial.category} />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="rating">
             <Form.Label>Rating</Form.Label>
             <Form.Control type="number" placeholder="Enter rating" name='rating' onChange={HandleChange} value={initial.rating} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description" >
             <Form.Label>Description</Form.Label>
             <Form.Control type="text" placeholder="Enter short description" name='description' onChange={HandleChange} value={initial.description} />
          </Form.Group>

          <div><Button onClick={(e)=>{AddDynamic(e);setInitial(initial); console.log(dyn)}}>Add Dynamic Data</Button>
{dyn.map((dy,i)=>          <Form.Group className="mb-3" controlId="rating" key={i} >
             <Form.Label>Dynamic items {i+1}</Form.Label>
             <Form.Control type="text" placeholder="Enter img" name='img' onChange={(e)=>HandleDynamicChange(e,i,initial.dynamic)} value={edit ? initial.dynamic[i].img : dyn[i].img} />
             <Form.Control type="text" placeholder="Enter full description" name='descriptionn' onChange={(e)=>HandleDynamicChange(e,i,initial.dynamic)} value={edit ? initial.dynamic[i].descriptionn : dyn[i].descriptionn} />
             <Form.Control type="text" placeholder="Enter price" name='price' onChange={(e)=>HandleDynamicChange(e,i,initial.dynamic)} value={edit? initial.dynamic[i].price : dyn[i].price} />
             <Form.Control type="text" placeholder="Enter color" name='color' onChange={(e)=>HandleDynamicChange(e,i,initial.dynamic)} value={edit? initial.dynamic[i].color: dyn[i].color} />
             <Button onClick={()=>deleteDyn(i)} variant="outline-danger"><i className="fa fa-ban"></i></Button>
          </Form.Group>)}</div>

          <Button variant='success' onClick={HandleSubmit} >
          Save
          </Button> &nbsp;
          <Button variant='danger' onClick={()=>{setEdit(false);setInitial(using)}}>cancel</Button>

          
       </Form>
    </div>
 </div>
  )
}

export default AdminPanel