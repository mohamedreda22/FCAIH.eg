import React from "react";
import '../Style/Footer.css';
import { Link } from 'react-router-dom';
import logo from'../assets/images/logo.png';
import github from '../assets/images/GitHub-Mark.png';
import linkedin from '../assets/images/LinkedIn_icon_circle.svg.png';

const Footer=()=>{
    return(

<div className="Footer">
    
    <Link href="/" aria-label="FCAIH logo" >
    <img  src={logo} style={{height:'100px',}}
    loading="lazy" alt="Logo" />
    </Link>

    <div >

            <div>
                <Link  to="https://www.linkedin.com/in/mohamed-reda-92a617201/" aria-label="linkedin" >
                <img data-dynamic-svg="" src={linkedin} 
                loading="lazy" alt="linkedin icon" height="50" width="auto"/></Link>
                <Link to="https://github.com/mohamedreda22" aria-label="github" >
                    <img data-dynamic-svg="" src={github} 
                    loading="lazy" alt="github icon" height="50px" width="auto" />
                    </Link></div>
                    </div>
<>
<div>  <p style={{textAlign:'center',margin:'90px',paddingLeft:'50px'}}>Copyright &copy; all reserved for FCAIH</p>  </div>

</>

                    </div>

              

    );
};
export default Footer;
