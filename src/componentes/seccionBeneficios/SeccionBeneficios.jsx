import "./seccionBeneficios.css";

const SeccionBeneficios = () => {
    return (
            <section className="seccionBeneficios">
                <figure className="seccionBeneficios__imagen">
                    <img className="beneficios__imagen" src="./imagenes/agendaIkki.jpg" alt="agenda Ikki" />
                </figure>
                <div className="seccionBeneficios__texto">
                    <h3 className="beneficios__titulo">“Valky convierte objetos comunes en recuerdos únicos.”</h3>
                    <p className="beneficios__texto">"En Valky creamos productos personalizados que cuentan historias y despiertan emociones. 
                        Cada diseño nace a pedido, pensado especialmente para vos."</p>
                </div>
            </section>
    )
}


export default SeccionBeneficios;