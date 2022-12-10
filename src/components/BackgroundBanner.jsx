import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../App.css'


function BackgroundBanner() {
  return (

    <>
      <Card>
        {/* Style this so the image is fixed  */}
        <div style={{ display: "flex", justifyContent: 'flex-end', backgroundColor: "#deedd6" }}>
          <Card.Img src='https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg' style={{ width: "800px" }} />
        </div>

        <Card.ImgOverlay style={{ display: "flex", paddingLeft: "200px", alignItems: "center" }}>

          <div style={{ width: "500px", textAlign: "left" }}>

            <h1>Order groceries for delivery or pickup today</h1>
            <p>Whatever you want from local stores, brought right to your door.</p>
            <form style={{ display: "flex", width: "300px", justifyContent: "space-between" }}>
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Control type="address" placeholder="Enter your location" />
              </Form.Group>
              <Button variant="light" type="submit" style={{ height: "45px" }}>
                Submit
              </Button>
            </form>
          </div>

        </Card.ImgOverlay>


      </Card>
    </>
  );
}


export default BackgroundBanner