import Head from "next/head"
import Container from "../components/Container"

const politicas = () => {
    return (
        <Container>
            <Head>
                <title>Moa-Politicas</title>
            </Head>
            <div className="main">
            <h1>POLITICAS</h1>
            <span></span>
                <h5>Información que es recogida</h5>
                <p>Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información
                    de contacto como su dirección de correo electrónica e información demográfica. Así
                    mismo cuando sea necesario podrá ser requerida información específica para procesar
                    algún pedido o realizar una entrega o facturación</p>
                <h5>Uso de la información recogida</h5>
                <p>
                    Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio
                    posible, particularmente para mantener un registro de usuarios, de pedidos en caso que
                    aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos
                    electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos
                    productos y otra información publicitaria que consideremos relevante para usted o que
                    pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección
                    que usted proporcione y podrán ser cancelados en cualquier momento
                </p>
                <p>
                    Albert Guillén Group está altamente comprometido para cumplir con el compromiso de
                    mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.
                </p>
                <h5>Cookies</h5>
                <p>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso
                    para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve
                    entonces para tener información respecto al tráfico web, y también facilita las futuras
                    visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web
                    pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.</p>
                <p>Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas
                    y su frecuencia. Esta información es empleada únicamente para análisis estadístico y
                    después la información se elimina de forma permanente. Usted puede eliminar las
                    cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a
                    proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de
                    su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente.</p>
                <p>Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores
                    aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También
                    usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se
                    declinan es posible que no pueda utilizar algunos de nuestros servicios.</p>
                <h5>Enlaces a Terceros</h5>
                <p>Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una
                    vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos
                    control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los
                    términos o privacidad ni de la protección de sus datos en esos otros sitios terceros.
                    Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.</p>
                <h5>Control de su información personal</h5>
                <p>En cualquier momento usted puede restringir la recopilación o el uso de la información
                    personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar
                    un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de
                    recibir información por correo electrónico. En caso de que haya marcado la opción de
                    recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.</p>
                <p>Esta compañía no venderá, cederá ni distribuirá la información personal que es
                    recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden
                    judicial.</p>

                <p>Albert Guillén Group se reserva el derecho de cambiar los términos de la presente
                    Política de Privacidad en cualquier momento.</p>

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