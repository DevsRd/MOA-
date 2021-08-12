import Link from "next/link";
const social = () => {
    return (<>
        <ul>
            <li>
                <a href="https://www.instagram.com/moafatarella/?hl=es" target="_blank">INSTAGRAM</a>
            </li>
            <li>
                <Link href="/politicas">
                    <a>POLITICAS</a>
                </Link>
            </li>
            <li>
                <Link href="/benvinguts">
                    <a>CATALAN</a>
                </Link>
                <span></span>
            </li>
        </ul>
        <style jsx>
            {`
             ul{
                display:none; 
                text-align: end; 
                padding:2px;
                
            }
            li{
                list-style: none;
                
            }
            li a {
                display:block;
                color: rgb(167, 167, 167);
                text-decoration: none;
                font-size:14px
            }
            li a:hover{
                color: rgb(93, 114, 97);
            }
            span{
                display: inline-block;
                background-color:#000;
                height: 0.8px;
                width: 120px;
                text-align: end;
            }
            .logo-slowfood{
                text-align: end;
                width:100px;
                height:100px;
            }
            @media(min-width:750px){
                ul{
                    display:block;
                }
            }
            
            }
            `}
        </style>
    </>
    )
}
export default social;