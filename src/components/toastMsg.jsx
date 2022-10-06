import React from 'react'
import { Toast ,ToastContainer} from 'react-bootstrap'
function ToastMsg(data) {
    
  const setHere=()=>{
      data.data.setMsgHere({show:false,color:"",msggg:""});
  }

 data.data.msg.show && setTimeout(() => {setHere()}, 1500);
 

  return (
    <div>
        <ToastContainer className="p-2" position={'top-end'}>
        <Toast show={data.data.msg.show}  onClose={setHere}  bg={data.data.msg.color} >
        <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">e-Site</strong>
            <small>few seconds ago</small>
          </Toast.Header>
          <Toast.Body style={{color:"white"}}>{data.data.msg.msggg}</Toast.Body>
        </Toast>
        </ToastContainer>
        
    </div>
  )
}

export default ToastMsg;