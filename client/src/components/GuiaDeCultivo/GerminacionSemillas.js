import React from "react";
import "../../styles/GuiaCultivo/GerminacionSemillas.css";

export default function GerminacionSemillas() {
  return (
    <section className="germinacion-section">
      <h2>Germinación de Semillas</h2>
      <p className="intro">
        La germinación es el primer paso para obtener plantas saludables. Sigue
        estos pasos:
      </p>
      <ol className="steps">
        <li>
          <strong>Seleccionar semillas de calidad:</strong> Asegúrate de que las
          semillas estén frescas y firmes.
        </li>
        <li>
          <strong>Método del papel húmedo:</strong> Coloca las semillas entre
          dos toallas de papel húmedas y mantenlas en un lugar oscuro y tibio.
        </li>
        <li>
          <strong>Vigilancia diaria:</strong> Revisa la humedad del papel y
          evita que se seque.
        </li>
        <li>
          <strong>Trasplante al sustrato:</strong> Cuando la raíz mida 1–2 cm,
          trasplanta con cuidado a macetas pequeñas con sustrato ligero.
        </li>
        <li>
          <strong>Condiciones de luz y temperatura:</strong> Proporciona luz
          suave y mantén la temperatura entre 20–25°C.
        </li>
      </ol>
      <div className="image-container">
        <img src="/images/germinacion.jpg" alt="Germinación de semillas" />
      </div>
      <p className="tip">
        <em>Tip:</em> Un poco de peróxido de hidrógeno en el agua puede ayudar a
        prevenir bacterias durante la germinación.
      </p>
    </section>
  );
}
