import React from "react";
import { CardGroup, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
const AptIndex = () => {

  return(
    <>
      <h1>Available Oasis</h1>
      <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  )
}

export default AptIndex