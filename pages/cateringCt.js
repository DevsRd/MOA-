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
                <p>La cuina de Möa pot preparar els nostres plats en base al nostre Menú de
                    Temporada o pot prapararte sota els teus gustos un menú concorde als teus
                    convidats. Els millors productes artesanals i auctóctonos faran de la teva
                    càtering l'estrella de l'esdeveniment</p>
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