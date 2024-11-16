import React from 'react'
import "./Section.css"
const blocks = [
  {nome:"HTML",img:"https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256"},
  {nome:"CSS",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png"},
  {nome:"JS",img:"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"},
  {nome:"React",img:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"},
  {nome:"PHP",img:"https://static-00.iconduck.com/assets.00/php-icon-256x256-oq5bc0bt.png"},
  {nome:"SQL",img:"https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png"}
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
