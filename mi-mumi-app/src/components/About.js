import React from 'react';
import '../App.css';
import logo1 from "../img/logo1.png";


function About() {
    return (
        <div className="" >

            <div class="About">

                <p ><b>En <em><img id="logoAbout" src={logo1} alt="logo" />Mumi</em> , (Mujeres Unidas, Mujeres Invencibles) es una propuesta innovadora desarrollada por
                mujeres latinoamericanas que buscan orientar a víctimas de todo tipo de violencia de
                género a identificar la problemática que sufren y poder actuar al respecto.</b>
                </p>



                <p><b>  Con su práctica funcionalidad, <em><img id="logoAbout" src={logo1} alt="logo" />Mumi</em> , a través de su interfaz de tipo quiz,
                     permite a la usuaria reconocer si
                    es víctima de violencia de género, en qué índice de gravedad se encuentra dicha violencia y
                    de esa manera asesorarla para que logre pedir ayuda.</b></p>


                <p><b>
                    Creemos que <em><img id="logoAbout" src={logo1} alt="logo" />Mumi</em>  puede ser de
                    gran ayuda para toda mujer vulnerable en situación de violencia de género y evitar que el índice de femicidios
                continúe en ascenso en nuestra región.</b></p>
            </div>
        </div>
    );

}

export default About;