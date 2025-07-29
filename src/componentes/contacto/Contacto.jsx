import "./contacto.css";


const Contacto = () => {
    return (
        <section className="section__contacto">

            <h3 className="contacto">Contacto</h3>
            <p className="contacto__texto">Puedes dejarnos un correo electronico</p>

            <form action="" className="formulario__contacto">
                <input type="name"
                    className="input__contacto"
                    placeholder="Tu nombre?"
                    minlength="3"
                    maxlength="20"
                    required />
                <input type="email"
                    className="input__contacto"
                    placeholder="Tu correo?"
                    required />
                <input type="text"
                    className="input__contacto"
                    placeholder="Asunto"
                    required />
                <textarea name=""
                    id=""
                    className="area__mensaje"
                    placeholder="Mensaje"
                    required></textarea>

                <input type="submit"
                    name="submit"
                    className="boton__submit" />
            </form>

        </section>
    )
}

export default Contacto;

