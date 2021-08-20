import Head from "next/head"
import TopBar from "./topBar";
import Footer from "./footer"




const Container = (props) => (
    <>
        <Head>
            <title>Lomoli</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
            <link rel="stylesheet" href="/style.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
            <script src="https://kit.fontawesome.com/e32e6a3f43.js" crossorigin="anonymous"></script>

        </Head>

        <div>
            <TopBar/>
            <div className="Container">
                <div>
                    {props.children}
                    <span></span>
                    <Footer />
                </div>
            </div>
        </div>
        <style jsx>{`                  
                    .Container{
                        text-align:center;
                    }
                `}
        </style>
    </>
)
export default Container;