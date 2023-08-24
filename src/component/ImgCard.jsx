import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ImgCard = (props) => {
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgurl} style={{ width:"18rem" , height:"15rem"}}  />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ height:"7rem"}}>
          
          {props.desc}

        
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default ImgCard
