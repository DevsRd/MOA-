import Head from "next/head";
import Container from "../components/Container";

const Catering = () => {
    return (
        <Container>
            <Head>
                <title>MÖA-Catering</title>
            </Head>
            <div className="cateringImg">
               
            </div>
            <img src="T05.png" alt=""  className="title"/>
            <div className="container">
                <p>
                Gracias a nuestros formatos de cocinas profesionales y a nuestro equipo y 
                su experiencia, podemos ofrecerte 
                servicios de catering para tus fiestas, celebraciones, bodas, etc. 
                </p>
                <p>
                Preparamos tu catering listo para servir, ofreciéndote también 
                servicio de camareros, chef  cooking, vinos, catas. 
                </p>

            </div>


            <style jsx>
                {`
                .cateringImg{
                    width: 100%;
                    height: 35.5vh;
                    background: url("/catering.jpg") no-repeat center center/cover;
                    background-size: cover ;
                    box-shadow: 0px 4px 2px 1px rgba(0, 0, 0, 0.2);
                  }
                 }
                `}
            </style>
        </Container>
    )
}

export default Catering;