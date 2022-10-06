import React,{useState} from 'react'
import '../styles.scss';
import {useNavigate} from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';

function Register(data) {
  const [signUp,setSignup]=useState([]);
  let users=data.data.users;
  let navigate=useNavigate();

  const HandleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setSignup({...signUp,[name]:value});
    console.log(signUp)
 }

 const signUpHere=(event)=>{
  event.preventDefault();
  users.forEach(user=>{
    if(user.email!==signUp.email && user.username!==signUp.username){
      if(signUp.password===signUp.confirmpassword){
          data.data.settingUsers({...signUp,orders:{}});
          data.data.setMsgHere({show:true,color:"primary",msggg:`registered successfully`})
          console.log("signup "+signUp)
          navigate('/login');
      }
      
    }
  })
}

  return (
    
<div className='registerr'>
   <Form>
      <Form.Group className="mb-3" controlId="formBasicusername">
         <Form.Label>User name</Form.Label>
         <Form.Control type="email" placeholder="Enter username" name="username"  value={signUp.name} onChange={HandleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" name="email" value={signUp.email} onChange={HandleChange} onKeyUp={HandleChange} />
         <Form.Text className="text-muted">
            We'll never share your email with anyone else.
         </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" name="password" value={signUp.password} onKeyUp={HandleChange} onChange={HandleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicconfirmPassword">
         <Form.Label>Confirm Password</Form.Label>
         <Form.Control type="password" placeholder="confirm Password" name="confirmpassword" value={signUp.confirmpassword} onKeyUp={HandleChange} onChange={HandleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicaddress">
         <Form.Label>address </Form.Label>
         <textarea type="text" placeholder="enter address" name="address" rows="4" cols="55" value={signUp.address} onKeyUp={HandleChange} onChange={HandleChange} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={signUpHere}>
      Submit
      </Button>
   </Form>
</div>
  )
}

export default Register