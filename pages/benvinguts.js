import Head from "next/head";
import Container from "../components/ContainerCt";

const benvinguts = () => {
    return (
        <Container>
            <Head>
                <title>Moa - Benvinguts</title>
            </Head>
            <div className="main">
                <img src="/Trendy_food_025.jpg" alt="platomoa" />
                <p>Aquí res és el que sembla. Podem semblar bojos, amb barret i barba, com 
abans, perquè la nostra cuina és un inexplicable viatge per llocs que et 
portaran a sabors sorprenents, textures que creies haver oblidat i experiències 
que no voldràs oblidar.
                </p>
                <p>
                Volem que ens acompanyis en aquest viatge gastronòmic per obrir-te els ulls 
a una altra manera de fer cuina, la nostra boja manera.</p>
                <p>
                Som com il·luminats en una escola bressol. Som investigadors, descobridors, 
inventors. Creem sabors, colors, olors i textures.
                </p>
                <p>
                Estem bojos per la nostra cuina i per descobrir un somriure a la cara
                </p>

            </div>

            <style jsx>{`
              p {
                   margin-top: 18px;
            }
                img { height: auto;
                    width: 100%;}
                `}
            </style>
        </Container>
    )
}

export default benvinguts;