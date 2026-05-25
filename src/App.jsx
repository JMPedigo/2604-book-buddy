import { Route, Routes } from "react-router";

/**
 * Book Buddy is a catalog of books, which users
 * can reserve or return, once they are logged in.
 */

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Catalog />} />
        </Route>
      </Routes>
    </>
  );
}
