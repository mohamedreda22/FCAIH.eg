import Header1 from './Shared/Header1';
import Footer from './Shared/Footer';
import './Style/App.css';
import { Outlet ,} from 'react-router-dom';




 const App = () => {
     return( 
        <>

        <Header1/>
        <Outlet/>
        <Footer/>
          </>
    ); 

        };


export default App;
