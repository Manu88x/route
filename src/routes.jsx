import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';  // Corrected import

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/directors',
    element: <Directors />,
  },
  {
    path: '/actors',
    element: <Actors />,
  },
  {
    path: '/movie/:id',
    element: <Movie />,
  },
  {
    path: '*', // This will catch any non-existent routes and render ErrorPage
    element: <ErrorPage />,
  },
];

export default routes;
