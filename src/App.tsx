import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { Suspense, lazy } from "react";
const UserPage = lazy(() => import("./component/main/UserPage"));
const UserDetailPage = lazy(() => import("./component/main/UserDetailPage"));
const PhotoPage = lazy(() => import("./component/main/PhotoPage"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <UserPage />
        </Suspense>
      ),
    },
    {
      path: "/users",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <UserPage />
        </Suspense>
      ),
    },
    {
      path: "/users/:id",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <UserDetailPage />
        </Suspense>
      ),
    },
    {
      path: "/photos",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <PhotoPage />
        </Suspense>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
