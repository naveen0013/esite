import React,{useEffect, useState} from 'react'
import Footer from './footer'
import Front from './front';
import  './styles.scss'; 
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import BuyPage from './buyPage';
import Cart from './cart';
import Login from './user/login';
import Register from './user/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import ToastMsg from './toastMsg';
import ModalPopup from './modal';
import Navigate from './navigate';
import Category from './category';
import PlaceOrder from './placeOrder';
import ViewOrders from './orderView';
import TryDesign from './tryDesign';
import AdminPanel from './user/admin';
import ProtectedRoute from './protectedRoute';



function Whole() {
  let User={username:"admin",password:"1234",email:"admin@gmail.com",confirmpassword:"1234",address:"thiru vi ka industrial estate, Guindy-600032",orders:{}};

  let [Products,setProducts]=useState([]);
  let [msg,setMsg]=useState({show:false,color:"light",msggg:""})
  let [cartProducts,setCproducts]=useState([]);
  let [users,setUsers]=useState([User]);
  let [activeUser,setActiveuser]=useState({});
  let [searchedProducts,setSearched]=useState([]);
  let [show,setShow]=useState({showing:false,product:{}});
  let [newObj,setNewobj]=useState({currentPage:1,contentsPP:5});
  let [orders,setOrders]=useState([]);

   const getData=()=>{
   let a=fetch('http://localhost:3000/products');
    a.then(response => response.json())
    .then(json => setProducts(json));
  }
  useEffect(()=>{  getData() },[])

  const settingProductsAdmin=(id)=>{
      setProducts(Products.filter(pr=> pr.id!==id))
  }
  const settingAddAdmin=(edit,p)=>{
  if(!edit) { p={...p,"id":Products.length+2}
        setProducts([...Products,p])
      }else {setProducts(Products.map(pr=> (pr.id===p.id ? p : pr)))}
  }

  const settingProducts=(pr)=>{
    setSearched(pr)
  }
  const settingCart=(product)=>{
    setCproducts([...cartProducts,product])
  }
  const setMsgHere=(any)=>{
    setMsg(any);
  }
  const settingUsers=(user)=>{
    setUsers([...users,user])
  }
  const settingActiveuser=(activeUSER)=>{
    setActiveuser(activeUSER)
  }
  const settingShow=(bol,pr)=>{
    setShow({
      showing:bol,
      product:pr
    })
  }

  return (
    <div className='whole'>
      <Router>
      <NavBar  data={{activeUser,Products,cartProducts,settingActiveuser,settingProducts,setCproducts,users}} />
      <ToastMsg data={{msg,setMsgHere}}/>
      <ModalPopup data={{show,settingShow}} />
      <Routes>
        <Route path={'/'} element={<Front  data={{searchedProducts,Products,newObj,settingShow,setNewobj}} />} />
        <Route path={'/buyPage/:id'} element={<BuyPage  data={{Products,activeUser,settingCart,setOrders,setMsgHere,cartProducts}}/>}  /> 
        <Route path={'/login'} element={<Login data={{users ,settingActiveuser,setMsgHere,msg}} />} />
        <Route path={'/signup'} element={<Register data={{users,settingUsers,setMsgHere,msg}} />} />
        <Route path={'category/:categoryName'} element={<Category data={{Products,settingShow}} />} /> 
        <Route path={'/design'} element={<TryDesign  data={{activeUser,Products,cartProducts,settingActiveuser,settingProducts,setCproducts,users}}/>}  />
        <Route path={'/cart'} element={<Cart  data={{cartProducts,setCproducts,setMsgHere,msg,settingCart,setOrders}} />} />
        <Route path={'/placeOrder'} element={<PlaceOrder data={{cartProducts,activeUser,setCproducts,orders,setOrders,setActiveuser,users,setUsers}} />} />
        <Route path={'/viewOrders'} element={<ViewOrders data={{activeUser}} />} />
        <Route element={<ProtectedRoute data={{activeUser,settingActiveuser,setCproducts,users}} />} >
            <Route path={'/admin'} element={<AdminPanel data={{activeUser,Products,settingActiveuser,settingProductsAdmin,settingAddAdmin,users}} exact />}  />
        </Route>
      </Routes>
      <Navigate />
      <Footer />
      </Router>
    </div>
  )
}

export default Whole