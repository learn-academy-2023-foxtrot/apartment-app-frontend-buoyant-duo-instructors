import React from "react"
import { NavLink } from "react-router-dom"
import { CardGroup, Card, CardBody, CardImg, CardTitle, Button } from "reactstrap";

const ProtectedIndex = ({ user, apartments }) => {
  // console.log("protected user:", user)
  const currentApts = apartments.filter(apt => apt.user_id === user.id)
  console.log("apartments for this user: ", currentApts)

  return (
    <>
      <h2>View Your Properties</h2>
      <div className="center-image">
        <main className="card-container">
          {currentApts?.map((apartment, index) => {
            return (
              <Card style={{
                  width: '18rem'
                }} key={index} className="card-item">
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
                  <Button>
                    <NavLink to={`/aptedit/${apartment.id}`} className="nav-link">
                      Update this property
                    </NavLink>
                  </Button>
                  <Button>
                    Delete this property
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

export default ProtectedIndex