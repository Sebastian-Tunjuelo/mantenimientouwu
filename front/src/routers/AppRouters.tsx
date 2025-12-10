import { Navigate, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Registre from "../pages/Registre";
import Auth from "../pages/Auth";
import ProtectedRouters from "./ProtectedRouters";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import MyProducts from "../pages/MyProducts";
import MyProfile from "../pages/MyProfile";
import AgregarProducto from "../pages/AgregarProducto";
import AgregarMantenimiento from "../pages/AgregarMantenimiento";
const AppRouters = () => {
  return (
    <div>
      <Routes>
        <Route element={<Navigate to="/home" />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Registre />} />
        <Route
          path="/home"
          element={
            <ProtectedRouters>
              <Home />
            </ProtectedRouters>
          }
        />
        <Route
          path="/catalog"
          element={
            <ProtectedRouters>
              <Catalog />
            </ProtectedRouters>
          }
        />
        <Route
          path="/product"
          element={
            <ProtectedRouters>
              <Product />
            </ProtectedRouters>
          }
        />
        <Route
          path="/myproducts"
          element={
            <ProtectedRouters>
              <MyProducts />
            </ProtectedRouters>
          }
        />
        <Route
          path="/myprofile"
          element={
            <ProtectedRouters>
              <MyProfile />
            </ProtectedRouters>
          }
        />
        <Route
          path="/agregarproducto"
          element={
            <ProtectedRouters>
              <AgregarProducto />
            </ProtectedRouters>
          }
        />
        <Route
          path="/agregarmantenimiento"
          element={
            <ProtectedRouters>
              <AgregarMantenimiento />
            </ProtectedRouters>
          }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default AppRouters;
