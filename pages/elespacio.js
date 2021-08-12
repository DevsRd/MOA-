import Head from "next/head";
import Container from "../components/Container";

const elspacio = () => {
    return (
        <Container>
            <Head>
                <title>Moa - El espacio</title>
            </Head>
            <div className="main">
            <h1>El ESPACIO</h1>
                <img src="/espacio.jpg" alt="lomoli interior" />
                <span></span>
                <h3>EN PROCESO DE REFORMA</h3>
                <span></span>
                <p>
                En breve vamos a estar reformando todo el hotel y nuestro restaurante, para 
crear nuevos ambientes. Dispondrá de la sala central, una sala privada, la 
cava donde se podrán hacer degustaciones de comida y vinos, Bar Coee & 
Shop, donde ofreceremos servicios de Brunch y Drunch, así como cafetería.</p>
                <p>
                Vamos a preparar a conciencia nuestras terrazas y jardines para ofrecer más 
espacios donde disfrutar de nuestra gastronomía.
                </p>
            </div>
            <style jsx>{`
            @media(min-width:750px){

                h1{
                    font-weight: 300;
                    color: rgb(167, 167, 167);
                }
           
                img {
                    height: 350px;
                    width: 500px;
                }
                p { margin-top: 18px;
                    font-size: 13px;
                    color: rgb(90, 90, 90);
                }}
                h3{
                    color: rgb(90, 90, 90);
                    text-align:center;
                    font-size:14px;
                
                }
                span {
                    display: block;
                    background-color:rgb(90, 90, 90);
                    height: 1.8px;
                    margin: 15px 0; 
                }
                img { height: auto;
                    width: 100%;}
                `}
            </style>
        </Container>
    )
}
export default elspacio;