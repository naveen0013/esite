import React,{useState} from 'react'
import '../styles.scss';
import {useNavigate} from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';

function Login(data) {
  let initially={email:"",password:""};
  let users=data.data.users;
  let navigate=useNavigate();

 const [logOn,setLogon]=useState(initially);

 const HandleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setLogon({...logOn,[name]:value});
    console.log(logOn)
 }

 const loginHere=(event)=>{
      event.preventDefault();
      users.forEach(user=>{
        if(user.email===logOn.email && user.password===logOn.password){
          data.data.settingActiveuser(user);
          data.data.setMsgHere({show:true,color:"primary",msggg:`${user.username} login successfully`})
          navigate('/');
        }
      })
 }

  return (
<div className='loginn'>
   <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" name="email" value={logOn.email} onChange={HandleChange} onKeyUp={HandleChange} />
         <Form.Text className="text-muted">
            We'll never share your email with anyone else.
         </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" name="password" value={logOn.password} onKeyUp={HandleChange} onChange={HandleChange} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={loginHere}>
      Submit
      </Button>
   </Form>
</div>

  )
}

export default Login