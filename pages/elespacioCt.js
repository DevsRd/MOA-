import Head from "next/head";
import Container from "../components/Container";

const elspacio = () => {
    return (
        <Container>
            <Head>
                <title>Moa -L'ESPAI</title>
            </Head>
            <div className="main">
                <h1>L'ESPAI</h1>
                <img src="/espacio.jpg" alt="lomoli interior" />
                <span></span>
                <h3>EN PROCÉS DE REFORMA</h3>
                <span></span>
                <p>
                    En breu estarem reformant tot l'hotel i el nostre restaurant, per crear nous
                    ambients. Disposarà de la sala central, una sala privada, la cava on es
                    podran fer degustacions de menjar i vins, Bar Coee & Shop, on oferirem
                    serveis de Brunch i Drunch, així com cafeteria.</p>
                <p>
                    Anem a preparar a consciència les nostres terrasses i jardins per oferir més
                    espais on gaudir de la nostra gastronomia.  </p>
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