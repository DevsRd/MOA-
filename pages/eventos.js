import Head from "next/head";
import Container from "../components/Container"
import Link from 'next/link'

const eventos = () => {
    return (
        <Container>
            <Head>
                <title>Moa-Eventos</title>
            </Head>
            <div className="main">
                <h1>EVENTOS EN MÖA</h1>
                <img src="/Optimized-boda.jpg" />
                <span></span>
                <h3>SALA PRIVADA - SALON EVENTOS</h3>
                <span></span>
                <p>En Möa podemos ofrecerte momentos especiales para tus evento, tanto en
                    nuestra sala como en nuestras terrezza. Pequeños e íntimos eventos cuidados
                    hasta el último detalle.
                </p>
                <Link href="/contacta">
                    <a>SOLICITAR</a>
                </Link>

            </div>
            <style jsx>{`
            @media(min-width:750px){
                img {
                    height: 350px;
                    width: 500px;
                }}
                p { margin-top: 18px;
                    font-size: 13px;
                    color: rgb(90, 90, 90);
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
                    a{
                        margin-top:2000px
                    }
                `}
            </style>
        </Container>
    )
}
export default eventos;