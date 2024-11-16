import './Home.css'
import { useState } from 'react';
import copy from 'copy-text-to-clipboard';




function Home() {
  const [anm,setAnm] = useState(false)

  const copiar = () => {
    copy('richardgribsdev@gmail.com')
    setAnm(true)
    setTimeout(() => {
      setAnm(false)
    }, 3000);
  }

  return (
    <div className='inicio '>
        
      <aside>
      <h1 className="text">Olá, me chamo Richard</h1>
      <p>Sou Desenvolvedor Full Stack, ofereço Design UX/UI e sistemas <br />Entre em contato.</p>
     

      <button className={`copiar ${anm ? 'animacao' : ''}`}  onClick={copiar}>
     
        <img src="https://cdn-icons-png.flaticon.com/512/84/84185.png" alt="" width={20} />
        <h3>richardgribsdev@gmail.com</h3>
        <div className="vrol"></div>
      </button>
      <div className="conexoes">
       <a href='https://github.com/RichardGribss' target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" width={35} /></a>
        <a href='www.linkedin.com/in/richard-prochera-gribner-b873b2256' target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="linkedin" width={35} /></a>
      </div>
      </aside>
      
    </div>
  )
}

export default Home
