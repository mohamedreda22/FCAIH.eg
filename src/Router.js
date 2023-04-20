import {createBrowserRouter} from "react-router-dom";
  import ProductListPage from "./Pages/Product/ProductListPage";
  import AboutPage from "./Pages/about/AboutPage";
  import ContactPage from "./Pages/Contact/ContactPage";
 // import App from "./App";
  import NotFound from "./Shared/NotFound";
  import ProductInfoPage from "./Pages/Product/ProductInfoPage";
import SignInPage from "./Pages/pages/LoginPage";
import SignUpPage from "./Pages/pages/RegisterPage";
import ForgetPasswordPage from "./Pages/pages/ForgetPasswordPage";
import LandingPage from "./Pages/pages/LandingPage";
import Footer from "./Shared/Footer";
import Header1 from "./Shared/Header1";
import AddYourProduct from "./Pages/Product/Components/AddYourProduct";
  export const router = createBrowserRouter([
    {
        path: '',
      //  element: <App/>,
         //Nesting Routes 
        children: [
                  { 
                    path: "/",
                    element: <><LandingPage/><Footer/></>
                  },
                  {
                    path: "/about",
                    element: <><Header1/><AboutPage/><Footer/></>
                  }, 
                    {
                    path: "/contact",
                    element:  <><Header1/><ContactPage/><Footer/></>
                  },
                  {
                    path: '*',
                    element: <><Header1/><NotFound/><Footer/></>
                  },
                  {
                    path: "/product-info/:id",
                    element: <><Header1/><ProductInfoPage/><Footer/></>
                  },                  
                  {
                    path: "/login",
                    element: <>
                    <SignInPage />
                    <Footer/>
                    </>
                  },               
                  {
                    path: "/register",
                    element: <><SignUpPage/><Footer/></>
                  },
                  {
                    path: "/forget-password",
                    element: <><ForgetPasswordPage/><Footer/></>
                  },
                  {
                    path: "/home",
                    element: <><Header1/><ProductListPage/><Footer/></>
                  },
                  {
                    path: "/logout",
                    element: <><LandingPage/><Footer/></>
                  },                  
                  {
                    path: "/addyourproduct",
                    element: <><Header1/><AddYourProduct/><Footer/></>
                  },
        ],}

       

    
  
    
  ]);