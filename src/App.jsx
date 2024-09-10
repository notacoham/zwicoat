import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { About, Contact, HomeLayout, Landing, Technology } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
