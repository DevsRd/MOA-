import Head from "next/head";
import Container from "../components/Container";
import swal from "sweetalert";
import emailjs from 'emailjs-com';


const reservas = () => {

    function sendEmail(e) {
         e.preventDefault();
     
         emailjs.sendForm('Mom', 'template_7iqlxw5', e.target, 'user_78Gpd36t9QDfFTquJuuma')
           .then((result) => {
               swal(" Gracias por solicitar su reserva. En breve le confirmaremos.");
           }, (error) => {
               console.log(error.text);
           });
       }

    return (
        <Container>
            <Head><title>MÖA-Reservas</title></Head>
            <div className="main">
                <img src="T06.png" alt="bienvenidos"  className="title" />
                <form  onSubmit={ sendEmail}  className="formulario">
                    <div> <h2>RESTAURANTE</h2>
                        <div className="inputs">
                            <select name="pais"  >
                                <option value="">Pais</option>
                                <option>España</option>
                                <option>Bavaro</option>
                            </select>
                            <select name="localidad"  >
                                <option value="">Localidad</option>
                            </select>
                            <select name="hotel"  >
                                <option value="">Hotel</option>
                            </select>
                        </div>
                        <h2 className="comensales">COMENSAL</h2>
                        <div className="inputs">
                            <input name="nombre" type="text" placeholder="Nombre" required />
                            <input name="correo" type="mail" placeholder="Correo" required />
                            <input name="telefono" type="number" placeholder="Teléfono" required />
                            <input name="instagram" type="text" placeholder="Instagram" />
                        </div>
                        <h2>DOMICILIO</h2>
                        <div className="inputs">
                            <input name="ciudad" type="text" placeholder="Ciudad" required />
                            <input name="poblacion" type="text" placeholder="Poblacion" required />
                            <select name="paisL"  >
                                <option value="">Pais</option>
                                <option>España</option>
                                <option>Republica Dominicana</option>
                            </select>

                        </div>
                    </div>

                    <div>    
                         <h2>RESERVA</h2>
                        <select name="espacio"  >
                            <option value="">Espacio</option>
                            <option>Terraza</option>
                            <option>Interior</option>
                        </select>
                        <select name="comensales" >
                            <option value="1" >Numero de Comensales</option>
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
                            <input name="fecha" type="date" min="2021-08-06" required />
                            <label className="hora">Hora</label>
                            <input name="hora" type="time" min="13:00" max="23:00" required />
                        </div>
                        <div className="permisos">
                            <div>
                                <input type="checkbox" id="permiso" name="promociones" />
                                <input type="checkbox" id="permisos" name="cookie" required />
                            </div>
                            <div>
                                <label htmlFor="permiso">Acepto recibir noticias y promociones del restaurante</label>
                                <label htmlFor="permisos">He leído las Políticas de empresa y acepto las condiciones </label>
                            </div>
                        </div>
                        <h2>SOLICITUDES</h2>
                        <textarea name="solicitudes" id="solicitudes" cols="47.8" rows="5"></textarea>
                        <button type="submit">RESERVAR</button></div>

                </form>

            </div>
            <style jsx>{`
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
                padding: 0 60px;
                margin-top:20px;
                align-items:center;
            }
            .permisos label{
                font-size:12px;
                color: rgb(167, 167, 167); 
                margin-bottom: 0;  
            }
            button{
                text-align: center;
                margin:25px auto;
                padding: 2px 60px;
                background-color:white;
                border: solid 1px rgb(90, 90, 90);
            }
       
            @media(min-width:750px){
                .formulario{
                    margin: 0 auto;
                    max-width:900px;
                    display:grid;
                    grid-template-columns: repeat(2, 1fr);
                }
                .formulario h2{
                    margin-left:38px;
                    text-align:left;
                    width:85%;
                }
                .comensales{
                    margin-top:80px;
                }
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
                .permisos{
                    padding: 0 31px;
                    margin-top:20px;
                    align-items:center;
            }
                `}
            </style>

        </Container>
    )
}

/*export async function getServerSideProps(){
    const res = await fetch('https://api.github.com/users/fazttech')
    const data = await res.json();
    console.log(data)
    return {
        props: {

        }
    }
}*/
/* async function handleOnSubmit(e){
      e.preventDefault();
      const formdata = {} 
      Array.from(e.currentTarget.elements).forEach(field => {
          if (!field.name) return;
          formdata[field.name] = field.value;

      });
      await fetch('http://localhost:4000/api/reservas/createreservas', {
          method: 'post',
          body: JSON.stringify({
              local:"terraza"
          })
      })    
      console.log(formdata);     
  }*/
export default reservas;