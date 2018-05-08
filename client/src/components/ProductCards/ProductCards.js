import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody, Col, Row } from 'reactstrap';
import './ProductCards.css';
// import logo from '../../public/IMG_0912.jpg';
const logo = '/IMG_0912.jpg';

const Products = ({showProducts}) => {

  return (
      <Container-fluid style={{marginTop: "35px"}}>>
      <Row>
            <Col xs={12} md={12} className="mr-auto ml-auto">
              <CardDeck>
                <div className="custom-card">
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
                <div className="custom-card">
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
              <div className="custom-card">
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
            </Col>
            </Row>
          </Container-fluid>  
  );
};

export default Products;
