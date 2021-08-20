import Head from "next/head";
import Container from "../components/Container";

const Cocina = () => {
    return (
        <Container>
            <Head>
                <title>MÖA-Cocina</title>
            </Head>
            <div className="hero">
                <ul>
                    <li> <img src="cocina.jpg" alt="1" /></li>
                    <li> <img src="cocina2.jpg" alt="2" /></li>
                    <li> <img src="cocina3.jpg" alt="3" /></li>
                    <li> <img src="cocina4.jpg" alt="4" /></li>
                </ul>
            </div>
            <img src="T03.png" alt=""  className="title"/>
            <div className="container">
                <p>
                    Nuestra carta es de temporada y cambia cada vez que la naturaleza cambia.
                    Es la manera de poder crear los más extraordinarios y, a la vez, frescos platos para presentarle en la mesa.
                </p>
                <p>
                    Nuestra fislosofía en la cocina es que si no está recién recolectado,
                    no es saludable. Tenemos nuestras propias huertas y grandes compromisos con los productores locales,
                    tanto agricultores, ganaderos y productores artesanales
                    que elaboran para nosotros los mejores productos de la tierra.
                </p>

            </div>



            <style jsx>
                {`
                .hero ul{
                    width:400%;
                }
                @keyframes cambio {
                    0% {margin-left: 0;}
                    20% {margin-left: 0;}
                
                    25% {margin-left: -100%;}
                    40% {margin-left: -100%;}
                
                    45% {margin-left: -200%;}
                    75% {margin-left: -200%;}

                    80% {margin-left: -300%;}
                    100% {margin-left: -300%;}
                }
             @media(min-width:765px){
                 .hero{
                    grid-template-columns: repeat(4, 1fr);
                 }
           }
                `}
            </style>
        </Container>
    )
}

export default Cocina;