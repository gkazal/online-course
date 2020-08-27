import React from 'react';
import { Button } from 'react-bootstrap';

const Cart = (props) => {

    const cart = props.cart
    const { courseTitle, price } = props.course

    //const handleCourse = props.course.courseTitle

    console.log(props.course)


    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price
    }

    return (
        <div>
            <h3>This is cart</h3>
            <h4>Number of Courses: {cart.length}</h4>
            <h4>Total Price: ${total}</h4>

            <Button type="button" className="btn btn-primary btn-block">
                Checkout <span className="badge badge-light">$ {total}</span>

            </Button>

            {/* <p><span>{courseTitle}</span> <span> ${price}</span></p> */}

            {/* <Button variant="primary">$ {total}</Button>{' '} */}



        </div>

    );
};

export default Cart;