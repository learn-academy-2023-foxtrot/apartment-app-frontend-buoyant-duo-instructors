import React from "react"
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardImg, CardTitle, Button } from "reactstrap";

const AptIndex = ({ apartments }) => {
  return (
    <>
      <h2>Select an available oasis today!</h2>
      <div className="center-image">
        <main className="card-container">
          {apartments?.map((apartment, index) => {
            return (
              <Card 
                style={{
                  width: '18rem'
                }} 
                key={index} 
                className="card-item"
              >
                <CardImg
                  alt={`profile picture for ${apartment.street}`}
                  src={apartment.image}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {`${apartment.bedrooms} beds and ${apartment.bedrooms} bathrooms in ${apartment.state}`}
                  </CardTitle>
                  <Button>
                    <NavLink to={`/aptshow/${apartment.id}`} className="nav-link">
                      See more details
                    </NavLink>
                  </Button>
                </CardBody>
              </Card>
            )
          })}
          <br />
        </main>
      </div>
    </>
  )
}

export default AptIndex