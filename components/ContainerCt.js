import Head from "next/head"
import TopBar from "./topBar";
import Footer from "./footer"
import Navigation from "./navigationCt";
import Social from "./socialCt"

const ContainerCt = (props) => (
    <>
        <Head>
            <title>Lomoli</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
            <link rel="stylesheet" href="/style.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
            <script src="https://kit.fontawesome.com/e32e6a3f43.js" crossorigin="anonymous"></script>

        </Head>

        <div className="center">
            <TopBar />
            <div className="Container">
                <Navigation />
                <div className="centerr">
                    {props.children}
                    <span></span>
                    <Footer />
                </div>
                <Social />
            </div>
        </div>
        <style jsx>{`
                .center{
                    position: absolute;
                    min-width: 350px;
                    margin: 0 auto;
                    padding:0;
                
                }
                @media(min-width:765px){
                .center {
                    width:100%;
                    padding: 0; 
                }
                .centerr{
                    margin: 0 auto;
                }
                .Container {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    width:100%;
                    max-width:1080px;
                    margin:0 auto;
                }}
                .Container {
                    padding: 0 10px;
                }
                .img{ 
                    max-width:100%;
                    height: auto;
                  }
                  span {
                    margin-top: 40px;
                }
                `}
        </style>
    </>
)
export default ContainerCt;