import React from 'react'
import { Table,Image } from 'react-bootstrap';

function ViewOrders(data) {
    let user=data.data.activeUser;
    let purchased= user.orders.purchased;
    console.log(user.orders.purchased)
    let today= new Date();
    let status= user.orders.deliverDate > today ? "shipping in progress":"delivered successfully";
  return (

    <div style={{width:"50%",marginLeft:"25%"}}>
        {
        user.orders.purchased!==undefined ?
        <Table striped bordered hover  >
            <thead>
                <td>no</td>
                <td>Name</td>
                <td>count</td>
                <td>price</td>
                <td>status</td>
            </thead>
            <tbody >{ purchased.map(pr=>
                <tr >
                        <td> <Image roundedCircle src={pr.img} style={{width:"auto",height:"50px"}} /> </td>
                        <td>{pr.name}</td>
                       {purchased.length===1 ?  <td>1</td> :<td>{pr.count}</td>}
                       {purchased.length===1 ?  <td>{pr.price}</td> :<td>{pr.totalPrice}</td>} 
                        <td>{status}</td>
                </tr>) }
            </tbody>
        </Table> :
        <div>
        <h4 style={{textAlign:"center"}}>start purchase</h4>
        </div>
        }
        
    </div>
  )
}

export default ViewOrders