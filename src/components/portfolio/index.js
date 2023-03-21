import React from 'react';
import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const portfolio = ({name,link,image,live}) => {
    return (    
     
    // <Card class="card text-center" style={{ width: '18rem' }}>
    // <Card.Img variant="top" src={image} />
    //   <Card.Body>

    //     <Card.Title>{name}</Card.Title>

    //     <Button variant="primary" type="button"
    //                         onClick={(e) => {
    //                         e.preventDefault();
    //                         window.location.href=link;}}>Github
    //     </Button>
    //     <Button variant="info" type="button"
    //                         onClick={(e) => {
    //                         e.preventDefault();
    //                         window.location.href=live;}}>Live
    //     </Button>
    //   </Card.Body>
    // </Card>



    <div class="col-12  col-lg-6 mb-3">
                <div class="card card-body bg-white ">
                        <h1 class="card-title text-center">{name}</h1>
                        <div class="text-center">
                        <img src={image} class="card-text"></img>
                        </div>
                    <div class="card-footer d-flex justify-content-center">
                      <Button variant="primary" type="button"
                            onClick={(e) => {
                            e.preventDefault();
                            window.location.href=link;}}>Github
                      </Button>
                    <Button variant="info" type="button"
                            onClick={(e) => {
                            e.preventDefault();
                            window.location.href=live;}}>Live
                    </Button>
                </div>
                </div>
    </div>

    )
  }
  
  
export default portfolio