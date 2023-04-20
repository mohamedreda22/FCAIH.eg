// will be without login&signup button
//will be with logout button


import '../Style/Header.css';
import image from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
const Header1=()=>{    
    return (
        <header className='main-header'>
     
           <div className='logo'>
                <img src={image} alt='logo'/>
           </div>
         <nav>
            <ul>               <li></li>

            <li>
                  <Link to={'/home'}>Home</Link>
               </li>                
               <li>
                       <div>
                                 <Link to={'/addyourproduct'}>Add your product</Link>

                     </div>
               </li>

               <li>
               <Link to={'/about'}>About</Link>
               </li>
               <li>
               <Link to={'/contact'}>Contact</Link>
               </li>            
               <li className='logout 'style={{marginLeft:'550px'}}>
                  <Link to={'/logout'}>Log Out</Link>
               </li> 

            </ul>
            
         </nav>

        </header>
        );
        
};
export default Header1;