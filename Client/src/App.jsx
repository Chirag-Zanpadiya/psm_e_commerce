import "./App.css";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/custom/NavBar";
import { ThemeProvider } from "@/components/provider/theme-provider";
import Footer from "./components/custom/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Products from "./pages/Products";
import CheckOut from "./pages/CheckOut";
import AdminLogin from "./pages/AdminLogin";
import Error from "./pages/Error";
import Success from "./pages/Success";
import RootLayOut from "./layouts/RootLayOut";
import { Check } from "lucide-react";
import AdminLayOut from "./layouts/AdminLayOut";
import CreateProducts from "./components/custom/CreateProducts";
import AllProducts from "./components/custom/AllProducts";
import Analytics from "./components/custom/Analytics";
import Orders from "./components/custom/Orders";
import Settings from "./components/custom/Settings";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
function App() {
  // const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <RootLayOut children={<Home />} />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <RootLayOut children={<SignUp />} />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <RootLayOut children={<Login />} />
        </>
      ),
    },
    {
      path: "/product",
      element: (
        <>
          <RootLayOut children={<Products />} />
        </>
      ),
    },
    {
      path: "/checkout",
      element: (
        <>
          <RootLayOut children={<CheckOut />} />
        </>
      ),
    },
    {
      path: "/admin/login",
      element: (
        <>
          <RootLayOut children={<AdminLogin />} />
        </>
      ),
    },
    {
      path: "/admin/dashboard",
      element: <AdminLayOut children={<CreateProducts />} />,
    },
    {
      path: "/admin/dashboard/all-products",
      element: <AdminLayOut children={<AllProducts />} />,
    },
    {
      path: "/admin/dashboard/analytics",
      element: <AdminLayOut children={<Analytics />} />,
    },
    {
      path: "/admin/dashboard/orders",
      element: <AdminLayOut children={<Orders />} />,
    },
    {
      path: "/admin/dashboard/settings",
      element: <AdminLayOut children={<Settings />} />,
    },
    {
      path: "/*",
      element: (
        <>
          <Error />
        </>
      ),
    },
    {
      path: "/success",
      element: (
        <>
          <Success />
        </>
      ),
    },
    {},
  ]);
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
