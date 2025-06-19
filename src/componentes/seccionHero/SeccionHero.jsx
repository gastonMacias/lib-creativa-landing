import "./seccionHero.css"


const SeccionHero = () => {
    return(
        <>
            <section className="seccionHero">
                <img className="hero__imgFondo" src="/imagenes/gatitoFondo.jpg" alt="fondo gatito" />
                <h1 className="hero__titulo">Libreria Creativa VALKY</h1>
                <span className="hero__span">Bienvenido a Valky: Libros, arte y creatividad en un solo lugar.</span>
                <button className="hero__button"><a href="">Ir al market</a></button>
            </section>
        </>
    )
}


export default SeccionHero;