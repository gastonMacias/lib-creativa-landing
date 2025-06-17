import "./seccionHero.css"


const SeccionHero = () => {
    return(
        <>
            <section className="seccionHero">
                <img className="hero__imgFondo" src="../../../public/imagenes/gatitoFondo.jpg" alt="" />
                <h1 className="hero__titulo">Libreria Creativa VALKY</h1>
                <span className="hero__span">Bienvenido a Valky: Libros, arte y creatividad en un solo lugar.</span>
                <button className="hero__button"><a href="">Link a nuestro market</a></button>
            </section>
        </>
    )
}


export default SeccionHero;