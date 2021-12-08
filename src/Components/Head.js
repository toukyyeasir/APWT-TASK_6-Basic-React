import React from "react"
import {Link} from 'react-router-dom';

const Head =() => {
    return(
        <div>
            <Link to="./">HOME</Link> <tab/>
            <Link to="./profile">PROFILE</Link><tab/>
            <Link to="./contact">CONTACT</Link><tab/>
        </div>
    )
}

export default Head;