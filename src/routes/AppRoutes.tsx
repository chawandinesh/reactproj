import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
    // Route,
    // Link,
} from "react-router-dom";
import Attendance from '../pages/attendance/Attendance';
import Employee from '../pages/employee/Employee';
import Employer from '../pages/employer/Employer';
import Salary from '../pages/salary/Salary';

const router = createBrowserRouter([
    {
        path: "attendance",
        element: <Attendance />,
    },
    {
        path: "employee",
        element: <Employee />
    },
    {
        path: "employer",
        element: <Employer />
    },
    {
        path: "salary",
        element: <Salary />
    },
    {
        path: "notfound",
        element: <h1>Not Found</h1>
    },
    {
        path: "*",
        element: <Navigate to="notfound"/>
    }
]);

const AppRoutes = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default AppRoutes