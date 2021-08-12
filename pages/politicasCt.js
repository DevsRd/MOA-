import Head from "next/head"
import Container from "../components/ContainerCt";

const politicas = () => {
    return (
        <Container>
            <Head>
                <title>Moa-Politicas</title>
            </Head>
            <div className="main">
                <h1>POLITICAS DE PRIVACIDAD</h1>
                <span></span>
                <h5>Informació que és recollida</h5>
                <p>El nostre lloc web podrà recollir informació personal per exemple: Nom,
                    informació de contacte com la seva adreça de correu electrònica i informació
                    demogràfica. Així mateix quan sigui necessari podrà ser requerida informació
                    específica per processar alguna comanda o realitzar un lliurament o
                    facturació.

                </p>

                <h5>Ús de la informació recollida</h5>
                <p>
                    El nostre lloc web empra la informació per tal de proporcionar el millor servei
                    possible, particularment per mantenir un registre d'usuaris, de comandes en
                    cas que apliqui, i millorar els nostres productes i serveis. És possible que siguin
                    enviats correus electrònics periòdicament a través del nostre lloc amb ofertes
                    especials, nous productes i altra informació publicitària que considerem
                    rellevant per a vostè o que pugui brindar algun benefici, aquests correus
                    electrònics seran enviats a l'adreça que vostè proporcioni i podran ser
                    cancel·lats en qualsevol moment.

                </p>
                <p>
                    Albert Guillén Group està altament compromès per complir amb el compromís
                    de mantenir la seva informació segura. Fem servir els sistemes més avançats i
                    els actualitzem constantment per assegurar-nos que no hi hagi cap accés no
                    autoritzat.

                </p>
                <h5>Cookies</h5>
                <p>Una cookies es refereix a un fitxer que és enviat amb la finalitat de sol·licitar
                    permís per emmagatzemar al seu ordinador, a l'acceptar aquest fitxer es crea i
                    la cookies serveix llavors per tenir informació respecte a el trànsit web, i també
                    facilita les futures visites a una web recurrent. Una altra funció que tenen les
                    cookies és que amb elles les web poden reconèixer individualment i per tant
                    brindar-te el millor servei personalitzat de la seva web.
                </p>
                <p>El nostre lloc web fa servir cookies per a poder identificar les pàgines que són
                    visitades i la seva freqüència. Aquesta informació és emprada únicament per a
                    anàlisi estadística i després la informació s'elimina de forma permanent. Vostè
                    pot eliminar les cookies en qualsevol moment des del seu ordinador. No
                    obstant això les cookies ajuden a proporcionar un millor servei dels llocs web,
                    estàs no donen accés a informació del seu ordinador ni de vostè, a menys que
                    vostè així ho vulgui i la proporcioni directament.</p>
                <p>Vostè pot acceptar o negar l'ús de cookies, però la majoria de navegadors
                    accepten cookiesautomàticament ja que serveix per tenir un millor servei web.
                    També vostè pot canviar la configuració del seu ordinador per declinar les
                    cookies. Si es declinen és possible que no pugui utilitzar alguns dels nostres
                    serveis.</p>
                <h5>Enllaços a Tercers</h5>
                <p>Aquest lloc web pogués contenir en llaços a altres llocs que puguin ser del seu
                    interès. Una vegada que vostè de clic en aquests enllaços i abandoni la nostra
                    pàgina, ja no tenim control sobre a el lloc a què és redirigit i per tant no som
                    responsables dels termes o privacitat ni de la protecció de les seves dades en
                    aquests altres llocs tercers. Aquests llocs estan subjectes a les seves pròpies
                    polítiques de privacitat per la qual cosa és recomanable que els consulti per
                    confirmar que vostè està d'acord amb aquestes.</p>
                <h5>Control de la seva informació personal</h5>
                <p>En qualsevol moment vostè pot restringir la recopilació o l'ús de la informació
                    personal que és proporcionada al nostre lloc web. Cada vegada que se li
                    demani omplir un formulari, com el d'alta d'usuari, pot canviar la selecció
                    l'opció de rebre informació per correu electrònic. En cas que hagi marcat
                    l'opció de rebre el nostre butlletí o publicitat vostè pot cancel·lar-la en qualsevol
                    moment.</p>
                <p>Aquesta companyia no vendrà, cedirà o distribuirà la informació personal que
                    és recopilada sense el seu consentiment, llevat que sigui requerit per un jutge
                    amb un ordre judicial.</p>

                <p>Albert Guillén Group es reserva el dret de canviar els termes de la present
                    Política de Privacitat en qualsevol moment.</p>

            </div>
            <style jsx>{`
            span{
                margin:10px 0;
            }
            `}
            </style>
        </Container>
    )
}
export default politicas;