import Head from "next/head";
import Container from "../components/Container";

const elspacio = () => {
    return (
        <Container>
            <Head>
                <title>Moa - food and Wine</title>
            </Head>
            <div className="main">
                <h1>FOOD Y WINE</h1>
                <img src="/Menu Möa.jpg" alt="lomoli interior" />
                <span></span>
                <h3>CARTA DE TEMPORADA - CARTA VINOS</h3>
                <span></span>
                <p>
                    CARTA DE TEMPORADA. Nuestra carta es de Temporada para poder usar
                    productos frescos y locales en nuestra cocina.</p>
                <a href="">VER CARTA TEMPORADA</a>
            </div>
            <style jsx>{`
            @media(min-width:750px){
                .main{
                    width 450px;
                }
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
                }
             }
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