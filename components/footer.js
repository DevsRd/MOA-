const footer = () => {
    return (
        <>
            <div className="footer">
               
                <img src="MOM logo.png" alt="" />
                <img className="albertG" src="AGG logo.png" alt="" />
        
             </div>
            <style jsx>{`
            .footer {      
               margin-top:90px;
            }
            .albertG{
                display:block;
                position:absolute;
                right:0;
                width:150px; 
                height:auto;
            }
       
          
             
        `}
            </style>
        </>
    )
}
export default footer;
/*<h6>©2022 albert guillén group</h6>

<a href="https://albertguillengroup.com/" target="_blank"><img className="logo-guillenGroup" src="/AGG logo.png" alt="albert guillen group" /></a>
*/