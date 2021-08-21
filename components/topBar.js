import Link from 'next/link'

const topBar = () => {
    return (
        <>
            <section className="Bar">
                <div className="nav-movile">
                    <nav className="navbar-light">
                        <div className="container-fluid d-flex  justify-content-between align-items-center">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <div className="d-flex  justify-content-between align-items-center">
                                    <span className="navbar-toggler-icon" />
                                </div>
                            </button>
                            <img src="/Moa logo.png" alt="moa logo" width={180} height={80} />

                        </div>
                    </nav>
                    <div className="collapse" id="navbarToggleExternalContent">
                        <nav className="toggle-nav">
                            <div className="navigation">
                                <Link href="/">
                                    <a>BIENVENIDOS</a>
                                </Link>
                                <Link href="/restaurantes">
                                    <a>RESTAURANTES</a>
                                </Link>
                                <Link href="/cocina">
                                    <a>COCINA</a>
                                </Link>
                                <Link href="/eventos">
                                    <a>EVENTOS</a>
                                </Link>
                                <Link href="/catering">
                                    <a>CATERING</a>
                                </Link>
                                <Link href="/reservas">
                                    <a>RESERVAS</a>
                                </Link>
                            </div>
                            <div className="social">
                                <a href=" https://www.instagram.com/moarestaurants/?hl=es" target="_blank">INSTAGRAM</a>
                                <Link href="/contacta">
                                    <a>CONTACTA</a>
                                </Link>
                                <Link href="/politicas">
                                    <a>POLITICAS</a>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="nav-web">
                    <div className="topBar">
                        <Link href="/">
                            <a>BIENVENIDOS</a>
                        </Link>
                        <Link href="/restaurantes">
                            <a>RESTAURANTES</a>
                        </Link>
                        <Link href="/cocina">
                            <a>COCINA</a>
                        </Link>
                        <img src="/Moa logo.png" alt="moa logo" />
                        <Link href="/eventos">
                            <a>EVENTOS</a>
                        </Link>
                        <Link href="/catering">
                            <a>CATERING</a>
                        </Link>
                        <Link href="/reservas">
                            <a>RESERVAS</a>
                        </Link>
                    </div>
                    <div className="social">
                        <a href=" https://www.instagram.com/moarestaurants/?hl=es" target="_blank">INSTAGRAM</a>
                        <Link href="/contacta">
                            <a>CONTACTA</a>
                        </Link>
                        <Link href="/politicas">
                            <a>POLITICAS</a>
                        </Link>
                    </div>
                </div>
                <img className="orla" src="/Orla.png" alt="orla" />
            </section>

            <style jsx>
                {`  
                    .nav-web{
                        display:none;
                    }
                    .toggle-nav{
                        display: flex;
                        justify-content: space-around;
                    }
                    .toggle-nav a{
                        display: block;
                    } 
                @media(min-width:1030px){
                    .nav-movile{
                        display:none;
                    }

                    .nav-web{
                        display:block;
                    }
                    .topBar{
                        text-align:center;
                        margin-bottom: 10px
                    }
                    .topBar a {
                        margin: 0 15px;
                    }
                    .topBar img {
                        margin: 0 10px;
                        width: 350px; 
                        height: 100px;
                    }
                    .social{
                        top:0;
                        right: 0;
                        margin-top:10px;
                        margin-right:7px;
                        position: absolute;
                    }
                    .social a{
                        display:block;
                      
                    }
                    .orla{
                        width: 100vw;
                        height: 30px;
                        
                    }}
                    
            `}
            </style>
        </>


    )
}
export default topBar