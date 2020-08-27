import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Course.css';
import '../Cart/Cart'
import { CardDeck, Card, Button } from 'react-bootstrap';


const Course = (props) => {
    const { courseTitle, price, image } = props.course
    const handleAddCourse = props.handleAddCourse

    return (
        
        // <div className="courseInfo-container ">

        //     <img src={image} alt="" />
        //     <h4>Course: {courseTitle}</h4>
        //     <h4>Price: ${price} </h4>
        //     <button className="main-button btn-sm btn-primary"
        //         onClick={() => handleAddCourse(props.course)}><FontAwesomeIcon icon={ faShoppingCart } /> Enroll
        //     </button>
        // </div>

        <div className="courseInfo-container box grid">


           


             <CardDeck>
            <Card className="image">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{courseTitle}</Card.Title>

                    <Card.Text>
                        <h4>Price: ${price} </h4>
                    </Card.Text>
                    <Button className="main-button btn-sm btn-primary"
                        onClick={() => handleAddCourse(props.course)}><FontAwesomeIcon icon={ faShoppingCart } /> Enroll
                    </Button>
                </Card.Body>
            </Card>
            </CardDeck> 

        </div>
        

  



        // <div className="col-md-4">
        //     <div className="single-item text-center my-4">
        //         <div className="card p-2">
        //             <img className="card-img-top" src={image} alt="" />
        //             <div className="card-body">
        //                 <h4 className="card-title">{courseTitle}</h4>
        //                 <h5 className="price">${price}</h5>

        //                 <button className="btn btn-sm btn-primary"
        //                     onClick={() => handleAddCourse(props.course)}><FontAwesomeIcon icon={ faShoppingCart } /> Enroll
        //</button>


        //             </div>

        //         </div>

        //     </div>

        // </div>

    );
};

export default Course;