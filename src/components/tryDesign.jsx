import React,{useState} from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './styles.scss';

function TryDesign(data) {
    let products= data.data.Products;
    const [i,setI]=useState(0);
    const [j,setJ]=useState(0);

    setTimeout(() => {
        i<=7 ? setI(i+1): setI(0)
    }, 2000);


    let initialcategory=[];
    let category=[];
    products.filter(pr=> {if(!initialcategory.includes(pr.category)){
      initialcategory.push(pr.category)
    }});
    initialcategory.forEach(c=>{
      let a=products.filter(pr=>{ return pr.category===c});
      category.push(a)
    })
    //console.log(initialcategory,category);
    setTimeout(() => {
      j<initialcategory.length-1 ? setJ(j+1): setJ(0)
  }, 5000);
  console.log(category[j],j)
  return (
    <div className='mainDesign'>
        <div className='topDesign'>
                <div className='contentDesign'>
                            <h2>e-Site Welcomes YOu</h2>
                            <p>This ecommerce website channels its fun energy through its website design. With bright colors, it gives off a very cheerful feeling. Additionally, it’s done a great job with photography. The big photos on its homepage set the mood of the rest of the website’s design.</p>
                </div>
                <div className='imgDesign'>
                          <Image src={products&& products[i]&&products[i].dynamic[0].img}  className="egg"/> 
                </div>

        </div>
        <div className='midDesign'>
            <div className='categorygrid'>
                <Row lg={4} className="row">
                  {
                  category&&category[j]&&category[j].map((pr,index)=>{
                   return <Col key={pr.id} style={{maxHeight:"200px"}} className="col" xs={index===0 ? 4 :2} >
                    <Image src={pr.dynamic[0].img}  className="eggg"/> 
                    </Col>
                  })}
                </Row>
            </div>
        </div>
    </div>
  )
}

export default TryDesign