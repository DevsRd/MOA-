import Head from "next/head";
import Link from 'next/link'
import Container from "../components/Container";

const catering = () => {
    return (
        <Container>
            <Head>
                <title>Moa-catering</title>
            </Head>
            <div className="main">
                <h1>CATERING</h1>
                <img src="/catering-ibiza_2.jpg" />
                <p>La cocina de Möa puede prepararte nuestros platos 
en base a nuestro Menú de Temporada o puede prapararte bajo tus gustos 
un menú acorde a tus invitados. Los mejores productos artesanales y auctóctonos harán de tu catering la estrella del evento.
                </p>
                <Link href="/contacta">
                    <a>SOLICITAR</a>
                </Link>

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
                }
                span {
                    margin-top: 40px;
                }}
                img { height: auto;
                    width: 100%;}
                `}
            </style>
        </Container>
    )
}
export default catering;