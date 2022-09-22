import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import About from "./pages/About/About";
import SelectedEmoji from "./pages/SelectedEmoji/SelectedEmoji";
import AllEmojis from "./pages/Emojis/AllEmojis";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/found-ji",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        path: "",
      },
      { element: <About />, path: "about" },
      {
        element: <AllEmojis />,
        path: "emojis",
      },
      {
        path: "emojis/:emojiUnicode",
        element: <SelectedEmoji />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
