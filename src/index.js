import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import About from "./pages/About/About";
import SelectedEmoji from "./pages/SelectedEmoji/SelectedEmoji";
import AllEmojis from "./pages/Emojis/AllEmojis";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./pages/Error/Error";
import Loading from "./components/Loading";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/emojis" element={<AllEmojis />} />
      <Route path="/emojis/:emojiUnicode" element={<SelectedEmoji />} />
    </Route>
  ),
  { basename: "/found-ji" }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </React.StrictMode>
);
