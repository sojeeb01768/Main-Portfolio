import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Home/Home";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import Expertise from "../Components/Expertise/Expertise";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/expertise',
                element: <Expertise />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    },
]);