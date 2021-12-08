
import {Link} from 'react-router-dom';
import React,{useState} from "react";







    const Student =(props) => {

        const[show, setShow] = useState(false)
      



    return(
        <div>
            <p>
            Name: <b> {props.name} </b> <br/>
            
                {
                    show?
                    <p> ID:<b> {props.id}</b><br/>
                    CGPA:<b> {props.cgpa}</b><br/></p>
                    :null
                }
          
          <button onClick={()=>setShow(true)}>Show</button> 
           

            
     

           
            
            </p>
           
           

            
        </div>
    )
}










export default Student;