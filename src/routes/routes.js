// We dont usually import like this
// import Emails from "../components/Emails";
// import Main from "../pages/Main";


import { lazy } from "react"

const Main = lazy(()=> import("../pages/Main"))
const Emails = lazy(()=> import("../components/Emails"))
const ViewEmails = lazy(()=> import("../components/ViewEmail"))
// This is lazy loading -> It works only with defualt exports and not named exports of the components
// When doing lazy loading, wrap it with Suspense-> another component

export const routes = {

    // Main -> parent and full component , emails firts child , view second child
    main : {
        path : '/',
        element : Main
    },
    emails : {
        path : "/emails" , 
        element : Emails
    },
    view : {
        path : '/view',
        element : ViewEmails
    },
    invalid : {
        path : '/',
        element : Emails
    }
    
}


// The below three are same, 

// export {routes}
// export const routes
// export const routes = {}