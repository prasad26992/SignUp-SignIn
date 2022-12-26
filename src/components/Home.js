import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SIgn_img from "./SIgn_img";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <section className="d-flex justify-content-between ">
          <div className="left_data mt-9 p-3" style={{ width: "100%" }}>
            <h3 className="text-center mt-5" style={{textalign: "center"}}>Welcome Back!</h3>
            <p className="text-center">
              <u>The faster you fill up, the faster you get offers</u>
            </p>
            <Form>
              
              <Form.Group className="mb-4 ml-3 col-lg-9" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>             

              <Form.Group
                className="mb-4 ml-3 col-lg-9"
                controlId="formBasicPassword"
              >
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>  

                          
              
              <Button
                variant="primary"
                className="col-lg-9 ml-3"
                style={{ background: "#EE6000" }}
                type="submit"
              >
                Submit
              </Button><br></br>
              <br></br>
              <Form.Text className="text-muted">
                
                OR
              </Form.Text>
              <br></br>
              
              <Button
                variant="primary"
                className="col-lg-9 ml-3"
                style={{ background: "#FFFFFF", color:"#FF6701", border:"1px solid #FF6701" }}
                type="submit" 
              ><img src="./vector-1.png"  alt="" />
                Sign in with google
              </Button>
              <br></br>
              <br></br>
              <Button
                variant="primary"
                className="col-lg-9 ml-3"
                style={{ background: "#FFFFFF",color:"#FF6701", border:"1px solid #FF6701"  }}
                type="submit"
              >
                <img src="./fb.png" style={{background:"#1977F3"}} alt="" /> Sign in with facebook
              </Button>
            </Form>
            <br></br>
            
            <p className="end-text">
              Already Have an Account{" "}
              <span>
                <NavLink to="/login">SignIn</NavLink>
              </span>{" "}
            </p>
          </div>
          <SIgn_img />
        </section>
      </div>
    </>
  );
};

export default Home;
