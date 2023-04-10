import {createBrowserRouter} from "react-router-dom";
  import ProductListPage from "./Pages/Product/ProductListPage";
  import AboutPage from "./Pages/about/AboutPage";
  import ContactPage from "./Pages/Contact/ContactPage";
  import App from "./App";
  import NotFound from "./Shared/NotFound";
  import ProductInfoPage from "./Pages/Product/ProductInfoPage";
import SignInPage from "./login-register-page/src/components/pages/LoginPage";
import SignUpPage from "./login-register-page/src/components/pages/RegisterPage";
import ForgetPasswordPage from "./login-register-page/src/components/pages/ForgetPasswordPage";
import LandingPage from "./login-register-page/src/components/pages/LandingPage";
import Footer from "./Shared/Footer";
import Header1 from "./Shared/Header1";
//import HomePage from "./login-register-page/src/components/pages/HomePage"
  export const router = createBrowserRouter([
    {
        path: '',
/*         element: <App/>,
 */        //Nesting Routes
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
        ],
    },
  
    
  ]);