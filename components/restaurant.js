const Restaurantes = () => {
    return (
        <div className="restaurants">
            <div className="und">
                <h2>MÖA VERÓN</h2>
                <h4>+ (809) 000 000</h4>
                <br />
                <h4>PUNTA CANA</h4>
                <h4>REPUBLICA DOMINICAN</h4>
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
        </div>

    )
}
export default Restaurantes;