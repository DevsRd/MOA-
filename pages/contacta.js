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
               <Restaurant/>
               <Restaurant/>
               <Restaurant/>
                </div>
               
               
            </div>

            <style jsx>
                {`  
                .container{
                    display:grid;
                    grid-template-columns: repeat(2, 1fr);

                }
                
                @media(min-width:1030px){
                    .container{
                        justify-content: center;
                        place-content:center;
                        grid-template-columns: repeat(3, 1fr);

                    }}
                `}
            </style>
        </Container>
    )
}

export default Index;