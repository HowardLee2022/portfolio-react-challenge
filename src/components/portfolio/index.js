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



    <div class="card-deck">
                <div class="card text-center ">
                    <div class="card-block">
                        <h1 class="card-title">{name}</h1>
                        <img src={image} class="card-text">
                        </img>
                    </div>
                    <div class="card-footer">
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