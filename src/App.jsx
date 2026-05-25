import { Route, Routes } from "react-router";

import Layout from "./layout/Layout.jsx";
import Error404 from "./Error404";

/**
 * Book Buddy is a catalog of books, which users
 * can reserve or return, once they are logged in.
 */

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/*<Route index element={<Catalog />} />*/}
          <Route path="" />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}
