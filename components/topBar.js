const topBar = () => {
    return (
        <>  
        <div className="topBar">
            <img src="/moa.png" alt="moa logo" />
        </div>

            <style jsx>{`
            .topBar{
                width:100%;
                max-width: 1100px;
                margin: 0 auto;
            }
             img {
                 display: none;
                 height: 80px;
                 width: 190px;
             }
             @media(min-width:750px){  
                 margin:40px 0;
             img {
                display: inline-block;
                height: auto;
                width: 350px; }}              

                `}
            </style>
        </>


    )
}
export default topBar