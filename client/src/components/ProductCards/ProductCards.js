import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Col, Row, Container
} from 'reactstrap';
import './ProductCards.css';
// import logo from '../../public/IMG_0912.jpg';
const logo = '/IMG_0912.jpg';

const Products = () => {
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
