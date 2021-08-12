const footer = () => {
    return (
        <>
            <div className="footer">

                <h6>©2022 albert guillén group</h6>

                <a href="https://albertguillengroup.com/" target="_blank"><img className="logo-guillenGroup" src="/AGG logo.png" alt="albert guillen group" /></a>
            </div>
            <style jsx>{`
                .footer{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom:2rem;
                }
                h6 {
                    font-size: 10px;
                    color:  rgb(90, 90, 90);
                }
                .logo-guillenGroup{
                    height: 35px;
                    width: 130px;
                }
        `}
            </style>
        </>
    )
}
export default footer;