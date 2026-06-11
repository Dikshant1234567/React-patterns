import { createBrowserRouter } from "react-router-dom";
import MainLayout from './layouts/MainLayout'
import JobProblem from "./problems/Job Listings Dashboard/JobProblem";
import { route } from "./utils/constant";
import DemoProblem from "./problems/DemoProblem/DemoProblem";


export const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [ // this replaces the <Outlet />
        {
            index: true,
            element:<>Need to work on this <JobProblem /> </>, // improve
        },
        {
            path: route.prblm1,
            element: <JobProblem />,
        },
        {
            path: route.prblm2,
            element: <DemoProblem />,
        },
    ]
}])