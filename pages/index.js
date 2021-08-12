import React, { useState, useEffect } from 'react';
import Head from "next/head";
import Container from "../components/Container";

const Index = () => {
    return (
        <Container>
            <Head>
                <title>Moa - Bienvenidos</title>
            </Head>
            <div className="main">
                <img src="/Trendy_food_025.jpg" alt="platomoa" />
                <p>Aquí nada es lo que parece. Podemos parecer locos, con sombrero y barba,
                    como antaño, porque nuestra cocina es un inexplicable viaje por lugares que
                    te llevarán a sabores sorprendentes, texturas que creías haber olvidado y
                    experiencias que no querrás olvidar. </p>
                <p>
                    Queremos que nos acompañes en este viaje gastronómico para abrirte los
                    ojos a otra manera de hacer cocina, nuestra loca manera.
                </p>
                <p>
                    Somos como iluminados en un jardín de infancia. Somos investigadores,
                    descubridores, inventores. Creamos sabores, colores, olores y texturas.
                </p>
                <p>Estamos locos por nuestra cocina y por descubrir una sonrisa en tu cara.</p>

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

export default Index;