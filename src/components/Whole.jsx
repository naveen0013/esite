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
  let hereProducts=[
    {"id":1,"name":"Mobile","description":"product description .. Redmi Note 10 Pro description","count":0 , "totalPrice":0 ,"category":"electronics","rating":4,"dynamic":[{"img":"https://m.media-amazon.com/images/I/71hXNHGym5L._SX569_.jpg","descriptionn":" Redmi Note 10 Pro(Dark Night, 6GB RAM, 128GB Storage) -120hz Super Amoled Display|64MPwith 5mp Super Tele-Macro | 33W Charger Included","price":199,"color":"primary"}]},
    {"id":2,"name":"Laptop","description":"product description .. Lenovo IdeaPad  description","count":0, "totalPrice":0,"category":"electronics","rating":3,"dynamic":[{"img":"https://images-eu.ssl-images-amazon.com/images/I/51hpsGSvHRL._SX300_SY300_QL70_FMwebp_.jpg","descriptionn":"Lenovo IdeaPad Slim 3 11th Gen Intel Core i5 15.6 inches FHD Thin & Light Laptop (8GB/512GB SSD/Windows 11/Office 2021/2Yr Warranty/Backlit/3months Xbox Game Pass/Arctic Grey/1.65Kg), 82H802FHIN","price":1299,"color":"primary"}]},
    {"id":3,"name":"Headset","description":"product description .. boAt headset description","count":0, "totalPrice":0 ,"category":"electronics","rating":3,"dynamic":[{"img":"https://m.media-amazon.com/images/I/61wkUsZxKjL._SY450_.jpg","descriptionn":"boAt Rockerz 370 Bluetooth Wireless On Ear Headphone with Mic (Fiery Red) ","price":149,"color":"primary"}]},
    {"id":4,"name":"Powerbank","description":"product description .. PTron powerbank description","count":0, "totalPrice":0 ,"category":"accessories","rating":4,"dynamic":[{"img":"https://m.media-amazon.com/images/I/51Ibw+0Q1aL._SX679_.jpg","descriptionn":"PTron 10000 mAh lithium_polymer Dynamo Pro Power Bank with 18 Watt Fast Charging, Black ","price":99,"color":"primary"}]},
    {"id":5,"name":"Gamesystem","description":"product description .. PS5 gamesystem description","count":0, "totalPrice":0 ,"category":"electronics","rating":2,"dynamic":[{"img":"https://m.media-amazon.com/images/I/41YJEOpn36L.jpg","descriptionn":"New World PS5 Vertical Stand for PS5 Digital Edition/Ultra HD Console with Cooling Fan, Controller Charging Station and 15 Game Cards Slots and Headset Stand","price":799,"color":"primary"}]},
    {"id":6,"name":"Speaker","description":"product description..Speaker description","count":0, "totalPrice":0 ,"category":"electronics","rating":4,"dynamic":[{"img":"https://m.media-amazon.com/images/I/61Dw2jJTurS._SY450_.jpg","descriptionn":"Clavier Pluto Portable Bluetooth Speaker, Bluetooth 5.0 Wireless Speakers with HD Sound and Rich Bass, LED Flashing Light, Built-in Mic for iPhone & Android, ","price":499,"color":"primary"}]},
    {"id":7,"name":"Bag","description":"product description .. Bag description","count":0, "totalPrice":0 ,"category":"accessories","rating":4,"dynamic":[{"img":"https://m.media-amazon.com/images/I/91YVwfV7b1L._UY741_.jpg","descriptionn":"Gear Superior Backpack Orange-Black Backpack (BKPSPRIOR0601) ","price":499,"color":"primary"}]},
    {"id":8,"name":"Watch","description":"product description .. Watch description","count":0, "totalPrice":0 ,"category":"accessories","rating":5,"dynamic":[{"img":"https://m.media-amazon.com/images/I/51oWvyUWJSL._UX466_.jpg","descriptionn":"Fossil Chronograph Men's Watch (Black Dial Black Colored Strap)","price":499,"color":"primary"}]},
    {"id":9,"name":"Toolkit","description":"product description .. Toolkit description","count":0, "totalPrice":0 ,"category":"accessories","rating":2,"dynamic":[{"img":"https://m.media-amazon.com/images/I/819PiiBGynL._SX450_.jpg","descriptionn":"Flexzion Tool Set Box - Hand Tool Kit & Accessories For General Household DIY Home Repair with Plastic Toolbox Storage Organizer Case - Homeowner's Tool Kit (Orange & Black)","price":499,"color":"primary"}]},
        {"id":11,"name":"SanDisk","description":"product description ..SanDisk description","count":0 , "totalPrice":0 ,"category":"accessories","rating":4,"dynamic":[{"img":"https://m.media-amazon.com/images/I/7180ZAZmERL._SX569_.jpg","descriptionn":"SanDisk Ultra microSD UHS-I Card 64GB, 120MB/s R","price":99,"color":"primary"}]},
        {"id":12,"name":"LED Projector","description":"product description .. LED Projector  description","count":0, "totalPrice":0,"category":"electronics","rating":3,"dynamic":[{"img":"https://m.media-amazon.com/images/I/718Msrt2xkL._SY450_.jpg","descriptionn":"Everycom X7 (1080p Support) LED Projector 1800 Lumen | Large 120-inch Display Projection with HDMI + VGA + Aux + USB Connectivity - (Black)","price":1099,"color":"primary"}]},
        {"id":13,"name":"HDMI cable","description":"product description .. HDMI cable description","count":0, "totalPrice":0 ,"category":"accessories","rating":3,"dynamic":[{"img":"https://m.media-amazon.com/images/I/81pyQdiNt7S._SX466_.jpg","descriptionn":"BlueRigger High Speed HDMI Cable with Ethernet - Supports 3D, 4K 60Hz, Audio Return - Latest Version (6.6 Feet / 2 Meters)","price":99,"color":"primary"}]},
        {"id":14,"name":"LED TV","description":"product description .. LED Tv description","count":0, "totalPrice":0 ,"category":"electronics","rating":4,"dynamic":[{"img":"https://m.media-amazon.com/images/I/71sFjIGl9UL._SX450_.jpg","descriptionn":"AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)","price":1699,"color":"primary"}]}
  ];
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
  //  let a=fetch('http://localhost:3000/products');
  //   a.then(response => response.json())
  //   .then(json => setProducts(json));

  setProducts(hereProducts);
  }
  useEffect(()=>{  setProducts(hereProducts)},[])

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