import Head from "next/head";
import Container from "../components/Container";
import Restaurant from "../components/restaurant";

const Index = () => {
    return (
        <Container>
            <Head>
                <title>MÖA-Contacta</title>
            </Head>

            <div className="main">
                <img src="T07.png" alt="contacta"  className="title"/>
                <div className="container">
             <p> Estamos trabajando en nuestros restaurantes y hoteles. Próximamente estaremos abiertos al público. Igualmente, 
                puedes contactarnos por correo a <a>info@moarestaurant.com</a></p>  
                </div>
               
               
            </div>

            <style jsx>
                {`  
               
                `}
            </style>
        </Container>
    )
}

export default Index;