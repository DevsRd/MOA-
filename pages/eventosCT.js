import Head from "next/head";
import Container from "../components/Container"
import Link from 'next/link'

const eventos = () => {
    return (
        <Container>
            <Head>
                <title>Moa-ESDEVENIMENTS</title>
            </Head>
            <div className="main">
                <h1>ESDEVENIMENTS En MÖA</h1>
                <img src="/Optimized-boda.jpg" />
                <span></span>
                <h3>SALA PRIVADA. SALÓ ESDEVENIMENTS</h3>
                <span></span>
                <p>En Möoa podem oferir-te moments especials per als teus esdeveniment, tant 
a la nostra sala com en les nostres terrezza. Petits i íntims esdeveniments 
cuidats fins l'últim detall.
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