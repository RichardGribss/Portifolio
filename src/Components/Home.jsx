import './Home.css'
import { useState } from 'react';
import copy from 'copy-text-to-clipboard';


function Home() {
  const [anm,setAnm] = useState(false)

  const [cop,setCop] = useState({display:"none"})

  const copiar = () => {
    copy('richardgribsdev@gmail.com')
    setAnm(true)
    setCop({display:"block"})
    setTimeout(() => {
      setAnm(false)
      setCop({display:"none"})
    }, 2000);
  }

  return (
    <div className='inicio '>
        
      <aside>
      <h1 className="text">Olá, me chamo Richard</h1>
      <p>Sou Desenvolvedor Full Stack em aplicações Web, crio sites e sistemas personalizados.</p>
      <p>Vamos trazer suas ideias à vida! Entre em contato.</p>
     
      <div className="copiado" style={cop}>Copiado</div>
      <button className={`copiar ${anm ? 'animacao' : ''}`}  onClick={copiar}>
        <img src="https://cdn-icons-png.flaticon.com/512/84/84185.png" alt="" width={20} />
        <h3>richardgribsdev@gmail.com</h3>
        <div className="vrol"></div>
      </button>
      <div className="conexoes">
       <a href='https://github.com/RichardGribss' target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" width={35} /></a>
        <a href='https://www.linkedin.com/in/richard-prochera-gribner-b873b2256' target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="linkedin" width={35} /></a>
        <a href="https://wa.me/5541920011389" target="_blank"><img src="https://img.icons8.com/?size=160&id=7wYUnaFDlYka&format=png" alt="whatsapp" width={35} /></a>

      </div>
      </aside>
      
    </div>
  )
}

export default Home
