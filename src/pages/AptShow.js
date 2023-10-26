import React from "react"
import { NavLink, useParams } from "react-router-dom"
import { Button, Card, CardBody, CardSubtitle, CardTitle, CardText } from "reactstrap"

const AptShow = ({ apartments }) => {
  const { id } = useParams()
  let currentApartment = apartments?.find((apt) => apt.id === +id)
  return (
    <>
      <h2>Reserve Your Oasis Today!!!</h2>
      <main className="card">
        {currentApartment && (
          <Card>
            <img
              alt={`profile picture for ${currentApartment.name}`}
              src={currentApartment.image}
            />
            <CardBody>
              <CardTitle tag="h5">
                Address: {`${currentApartment.street}, ${currentApartment.city}, ${currentApartment.state}`}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >                
                {`Daily Rates: ${currentApartment.price}. Amenities: ${currentApartment.bedrooms} 
                Bedrooms and ${currentApartment.bathrooms} Bathrooms. Pets allowed: ${currentApartment.pets}`}
              </CardSubtitle>
              <Button>Reserve Today</Button>
            </CardBody>
          </Card>
        )}
        <br />
        <br />
        <br />
      </main>
    </>
  )
}

export default AptShow