import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Col, Row, Container
} from 'reactstrap';
import './ProductCards.css';
// import logo from '../../public/IMG_0912.jpg';
const logo = '/IMG_0912.jpg';

const Products = ({showProducts}) => {
  return (
    <Container style={{ marginTop: "35px" }}>
    <div class="page-header">
      <h1>Gone Green Goodies <small>Check out our full line of products</small></h1>
    </div>
      <Row>
        <CardDeck>
          <div className="col-md-4">
            <Card>
              <CardImg top width="100%" src={logo} alt="Card image cap" />
              <CardBody>
                <CardTitle>Medi Blocks</CardTitle>
                <CardSubtitle>Medicinal Benefits</CardSubtitle>
                <CardText>
                Our in house made concentrates are full spectrum and high in terpens
                Death Bubba is known to help with a variety of symptoms including depression,
                anxiety, appetite, nausea, pain, and sleep.
                </CardText>
                <Button>Add to Cart</Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4">
          <Card>
            <CardImg top width="100%" src={logo} alt="Card image cap" />
            <CardBody>
              <CardTitle>Medi Syrup</CardTitle>
              <CardSubtitle>Medicinal Benefits</CardSubtitle>
              <CardText>
              Death Bubba is known to help with a variety of symptoms including depression, anxiety, appetite, nausea, pain, and sleep
              </CardText>
              <Button>Add to Cart</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <CardImg top width="100%" src={logo} alt="Card image cap" />
            <CardBody>
              <CardTitle>Medi POP</CardTitle>
              <CardSubtitle>Medicinal Benefits</CardSubtitle>
              <CardText>
              Our in house made concentrates are full spectrum and high in terpens
Death Bubba is known to help with a variety of symptoms including depression, anxiety,
appetite, nausea, pain, and sleep.175mg THC $10.00 or 300mg $20.00.
              </CardText>
              
              <Button>Add to Cart</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <CardImg top width="100%" src={logo} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
        <Card>
          <CardImg top width="100%" src={logo} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
      <div className="col-md-4">
        <Card>
          <CardImg top width="100%" src={logo} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
        </CardDeck>
      </Row>
    </Container>
 

  );
};

export default Products;
