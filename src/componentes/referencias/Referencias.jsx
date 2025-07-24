import "./referencias.css";


const Referencias = () => {
    return (
        <section className="section__referencias">
            <h3 className="referencias__titulo">Experiencias de nuestros clientes</h3>

            <div className="referencias__tarjetas">
                <div className="referencia__tarjeta">
                    <div className="referencia__tarjeta__imagen">
                        <img src="./imagenes/sujeto1.jpg" alt="Cliente 1" />
                    </div>
                    <div className="referencia__tarjeta__texto">
                        <span>Sus precios son muy accesibles</span>
                    </div>
                </div>

                <div className="referencia__tarjeta">
                    <div className="referencia__tarjeta__imagen">
                        <img src="./imagenes/sujeto2.jpg" alt="Cliente 2" />
                    </div>
                    <div className="referencia__tarjeta__texto">
                        <span>Regalé agendas personalizadas y quedaron maravillados</span>
                    </div>
                </div>

                <div className="referencia__tarjeta">
                    <div className="referencia__tarjeta__imagen">
                        <img src="./imagenes/sujeto3.jpg" alt="Cliente 3" />
                    </div>
                    <div className="referencia__tarjeta__texto">
                        <span>¡Sus calendarios son hermosos!</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Referencias;
