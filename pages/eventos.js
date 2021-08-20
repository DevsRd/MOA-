import Head from "next/head";
import Container from "../components/Container";

const Eventos = () => {
    return (
        <Container>
            <Head>
                <title>MÖA-Eventos</title>
            </Head>
            <div className="hero">
                <ul>
                    <li> <img src="eventos.jpg" alt="1" /></li>
                    <li> <img src="eventos2.jpg" alt="2" /></li>
                    <li> <img src="eventos3.jpg" alt="3" /></li>
                </ul>
            </div>
            <img src="T04.png" alt=""  className="title" />
            <div className="container">
                <p>
                    Nuestros restaurantes están predestinados a ser tu lugar encantado para celebrar ese
                    compromiso especial con tu pareja. Disponemos de todos os elementos para llevar a término tu celebración
                    y banquete, a la vez que te ofrecemos los servicios de nuestros hoteles para hospedarte.
                </p>
                <p>
                    Si quieres hacer tu evento de empresa o comercial, nuestros restaurantes, jardines, terrazas y
                    salas son perfectas para tí. Contamos con todos los elementos necesarios para
                    llevar a cabo tus necesidades.
                </p>

            </div>
        </Container>
    )
}

export default Eventos;