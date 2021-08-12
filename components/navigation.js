import Link from 'next/link'


const Navigation = () => {
    return (<>
        <div className="menu-bar ">
            <div className="nav-movile">
                <nav className="navbar-light">
                    <div className="container-fluid d-flex  justify-content-between align-items-center">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <div className="d-flex  justify-content-between align-items-center">
                                <span className="navbar-toggler-icon" />
                            </div>
                        </button>
                        <img src="/moa.png" alt="moa logo" width={180} height={80} />

                    </div>
                </nav>
                <div className="collapse" id="navbarToggleExternalContent">
                    <nav className="toggle-nav">
                        <div>
                            <Link href="/">
                                <a>BIENVENIDOS</a>
                            </Link>
                            <Link href="/elespacio">
                                <a>EL ESPACIO</a>
                            </Link>
                            <Link href="/food">
                                <a>FOOD & WINE</a>
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
                            <Link href="/contacta">
                                <a>CONTACTA</a>
                            </Link>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/lomolirestaurant/?hl=es" target="_blank">INSTAGRAM</a>
                            <Link href="/politicas">
                                <a>POLITICAS</a>
                            </Link>
                            <Link href="/benvinguts">
                                <a>CATALAM</a>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            <ul className="navigacion">
                <li>
                    <Link href="/">
                        <a>BIENVENIDOS</a>
                    </Link>
                </li>
                <li>
                </li>
                <li>
                    <Link href="/elespacio">
                        <a>EL ESPACIO</a>
                    </Link>
                </li>
                <li>
                    <Link href="/food">
                        <a>FOOD & WINE</a>
                    </Link>
                </li>
                <li>
                    <Link href="/eventos">
                        <a>EVENTOS</a>
                    </Link>
                </li>
                <li>
                    <Link href="/catering">
                        <a>CATERING</a>
                    </Link>
                </li>
                <li>
                    <Link href="/reservas">
                        <a>RESERVAS</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contacta">
                        <a>CONTACTA</a>
                    </Link>
                </li>

                <span></span>
            </ul>
        </div>
        <style jsx>{`
        .toggle-nav{
            display: flex;
            justify-content: space-around;
            margin: 15px;
            
        }
        .toggle-nav a{
            display: block;
            color: rgb(167, 167, 167);
            text-decoration:none;
        }
        .toggle-nav a:hover{
            color: rgb(93, 114, 97);
        }
        text-align:start;
        ul{
            display: none;
            padding-left: 15px;
        }
        li{
            list-style: none;
            
        }
        li a {
            color: rgb(167, 167, 167);
            text-decoration: none;
            font-size:14px;
        }
        li a:hover{
            color: rgb(93, 114, 97);
        }
        @media(min-width:750px){
            .nav-movile{
                display: none
            }
            ul{
                display: inline-block;
            }
        span{
            display: block;
            background-color:#000;
            height: 0.8px;
            width: 120px;
        }}
            `}
        </style>
    </>

    )
}
export default Navigation;
