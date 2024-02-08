import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Resources from "./pages/Resources";
import DidacticGuidelines from "./pages/DidacticGuidelines";
import AIForDesigners from "./pages/AIForDesigners";
import InteractiveFramework from "./pages/InteractiveFramework";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/didactic-guidelines",
    element: <DidacticGuidelines />,
  },
  {
    path: "/ai-for-designers",
    element: <AIForDesigners />,
  },
  {
    path: "/interactive-framework",
    element: <InteractiveFramework />,
  },
  {
    path: "*",
    element: <Homepage />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
