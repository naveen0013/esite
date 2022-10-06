import React from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';
import './styles.scss'
function Navigate(data) {
    let history=useNavigate();
  return (
    <div id="navigation">
        <Button onClick={()=>history(-1)} variant="dark" id="rBtn" > &larr; </Button> &nbsp; &nbsp;
        <Button onClick={()=>history(1)}  variant="dark"  id="rBtn" > &rarr; </Button>
    </div>
  )
}

export default Navigate