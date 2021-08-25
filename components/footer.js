const footer = () => {
    return (
        <>
            <div className="footer">
                <span></span>
                <img src="MOM logo.png" alt="MOM logo" />
                <span></span>


            </div>
            <style jsx>{`
            .footer {    
            display: flex; 
               margin-top:90px;
               align-items: center;
              
              
               
            }
            .footer span {
                width:100%;
            }       
            .footer img {
                width:180px;
            }
            span{
                display:inline-block;
                background-color:black;
                width:99%;
                height:1px;
            }
            hr {
                display: inline;
                height: 1px;
                background-color: grey;
              }
            @media(min-width:750px){
                .footer{
               position:absolute; /*El div será ubicado con relación a la pantalla*/
               left:0px; /*A la derecha deje un espacio de 0px*/
               right:0px; /*A la izquierda deje un espacio de 0px*/
               bottom:0px; /*Abajo deje un espacio de 0px*/
               z-index:0;
                }
                
            }

        `}
            </style>
        </>
    )
}
export default footer;
