import React from 'react';
import './App.css';
import { useState } from 'react';
import Course from './components/Course/Course';
import fakeData from './fakedata/CourseInfo';
import Cart from './components/Cart/Cart';
import { Button } from 'react-bootstrap'
import Header from './components/Header/Header';


function App() {
  const [course, setCourse] = useState(fakeData)
  const [cart,setCart] = useState([])

  //console.log(course)

  const handleAddCourse = (course) =>{
    console.log('added',course)

    const newCart = [...cart,course]
    setCart(newCart)
  }

  return (

    <div className="online-course">
        <Header></Header>

        <div className="row course">
            <div className="courseInfo">
                {
                  course.map(course => <Course course = {course} handleAddCourse = {handleAddCourse}
                    key={course.courseId}></Course> )
                }
            </div>             
            <div className="cartInfo">
                <Cart cart = {cart} course={course}></Cart>
                  
            </div>
        </div>
        
    </div>
    
  );
}

export default App;
