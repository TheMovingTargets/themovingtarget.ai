import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { Episodes } from '@/pages/Episodes';
import { EpisodeDetail } from '@/pages/EpisodeDetail';
import { Agents } from '@/pages/Agents';
import { CatchUp } from '@/pages/CatchUp';
import { About } from '@/pages/About';
import { Inquiries } from '@/pages/Inquiries';
import { InquiriesSuccess } from '@/pages/InquiriesSuccess';
import { Press } from '@/pages/Press';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'episodes',
        element: <Episodes />,
      },
      {
        path: 'episodes/:slug',
        element: <EpisodeDetail />,
      },
      {
        path: 'agents',
        element: <Agents />,
      },
      {
        path: 'catchup',
        element: <CatchUp />,
      },
      {
        path: 'projects',
        element: <Navigate to="/catchup" replace />,
      },
      {
        path: 'projects/:slug',
        element: <Navigate to="/catchup" replace />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'inquiries',
        element: <Inquiries />,
      },
      {
        path: 'inquiries/success',
        element: <InquiriesSuccess />,
      },
      {
        path: 'press',
        element: <Press />,
      },
      {
        path: 'podcast',
        element: <Navigate to="/episodes" replace />,
      },
      {
        path: 'contact',
        element: <Navigate to="/inquiries" replace />,
      },
      {
        path: 'maria',
        element: <Navigate to="/agents" replace />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
