import { ScrollRestoration, Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./Portfolio";
import ProjectPage from "./ProjectPage";

function Layout(){
  return (
    <>
      <ScrollRestoration getKey={(location) => location.pathname} />
      <Outlet/>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {path: "/", element: <Portfolio/>},
      {path: "/project/:slug", element: <ProjectPage/>},
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router}/>;
    </>
  );
}