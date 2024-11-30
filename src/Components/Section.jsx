import React from 'react'
import "./Section.css"
import sec1 from "./img/sec1.webp"
import sec2 from "./img/sec2.png"
import sec3 from "./img/sec3.png"
import sec4 from "./img/sec4.webp"
import sec5 from "./img/sec5.png"
import sec6 from "./img/sec6.png"

const blocks = [
  {nome:"HTML",img:sec1},
  {nome:"CSS",img:sec2},
  {nome:"JS",img:sec3},
  {nome:"React",img:sec4},
  {nome:"PHP",img:sec5},
  {nome:"SQL",img:sec6}
]

function Section({ theme }) {
  return (
    <section>
      <h1>Técnologias usada</h1>
      <div className="blocos">
        <div className="grid-container">
          {blocks.map((block, index) => (
            <div key={index} className={`grid-item ${theme ? "light" : ""}`}>
              <img src={block.img} alt={block.nome} className="grid-image" />
              <p>{block.nome}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Section
