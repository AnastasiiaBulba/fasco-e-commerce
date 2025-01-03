import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import SingInPage from "../pages/SingIn/SingInPage";
import SingUpPage from "../pages/SingUp/SingUp";
import PrivateRoute from "../components/PrivatRoute/PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SingInPage />} />
        <Route path="/signup" element={<SingUpPage />} />
        <Route path="/shop" element={<PrivateRoute element={<ShopPage />} />} />

        <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />
        <Route
          path="/product"
          element={<PrivateRoute element={<ProductPage />} />}
        />
        <Route path="/cart" element={<PrivateRoute element={<CartPage />} />} />
        <Route
          path="/checkout"
          element={<PrivateRoute element={<CheckoutPage />} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
