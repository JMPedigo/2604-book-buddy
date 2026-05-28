import { Route, Routes } from "react-router";

import CatalogPage from "./books/CatalogPage.jsx";
import Layout from "./layout/Layout.jsx";
import Error404 from "./Error404";
import BookDetails from "./books/BookDetails.jsx";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";

/**
 * Book Buddy is a catalog of books, which users
 * can reserve or return, once they are logged in.
 */

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* I need to set my index element to CatalogPage */}
          <Route index element={<CatalogPage />} />
          <Route path="/books" element={<CatalogPage />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}
