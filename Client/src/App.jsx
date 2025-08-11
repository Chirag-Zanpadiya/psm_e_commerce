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
import MyOrders from "./pages/MyOrders";
import { Toaster } from "@/components/ui/sonner";
import ProtectedRoute from "./components/custom/ProtectedRoute";
function App() {
  // const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ProtectedRoute>
            <RootLayOut children={<Home />} />
          </ProtectedRoute>
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <ProtectedRoute>
            <RootLayOut children={<SignUp />} />
          </ProtectedRoute>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <ProtectedRoute>
            <RootLayOut children={<Login />} />
          </ProtectedRoute>
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
          <ProtectedRoute>
            <RootLayOut children={<CheckOut />} />
          </ProtectedRoute>
        </>
      ),
    },
    {
      path: "/orders",
      element: (
        <>
          <ProtectedRoute>
            <RootLayOut children={<MyOrders />} />
          </ProtectedRoute>
        </>
      ),
    },
    {
      path: "/admin/login",
      element: (
        <>
          <ProtectedRoute>
            <RootLayOut children={<AdminLogin />} />
          </ProtectedRoute>
        </>
      ),
    },
    {
      path: "/admin/dashboard",
      element: (
        <ProtectedRoute>
          <AdminLayOut children={<CreateProducts />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard/all-products",
      element: (
        <ProtectedRoute>
          <AdminLayOut children={<AllProducts />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard/analytics",
      element: (
        <ProtectedRoute>
          <AdminLayOut children={<Analytics />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard/orders",
      element: (
        <ProtectedRoute>
          <AdminLayOut children={<Orders />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard/settings",
      element: (
        <ProtectedRoute>
          <AdminLayOut children={<Settings />} />
        </ProtectedRoute>
      ),
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
          <Toaster />
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
