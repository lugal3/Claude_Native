import {
  Link
} from 'react-router-dom';

import {
  useMsal,
  useIsAuthenticated
} from '@azure/msal-react';

import {
  InteractionStatus
} from '@azure/msal-browser';

import {
  loginRequest
} from './authConfig';


export function Landing() {

  const {
    instance,
    inProgress
  } = useMsal();

  const isAuthenticated =
    useIsAuthenticated();


  // ==========================================
  // LOGIN MICROSOFT
  // ==========================================

  const handleLogin = () => {

    if (
      inProgress ===
      InteractionStatus.None
    ) {

      instance
        .loginRedirect(loginRequest)
        .catch((error) =>
          console.error(error)
        );
    }
  };


  // ==========================================
  // LOGOUT MICROSOFT
  // ==========================================

  const handleLogout = () => {

    if (
      inProgress ===
      InteractionStatus.None
    ) {

      instance
        .logoutRedirect({
          postLogoutRedirectUri: '/'
        })
        .catch((error) =>
          console.error(error)
        );
    }
  };


  return (

    <div className="hm-wrapper">


      {/* =====================================
          HEADER
      ====================================== */}

      <header className="hm-header">

        <div className="container">

          <div className="header-menu">


            {/* LOGO */}

            <div className="hm-logo">

              <Link to="/">

                <img
                  src="/img/logo-home-master-store.png"
                  alt="Home Master Store"
                />

              </Link>

            </div>


            {/* MENÚ */}

            <nav className="hm-menu">

              <ul>

                <li>
                  <Link to="/">
                    Inicio
                  </Link>
                </li>


                <li>

                  <a href="#productos">
                    Productos
                  </a>

                </li>


                <li>

                  <a href="#categorias">
                    Categorías
                  </a>

                </li>


                {isAuthenticated && (

                  <li>

                    <Link to="/dashboard">
                      Mi cuenta
                    </Link>

                  </li>

                )}


                {isAuthenticated && (

                  <li>

                    <Link to="/admin">
                      Admin
                    </Link>

                  </li>

                )}

              </ul>


              {/* LOGIN / LOGOUT */}

              <div>

                {isAuthenticated ? (

                  <button
                    className="hm-btn btn-primary"
                    onClick={handleLogout}
                    disabled={
                      inProgress !==
                      InteractionStatus.None
                    }
                  >

                    Cerrar sesión

                  </button>

                ) : (

                  <button
                    className="hm-btn btn-primary"
                    onClick={handleLogin}
                    disabled={
                      inProgress !==
                      InteractionStatus.None
                    }
                  >

                    {
                      inProgress !==
                      InteractionStatus.None

                        ? 'Cargando...'

                        : 'Iniciar sesión'
                    }

                  </button>

                )}

              </div>


              {/* CARRITO */}

              <div className="hm-icon-cart">

                <a href="#carrito">

                  <i className="las la-shopping-cart"></i>

                  <span>
                    0
                  </span>

                </a>

              </div>


            </nav>

          </div>

        </div>

      </header>


      {/* =====================================
          BANNER
      ====================================== */}

      <section className="hm-banner">

        <div className="img-banner">

          <img
            src="/img/img-banner-try-1.jpg"
            alt="Productos agrícolas"
          />

        </div>

      </section>


      {/* =====================================
          CATEGORÍAS
      ====================================== */}

      <section
        id="categorias"
        className="hm-page-block"
      >

        <div className="container">


          <div className="header-title">

            <h1>
              Categorías
            </h1>

          </div>


          <div className="hm-grid-category">


            {/* CATEGORÍA 1 */}

            <div className="grid-item">

              <a href="#productos">

                <img
                  src="/img/c-1.jpg"
                  alt="Semillas"
                />

                <div className="c-info">

                  <h3>
                    Semillas
                  </h3>

                </div>

              </a>

            </div>


            {/* CATEGORÍA 2 */}

            <div className="grid-item">

              <a href="#productos">

                <img
                  src="/img/c-2.jpg"
                  alt="Packs"
                />

                <div className="c-info">

                  <h3>
                    Packs
                  </h3>

                </div>

              </a>

            </div>


            {/* CATEGORÍA 3 */}

            <div className="grid-item">

              <a href="#productos">

                <img
                  src="/img/c-3.jpg"
                  alt="Otros productos"
                />

                <div className="c-info">

                  <h3>
                    Otros productos
                  </h3>

                </div>

              </a>

            </div>


            {/* CATEGORÍA 4 */}

            <div className="grid-item">

              <a href="#productos">

                <img
                  src="/img/c-4.jpg"
                  alt="Ofertas"
                />

                <div className="c-info">

                  <h3>
                    Ofertas
                  </h3>

                </div>

              </a>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================
          PRODUCTOS
      ====================================== */}

      <section
        id="productos"
        className="hm-page-block bg-fondo"
      >

        <div className="container">


          <div className="header-title">

            <h1>
              Productos populares
            </h1>

          </div>


          {/* PESTAÑAS */}

          <ul className="hm-tabs">

            <li className="hm-tab-link">
              Semillas
            </li>

            <li className="hm-tab-link">
              Packs
            </li>

            <li className="hm-tab-link">
              Otros
            </li>

            <li className="hm-tab-link">
              Ofertas
            </li>

          </ul>


          {/* Más adelante React cargará
              aquí los productos */}

          <div className="tabs-content">

            <div className="container">

              <div className="p-title">

                <h2>
                  Semillas
                </h2>

              </div>


              <div className="grid-product">

                <p>
                  Los productos serán
                  cargados desde React.
                </p>

              </div>

            </div>

          </div>


        </div>

      </section>


      {/* =====================================
          FOOTER
      ====================================== */}

      <footer>

        <div className="container">

          <div className="foo-row">


            <div className="foo-col">

              <h2>

                Suscríbete

                <br />

                a nuestro newsletter

              </h2>


              <form
                onSubmit={
                  (event) =>
                    event.preventDefault()
                }
              >

                <div className="f-input">

                  <input
                    type="email"
                    placeholder="Ingrese su correo"
                  />

                  <button
                    type="submit"
                    className="hm-btn-round btn-primary"
                  >

                    <i className="far fa-paper-plane"></i>

                  </button>

                </div>

              </form>

            </div>


            <div className="foo-col">

              <ul>

                <li>

                  <a href="#productos">
                    Productos
                  </a>

                </li>


                <li>

                  <a href="#categorias">
                    Categorías
                  </a>

                </li>


                {isAuthenticated && (

                  <li>

                    <Link to="/dashboard">
                      Mi cuenta
                    </Link>

                  </li>

                )}


              </ul>

            </div>


          </div>

        </div>

      </footer>


      {/* =====================================
          COPYRIGHT
      ====================================== */}

      <div className="foo-copy">

        <div className="container">

          <p>
            HM STORE © Todos los derechos reservados
          </p>

        </div>

      </div>


    </div>
  );
}