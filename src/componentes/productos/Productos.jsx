import "./productos.css";


const Productos = () => {
    return (
        <section className="section__productos">
            <h3 className="productos__h3">Nuestros Productos</h3>

            <div className="productos__tarjetas">
                <div className="tarjeta">
                    <div className="tarjeta__titulo">
                        <h4>Para Regalar</h4>
                    </div>
                    <div className="tarjeta__contenido">
                        <ul className="tarjeta__lista">
                            <li className="tarjeta__item">Agendas personalizadas</li>
                            <li className="tarjeta__item">Libros para colorear</li>
                            <li className="tarjeta__item">Stickers</li>
                        </ul>
                    </div>
                    <div className="tarjeta__boton">
                        <button>DESPLEGAR</button>
                    </div>
                </div>

                 <div className="tarjeta">
                    <div className="tarjeta__titulo">
                        <h4>Para Docentes</h4>
                    </div>
                    <div className="tarjeta__contenido">
                        <ul className="tarjeta__lista">
                            <li className="tarjeta__item">Agendas personalizadas</li>
                            <li className="tarjeta__item">Libros para colorear</li>
                            <li className="tarjeta__item">Stickers</li>
                        </ul>
                    </div>
                    <div className="tarjeta__boton">
                        <button>DESPLEGAR</button>
                    </div>
                </div>

                 <div className="tarjeta">
                    <div className="tarjeta__titulo">
                        <h4>Para Todos</h4>
                    </div>
                    <div className="tarjeta__contenido">
                        <ul className="tarjeta__lista">
                            <li className="tarjeta__item">Agendas personalizadas</li>
                            <li className="tarjeta__item">Libros para colorear</li>
                            <li className="tarjeta__item">Stickers</li>
                        </ul>
                    </div>
                    <div className="tarjeta__boton">
                        <button>DESPLEGAR</button>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default Productos;

