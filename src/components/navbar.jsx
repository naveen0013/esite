import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.scss';
import {Badge, Dropdown,DropdownButton, Container, Navbar , Nav , NavDropdown ,Form ,FormControl, Button ,ButtonGroup} from 'react-bootstrap';

function NavBar(data) {
  let navigate=useNavigate();
  let [searched,setSearched]=useState("");
  const logoutHere=()=>{
   data.data.settingActiveuser({});
   data.data.setCproducts([]);
   navigate('/');
  }
  
 const HandleChange=(event)=>{
    event.preventDefault();
      setSearched(event.target.value);
      console.log(searched);
      let products=[];
      if(searched!==""){
      products=data.data.Products.filter(product=>{
        return product.name.toLowerCase().indexOf(searched.toLowerCase())!==-1
      }) 
      data.data.settingProducts(products);
   }  else{
      products=data.data.Products;
      data.data.settingProducts(products);
   }
      console.log(products);
      navigate('/');
 }

 
  return (
    <div className='navMain'>
    <Navbar bg="light" expand="lg">
       <Container  className='nav' >
          <Navbar.Brand  >
             <img src="https://www.graphicsprings.com/filestorage/stencils/3055581cff0526602142cbb0bfba9fca.png" width="100" height="60" />
             <Nav.Link className="navbar-item" onClick={()=>navigate('/')} >
                <h3> <span>e</span>-Site</h3>
             </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
          >
          <Nav.Link onClick={()=>navigate('/')} id='homee'>Home</Nav.Link>
          <Nav.Link onClick={()=>navigate('/cart')}>Cart {data.data.activeUser && data.data.cartProducts.length >0 && <Badge pill bg="success">{data.data.cartProducts.length}</Badge>}
            </Nav.Link>
          <NavDropdown title="Category" id="navbarScrollingDropdown">
             <NavDropdown.Item onClick={()=>navigate('/category/accessories')}>accessories</NavDropdown.Item>
             <NavDropdown.Item onClick={()=>navigate('/category/electronics')}>electronics</NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item href="#action5">
                Something else here
             </NavDropdown.Item>
          </NavDropdown>
          </Nav>
          <Form className="d-flex" >
             <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searched}
                onChange={HandleChange}
                onKeyUp={HandleChange}
                />
             
          </Form>
          { data.data.activeUser.username===undefined?
          <ButtonGroup  style={{marginLeft:"20px"}}>
             <Button variant="primary" onClick={()=>navigate('/signup')}>Sign Up</Button>
             <Button variant="secondary" onClick={()=>navigate('/login')}>Log in</Button>
          </ButtonGroup>
          :
          <div style={{marginLeft:"20px"}}>
             <DropdownButton id="dropdown-basic-button" variant="dark" title={ data.data.activeUser.username }>
             <Dropdown.Item onClick={()=>navigate('/viewOrders')}>view Orders</Dropdown.Item>
             {data.data.activeUser.username==='admin' && <Dropdown.Item onClick={()=>navigate('/admin')} >Admin Panel</Dropdown.Item>}
                <Dropdown.Item onClick={logoutHere}>Logout <i className="fa fa-sign-out" aria-hidden="true"></i></Dropdown.Item>
             </DropdownButton>
          </div>

          }
       </Container>
    </Navbar>
 </div>
  )
}

export default NavBar