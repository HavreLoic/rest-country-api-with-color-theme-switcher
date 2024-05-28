import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TopBar } from './Components/TopBar.tsx';
import { CountryDetailPage, ErrorPage } from './Pages';
import { CountryNameProvider, ThemeProvider, SearchProvider } from './Context';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: ":country",
    element: <CountryDetailPage />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <TopBar />
      <SearchProvider>
        <CountryNameProvider>
          <RouterProvider router={router} />
        </CountryNameProvider>
      </SearchProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
