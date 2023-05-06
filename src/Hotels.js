import React from 'react'
import Card from 'react-bootstrap/Card';

const Hotels = (props) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.hotelname = 'Magic life'}</Card.Title>
        <Card.Text>{props.city = 'Sousse'}</Card.Text>
        <Card.Text>{props.numstars}</Card.Text> 
      </Card.Body>
    </Card>
    </div>
  )
}

export default Hotels