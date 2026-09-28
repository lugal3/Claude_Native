import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { RequireAuth } from './RequireAuth';
import { RequireRole } from './RequireRole';

import { Landing } from './Landing';
import { Dashboard } from './Dashboard';
import { AdminDemo } from './AdminDemo';

import './App.css';

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* =====================================
            PÁGINA PÚBLICA
        ====================================== */}

        <Route
          path="/"
          element={<Landing />}
        />

        {/* =====================================
            RUTAS QUE REQUIEREN LOGIN
        ====================================== */}

        <Route element={<RequireAuth />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* =================================
              RUTA QUE REQUIERE ROL ADMIN
          ================================== */}

          <Route
            element={
              <RequireRole role="Admin" />
            }
          >

            <Route
              path="/admin"
              element={<AdminDemo />}
            />

          </Route>

        </Route>

        {/* Si la ruta no existe vuelve al inicio */}

        <Route
          path="*"
          element={<Landing />}
        />

      </Routes>

    </BrowserRouter>
  );
}