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
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';

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
      {
        path: "users/:userid",
        loader: ({ params }) =>
          // console.log("The params is", params); //The params is {userid: '7'}
          // console.log("The params is ", params.userid); //The params is  7; id pawa jacche
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        Component: UserDetails,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail,
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
  {
    path: "*",
    element: <h1>Opps!! Page not Found.</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
