import {createBrowserRouter} from "react-router-dom";
import Home from '@/pages/Home'
import Cabinet from "@/pages/Cabinet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [],
  },
  {
    path: "/cabinet",
    element: <Cabinet/>,
  },
]);
export default router;
