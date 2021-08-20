import Head from "next/head";
import Container from "../components/Container";

const Restaurantes = () => {
    return (
        <Container>
            <Head>
                <title>MÖA-Restaurantes</title>
            </Head>
            <div className="hero">
                <ul>
                    <li> <img src="restaurante.jpg" alt="1" /></li>
                    <li> <img src="restaurante2.png" alt="2" /></li>
                    <li> <img src="restaurante3.jpg" alt="3" /></li>
                </ul>
            </div>
            <img src="T02.png" alt="en un hotel"  className="title"/>
            <div className="container">
                <p>
                    Todos nuestros hoteles cuentan con restaurante a la carta, abierto al público.
                    Espacios creados para disfrutar grandes veladas con la mejor carta y vinos,
                    reservando tu tiempo.
                </p>
                <p>
                    Puedes realizar tus eventos y cenas privadas en nuestros restaurantes.
                    Siempre encontraremos la forma.
                </p>

            </div>
            <style jsx>
                {`
               .
                `}
            </style>
        </Container>
    )
}

export default Restaurantes;