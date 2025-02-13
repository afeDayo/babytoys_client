import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Home/Homepage";
import Shop from "./pages/Shop/Shop";
import ProductPage from "./pages/vercel/ProductPage";
import ShoppingCart from "./pages/cart/ShoppingCart";
import CheckoutPage from "./pages/Export/CheckoutPage";
import Blog from "./pages/Storybook/Blog";
import Contact from "./pages/Mail/Contact";
import FAQs from "./pages/Messages/FAQs";
import Register from "./pages/Secure/Register";
import Login from "./pages/Log/Login";
import Error from "./pages/Error/Error";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import LikesPage from "./pages/Views/LikesPage";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route element={<RootLayout />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/likes" element={<LikesPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQs />} />
              </Route>

              <Route element={<AuthLayout />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>

              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </CartProvider>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;
