import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { About, Contact, HomeLayout, Landing, Technology } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/technology',
        element: <Technology />,
      },
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
