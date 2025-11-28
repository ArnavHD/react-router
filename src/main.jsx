import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users2/Users2.jsx';

const user2Promise = fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<span>Loading....</span>}>
            <Users2 user2Promise={user2Promise}></Users2>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "about",
    element: <div>About me here</div>,
  },
  {
    path: "blogs",
    element: <div>This is blogs</div>,
  },
  {
    path: "app",
    Component: App,
  },
  {
    path: "app2",
    element: <App></App>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
