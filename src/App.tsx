import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import LR8 from "./lr/lr-8";
import Navbar from "./top-bar";
import {CssBaseline} from "@mui/material";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>,
        children: [
            {
                path: "lr-8",
                element: <LR8/>
            },
            {
                path: "author",
                element: <div>Скоро появится...</div>
            }
        ]
    }
])

function App() {
    return (
        <>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
