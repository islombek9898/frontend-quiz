// rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/quiz/:title',
          element: <Quiz/>
        }
      ]
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App;