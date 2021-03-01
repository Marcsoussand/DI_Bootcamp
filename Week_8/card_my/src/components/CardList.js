import CardR from './CardR';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardList = (props) => {
    const {robots} = props;
    return(
        <Row>

        {
          robots.map((item, i) => {
            return <Col xs={6} md={3}><CardR id={item.id} name={item.name} email={item.email} key={i} /> </Col>

          })
        }
      </Row>
    )
}

export default CardList;