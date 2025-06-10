import React from 'react';
import '../../styles/GuiaCultivo/PreparacionSuelo.css';
export default function PreparacionSuelo() {
    return(
   <section className="ground-section">
      <h2>Preparacion del Suelo</h2>
     <p className="intro">
                La preparación adecuada del suelo es esencial para garantizar un crecimiento saludable de las plantas. Sigue estos pasos para optimizar el suelo antes de plantar:
            </p>
            <ol className="steps">
                <li>
                    <strong>Evaluación del suelo:</strong> Analiza el pH y la composición del suelo para asegurarte de que sea adecuado para el cultivo. La mayoría de las plantas prefieren un pH entre 6 y 7.
                </li>
                <li>
                    <strong>Eliminación de malezas:</strong> Retira todas las malezas y raíces viejas para evitar la competencia por nutrientes.
                </li>
                <li>
                    <strong>Aireación del suelo:</strong> Usa una pala o un rastrillo para aflojar el suelo y mejorar el drenaje y la oxigenación.
                </li>
                <li>
                    <strong>Enriquecimiento con materia orgánica:</strong> Agrega compost, estiércol bien descompuesto o humus de lombriz para mejorar la fertilidad del suelo.
                </li>
                <li>
                    <strong>Control de plagas:</strong> Si es necesario, trata el suelo con métodos orgánicos para prevenir plagas y enfermedades.
                </li>
                <li>
                    <strong>Riego inicial:</strong> Humedece ligeramente el suelo antes de plantar para facilitar la germinación y el establecimiento de las raíces.
                </li>
            </ol>
            <div className="image-container">
                <img src="/images/preparacion-suelo.jpg" alt="Preparación del suelo" />
            </div>
            <p className="tip">
                <em>Tip:</em> Si el suelo es muy arcilloso, mezcla arena para mejorar el drenaje. Si es muy arenoso, agrega materia orgánica para retener más humedad.
            </p>
    </section>
    );
}