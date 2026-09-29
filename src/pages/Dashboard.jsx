import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

import {
    getObras,
    getAdmin,
    getProductos,
    getPedidos,
    crearPedido
} from "../services/api";


export default function Dashboard() {

    const { currentUser, logout } = useAuth();

    const [claims, setClaims] = useState(null);

    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);

    const [adminData, setAdminData] = useState(null);
    const [adminError, setAdminError] = useState(null);

    const [productos, setProductos] = useState([]);
    const [productosError, setProductosError] = useState(null);

    const [pedidos, setPedidos] = useState([]);
    const [pedidosError, setPedidosError] = useState(null);

    const [productoSeleccionado, setProductoSeleccionado] = useState("");
    const [cantidad, setCantidad] = useState(1);

    const [pedidoCreado, setPedidoCreado] = useState(null);
    const [crearPedidoError, setCrearPedidoError] = useState(null);


    useEffect(() => {

        const cargarDashboard = async () => {

            if (!currentUser) {
                return;
            }


            // =====================================
            // CLAIMS FIREBASE
            // =====================================

            try {

                const tokenResult =
                    await currentUser.getIdTokenResult(true);

                setClaims(tokenResult.claims);

                console.log(
                    "Claims Firebase:",
                    tokenResult.claims
                );

            } catch (err) {

                console.error(
                    "Error obteniendo claims:",
                    err
                );
            }


            // =====================================
            // GET /obras
            // =====================================

            try {

                const data =
                    await getObras();

                setApiData(data);
                setError(null);

            } catch (err) {

                console.error(
                    "Error consultando obras:",
                    err
                );

                setError(
                    "Error al obtener los datos de /obras."
                );
            }


            // =====================================
            // GET /admin
            // =====================================

            try {

                const adminResponse =
                    await getAdmin();

                setAdminData(adminResponse);
                setAdminError(null);

            } catch (err) {

                console.error(
                    "Error consultando Admin:",
                    err
                );

                setAdminData(null);

                if (err.response?.status === 403) {

                    setAdminError(
                        "Acceso denegado: se requiere rol Admin."
                    );

                } else if (err.response?.status === 401) {

                    setAdminError(
                        "No autenticado."
                    );

                } else {

                    setAdminError(
                        "Error al consultar /admin."
                    );
                }
            }


            // =====================================
            // GET /productos
            // =====================================

            try {

                const productosResponse =
                    await getProductos();

                setProductos(productosResponse);
                setProductosError(null);

            } catch (err) {

                console.error(
                    "Error consultando productos:",
                    err
                );

                setProductosError(
                    "Error al obtener productos."
                );
            }


            // =====================================
            // GET /pedidos
            // =====================================

            try {

                const pedidosResponse =
                    await getPedidos();

                setPedidos(pedidosResponse);
                setPedidosError(null);

            } catch (err) {

                console.error(
                    "Error consultando pedidos:",
                    err
                );

                setPedidosError(
                    "Error al obtener pedidos."
                );
            }
        };


        cargarDashboard();

    }, [currentUser]);


    // =====================================
    // CERRAR SESIÓN
    // =====================================

    const handleLogout = async () => {

        try {

            await logout();

        } catch (err) {

            console.error(
                "Error al cerrar sesión:",
                err
            );
        }
    };


    // =====================================
    // CREAR PEDIDO
    // =====================================

    const handleCrearPedido = async (event) => {

        event.preventDefault();

        setPedidoCreado(null);
        setCrearPedidoError(null);


        if (!productoSeleccionado) {

            setCrearPedidoError(
                "Debes seleccionar un producto."
            );

            return;
        }


        try {

            const nuevoPedido = {
                producto: productoSeleccionado,
                cantidad: Number(cantidad)
            };


            const response =
                await crearPedido(nuevoPedido);


            setPedidoCreado(response);


            // Actualizar listado después de crear
            const pedidosActualizados =
                await getPedidos();

            setPedidos(pedidosActualizados);


        } catch (err) {

            console.error(
                "Error creando pedido:",
                err
            );

            setCrearPedidoError(
                "No se pudo crear el pedido."
            );
        }
    };


    return (

        <div className="dashboard-page">

            {/* =====================================
                ENCABEZADO
            ====================================== */}

            <section className="dashboard-header">

                <h1>
                    Dashboard Pedidos360
                </h1>

                <button onClick={handleLogout}>
                    Cerrar sesión
                </button>

            </section>


            {/* =====================================
                USUARIO
            ====================================== */}

            <section className="dashboard-card">

                <h2>
                    Bienvenido, {currentUser?.email}
                </h2>

                <p>
                    <strong>Email:</strong>{" "}
                    {currentUser?.email}
                </p>

            </section>


            {/* =====================================
                CLAIMS
            ====================================== */}

            <section className="dashboard-card">

                <h3>
                    Claims del Token
                </h3>

                <pre>
                    {
                        claims
                            ? JSON.stringify(
                                claims,
                                null,
                                2
                            )
                            : "Cargando claims..."
                    }
                </pre>

            </section>


            {/* =====================================
                OBRAS
            ====================================== */}

            <section className="dashboard-card">

                <h3>
                    Datos de AWS API Gateway
                </h3>

                {error && (
                    <p style={{ color: "red" }}>
                        {error}
                    </p>
                )}

                {apiData && (
                    <pre>
                        {JSON.stringify(
                            apiData,
                            null,
                            2
                        )}
                    </pre>
                )}

            </section>


            {/* =====================================
                ADMIN
            ====================================== */}

            <section className="dashboard-card">

                <h3>
                    Prueba de acceso Admin
                </h3>

                {adminData && (

                    <div>

                        <p>
                            Acceso autorizado.
                        </p>

                        <pre>
                            {JSON.stringify(
                                adminData,
                                null,
                                2
                            )}
                        </pre>

                    </div>
                )}


                {adminError && (

                    <p style={{ color: "red" }}>
                        {adminError}
                    </p>
                )}

            </section>


            {/* =====================================
                PRODUCTOS
            ====================================== */}

            <section className="dashboard-card">

                <h3>
                    Productos disponibles
                </h3>


                {productosError && (

                    <p style={{ color: "red" }}>
                        {productosError}
                    </p>
                )}


                {productos.length === 0 && !productosError && (

                    <p>
                        No hay productos disponibles.
                    </p>
                )}


                {productos.map((producto) => (

                    <div
                        key={producto.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            marginBottom: "10px"
                        }}
                    >

                        <h4>
                            {producto.nombre}
                        </h4>

                        <p>
                            Precio: ${producto.precio}
                        </p>

                        <p>
                            Stock: {producto.stock}
                        </p>

                    </div>

                ))}

            </section>


            {/* =====================================
                CREAR PEDIDO
            ====================================== */}

            <section className="dashboard-card">

                <h3>
                    Crear pedido
                </h3>


                <form onSubmit={handleCrearPedido}>

                    <div style={{ marginBottom: "10px" }}>

                        <label>
                            Producto:
                        </label>

                        <br />

                        <select
                            value={productoSeleccionado}
                            onChange={(event) =>
                                setProductoSeleccionado(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                Selecciona un producto
                            </option>

                            {productos.map((producto) => (

                                <option
                                    key={producto.id}
                                    value={producto.nombre}
                                >
                                    {producto.nombre}
                                </option>

                            ))}

                        </select>

                    </div>


                    <div style={{ marginBottom: "10px" }}>

                        <label>
                            Cantidad:
                        </label>

                        <br />

                        <input
                            type="number"
                            min="1"
                            value={cantidad}
                            onChange={(event) =>
                                setCantidad(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    <button type="submit">
                        Crear pedido
                    </button>

                </form>


                {pedidoCreado && (

                    <div style={{ marginTop: "15px" }}>

                        <p>
                            Pedido creado correctamente.
                        </p>

                        <pre>
                            {JSON.stringify(
                                pedidoCreado,
                                null,
                                2
                            )}
                        </pre>

                    </div>
                )}


                {crearPedidoError && (

                    <p
                        style={{
                            color: "red",
                            marginTop: "15px"
                        }}
                    >
                        {crearPedidoError}
                    </p>
                )}

            </section>


            {/* =====================================
                PEDIDOS
            ====================================== */}

            <section className="dashboard-card">

                <h3>
                    Pedidos registrados
                </h3>


                {pedidosError && (

                    <p style={{ color: "red" }}>
                        {pedidosError}
                    </p>
                )}


                {pedidos.length === 0 && !pedidosError && (

                    <p>
                        No hay pedidos registrados.
                    </p>
                )}


                {pedidos.map((pedido) => (

                    <div
                        key={pedido.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            marginBottom: "10px"
                        }}
                    >

                        <p>
                            <strong>ID:</strong>{" "}
                            {pedido.id}
                        </p>

                        <p>
                            <strong>Producto:</strong>{" "}
                            {pedido.producto}
                        </p>

                        <p>
                            <strong>Cantidad:</strong>{" "}
                            {pedido.cantidad}
                        </p>

                        <p>
                            <strong>Estado:</strong>{" "}
                            {pedido.estado}
                        </p>

                    </div>

                ))}

            </section>

        </div>
    );
}