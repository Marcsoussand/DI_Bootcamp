import React from 'react';
// import './Card.css'
import Card from 'react-bootstrap/Card'

const CardR = (props) => {
    const {id,name,email} = props;
    return(
     

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={`https://robohash.org/${id}?size=200x200`} />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  {email}
</Card.Body>
</Card>
    )
}

export default CardR;