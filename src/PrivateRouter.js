import React from "react";
import { Route, Navigate } from "react-router-dom";

function PrivateRouter({ element: Element, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
    />
  );
}

export default PrivateRouter;