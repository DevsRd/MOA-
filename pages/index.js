import Head from "next/head";
import Container from "../components/Container";

const Index = () => {
    return (
        <Container>
            <Head>
                <title>MÖA-Bienvenidos</title>
            </Head>

            <div className="main">
                <img src="T01.png" alt="bienvenidos"  className="title"/>
                <div className="container">
                <p>
                    Aquí nada es lo que parece. Podemos parecer locos, con sombrero y barba, como antaño, porque nuestra cocina es un inexplicable viaje por lugares que te llevarán a sabores sorprendentes, texturas que creías haber olvidado y experiencias que no querrás olvidar
                </p>
                <p>
                Queremos que nos acompañes en este viaje gastronómico para abrirte los ojos a otra manera de hacer cocina, nuestra loca manera y en el marco incomparable de nuestros MÖM Hotels. 
                </p>
                </div>
               
                <img className="moaSello"src="Moa sello.png" alt="Moa sello" />
            </div>

            <style jsx>
                {`
                .moaSello{
                    margin-top:30px;
                    width:100px;
                }
                `}
            </style>
        </Container>
    )
}

export default Index;