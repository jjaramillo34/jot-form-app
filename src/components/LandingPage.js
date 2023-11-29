import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [formLoaded, setFormLoaded] = useState(false);

  return (
    <div className="landing-page">
      <div className="menu">
        {formLoaded ? (
          <div className="menu-item">
            <Link to="/plan">Iniciar</Link>
          </div>
        ) : (
          <div className="menu-item">
            <Link to="/plan">Iniciar</Link>
          </div>
        )}
      </div>
      <div className="header">
        <img src="https://datanaly.st/hero_image.jpg" alt="Header" />
      </div>
      <div className="content">
        <br />
        <h1>¡Tu voz importa!</h1>
        <br />
        <div className="paragraph">
          <p>
            <strong>
              En Puerto Rico, estamos unidos por un objetivo común:
            </strong>{" "}
            construir un futuro más seguro y próspero para todos. Queremos
            escuchar tus ideas y propuestas para lograrlo y utilizarlos en la
            creación del Plan Integral de Reconstrucción Social y Prevención de
            la Violencia{" "}
            <a
              href="https://assets-global.website-files.com/6078c37d59795548262e3647/6500d5b3034536137c8fdfc5_OE-2023-023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FF0000" }}
            >
              (Orden Ejecutiva 2023-023).
            </a>
          </p>
        </div>
        <div className="paragraph">
          <p>
            La Organización Mundial de la Salud ("WHO", por sus siglas en
            inglés) define violencia como el uso deliberado de la fuerza física
            o el poder, ya sea en grado de amenaza o efectivo, contra uno mismo,
            una persona, o un grupo o comunidad, que cause o tenga muchas
            probabilidades de causar lesiones, muerte, daños psicológicos,
            trastornos del desarrollo o privaciones. Esa definición categoriza
            la violencia en tres: violencia dirigida contra uno mismo, violencia
            interpersonal y violencia colectiva. También la clasifica a base de
            la naturaleza del acto, ya sea físico, sexual o psíquico, o basado
            en las privaciones o en el abandono. Así pues, la violencia
            comprende más que los actos violentos.
          </p>
        </div>
        <div className="paragraph">
          <p>
            Esta convocatoria de ideas es tu oportunidad de participar
            activamente en la creación de soluciones significativas. Tu opinión
            contribuirá directamente a la toma de decisiones que darán forma a
            políticas y acciones para prevenir la violencia y promover la
            reconstrucción social.
          </p>
        </div>
        <div className="paragraph">
          <p>
            Cada respuesta cuenta, y cada idea es valiosa. Juntos, podemos
            construir un Puerto Rico más fuerte y seguro. Completa la encuesta y
            forma parte de un cambio positivo para nuestra comunidad y nuestra
            Isla.
          </p>
        </div>

        <h2>
          ¡Tu participación es la clave para construir un futuro mejor en Puerto
          Rico!
        </h2>
        <div className="jot-form">
          <Link to="/plan">
            <button className="cta-button">Comenzar </button>
          </Link>
        </div>
        <br />
        <div className="img">
          <img
            src="https://datanaly.st/Sello_Gobierno_PR.png"
            alt="gobierno-de-puertorico"
            style={{
              height: "140px",
              "padding-top": "15px",
            }}
          />
        </div>
        <br />
      </div>
      <div
        className="footer"
        style={{
          "background-color": "#95B7C6",
          "text-align": "center",
          height: "25px",
          position: "fixed",
          width: "100%",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      ></div>
    </div>
  );
};

export default LandingPage;
