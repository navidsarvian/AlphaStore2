import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Col, Row, Container
} from 'reactstrap';
import './ProductCards.css';
// import logo from '../../public/IMG_0912.jpg';
const logo = '/IMG_0912.jpg';
const logo2 = '/IMG_0918.jpg';
const mediblocks = '/mediblocks.png'
const medisyrup = '/gonegreen1.jpg'
const medipop = '/gonegreen4.jpg'
const sativa = '/Sativa.png'
const indica = '/Indica.png'

const Products = ({showProducts}) => {
  return (

    <Container-fluid style={{ marginTop: "45px" }}>
    <div class="page-header">
      <h1>Gone Green Goodies <small>Check out our full line of products</small></h1>
    </div>
      <Row>
        <CardDeck>
          <div className="col-md-4">
            <Card>
              <CardImg  top width="70%" src={mediblocks} alt="Card image cap" />
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
            <CardImg top width="50%" src={medisyrup} alt="Card image cap" />
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
            <CardImg top width="100%" src={medipop} alt="Card image cap" />
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
              <CardTitle>420 Bars</CardTitle>
              <CardSubtitle>Medicinal Benefits</CardSubtitle>
              <CardText>Our in house made concentrates are full spectrum and high in terpens. Death Bubba is known to help with a variety of symptoms including depression, anxiety, appetite, nausea, pain, and sleep. Available Flavours are: Milk Chocolate, Mint Chocolate, Dark Chocolate Raspberry.</CardText>
              <Button>Add to Cart</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
        <Card>
          <CardImg top width="70%" src={sativa} alt="Card image cap" />
          <CardBody>
            <CardTitle>Sativa Kush</CardTitle>
            <CardSubtitle>Dank</CardSubtitle>
            <CardText>This will have you trippin out, re-thinking life, and realizing you can do better. Smoke this shit and you'll be philosophical as shit.</CardText>
            <Button>Add to cart</Button>
          </CardBody>
        </Card>
      </div>
      <div className="col-md-4">
        <Card>
          <CardImg top width="70%" src={indica} alt="Card image cap" />
          <CardBody>
            <CardTitle>Darth Vader OG</CardTitle>
            <CardSubtitle>Indica</CardSubtitle>
            <CardText>You might fuck around and become someones father after smoking this purple beauty.</CardText>
            <Button>Add to Cart</Button>
          </CardBody>
        </Card>
      </div>
        </CardDeck>
      </Row>
    </Container-fluid>


  );
};

export default Products;
