import Head from "next/head"
import Container from "../components/ContainerCt";
//import swal from "sweetalert";
//import emailjs from 'emailjs-com';

const reservas = () => {
    
    /*function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('lomoli', 'template_9ryeet9', e.target, 'user_78Gpd36t9QDfFTquJuuma')
          .then((result) => {
              swal("Gràcies per sol·licitar la seva reserva. En breu li confirmarem.");
          }, (error) => {
              console.log(error.text);
          });
      }*/


   /* const handleSubmit = async (e) => {
        
        e.preventDefault()
        const res = await fetch(
            'http://localhost:4000/api/reservas/createreservas',
            {
              body: JSON.stringify({
                comensal : e.target.nombre.value,
                correo : e.target.correo.value,
                telefono: e.target.telefono.value,
               // instagram: e.target.instagram.value,
               espacio : e.target.espacio.value,
                 pax: e.target.comensales.value,
               fecha: e.target.fecha.value,
                hora: e.target.hora.value
              }),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }
          )
    }*/
    return (
        <Container>
            <Head><title>Moa-Reservas</title></Head>
            <div className="main">
                <h1>RESERVA LA TEVA TAULA</h1>
                <span></span>
                <h3>Omple el formulari per poder reservar el seu espai</h3>
                <form>
                <h2>COMENSAL</h2>
                <span></span>
                <div className="inputs">
                    <input name="nombre" type="text" placeholder="Nom" required/>
                    <input name="correo" type="mail" placeholder="Correu" required/>
                    <input name="telefono" type="number" placeholder="Teléfono" required/>
                </div>
                <h2>VULL RESERVAR</h2>
                <span></span>
                <select name="espacio">
                    <option>Espai</option>
                    <option>Terraza</option>
                    <option>Interior</option>
                </select>
                <select name="comensales">
                    <option value="1">Numero Comensales</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                </select>
                <div className="date">
                    <label>Fecha</label>
                    <input name="fecha" type="date" required />
                    <label className="hora">Hora</label>
                    <input name="hora" type="time" min="13:00" max="23:00" required/>
                </div>
                <div className="permisos">
                    <div>
                    <input type="checkbox" id="permiso" name="promociones"/>
                            <input type="checkbox" id="permisos" name="cookie" required/>
                    </div>
                    <div>
                        <label htmlFor="permiso">Acepto recibir noticias y promociones del restaurante</label>
                        <label htmlFor="permisos">He leído las Políticas de empresa y acepto las condiciones </label>
                    </div>
                </div>
                <h2>SOL·LICITUDS</h2>
                <textarea name="solicitudes" id="solicitudes" cols="47.8" rows="5"></textarea>
                <button type="submit" className="d-block">SOLICITAR</button>
                </form>
            </div>
            <style jsx>{`

            alert{
                background: grey;
                color: white
            }
            h2{
                
                margin:35px 0px 3px 0px;
                padding-left:10px;
            }
            h3{
                margin:10px 0 0px 0;
            }
            
            .date {
                width:100%;
                font-size:11.8px;
                color: rgb(167, 167, 167);
            }
            .date input {
                display: inline-block;
                width:auto;   
                color: rgb(167, 167, 167);                
            }
            .date label{
                margin: 0 6.5px;
            }
            span {
                display: block;
                background-color:rgb(90, 90, 90);
                height: 1px;
            }
            input{
                font-size:11.8px;
                outline: none;
                border:none
                border-color:rgb(90, 90, 90);
                padding: 0 0 0 5px;
                width:85%;
                margin-top:8px;
            }
            select {
                color: rgb(167, 167, 167);
                font-size:11.8px;
                padding: 1px 1px 0 5px;
                border:none
                border-color:rgb(90, 90, 90);
                outline: none;
                width:85%;
                margin-top:8px;
            }
            .permisos{
                display: grid;
                grid-template-columns: 5% 95%;
                place-content: center;
                margin-top:20px;
            }
            .permisos label{
                font-size:12px;
                color: rgb(167, 167, 167); 
                margin-bottom: 0;  
            }
            img { 
                height: auto;
                 width: 100%;
            }
            @media(min-width:750px){
                .date {
                    text-align: center;
                    width:85%;
                }
                .date label{
                    margin: 0 10px;
                }
                textarea {
                    color: #00000091;
                    padding:1rem;
                    width: 90%
                    resize: none;
                }
            }
                `}
            </style>

        </Container>
    )
}
export default reservas;