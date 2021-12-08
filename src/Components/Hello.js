import React from "react"
import Head from './Head';
import Footer from './Footer';
import Student from './Student';
import Profile from './Profile';
import ShowMessage from "./ShowMessage";
import {Link} from 'react-router-dom';


const Hello =() => {
    return(
        <div>
              

            
           
            <ShowMessage/>
            <Student name="Riaz" id="1" cgpa="3.20"/>
            <Student name="sam" id="2" cgpa="3.49"/>
            <Student name="pias" id="3" cgpa="3.49"/>
            
            
            

            
            
           
            
        </div>
        
       
    )
}

export default Hello;