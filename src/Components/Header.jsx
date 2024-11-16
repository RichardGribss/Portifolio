import './Header.css'
import logo from './img/shuriken.png'

function Header({theme, trocaTema}) {


  return (
    <div className={`header ${theme ? 'active' : ''}`}>
        <div className="logo">
          
            <img src={logo} width={70} className='logo-img'/>
            <h2>Meu Portifólio</h2>
            
        
              <div className={`botao-tema ${theme ? 'active' : ''}`} onClick={trocaTema} >
                <div className="bola" ></div>
              </div>
         
        </div>
        
        
    </div>
  )
}

export default Header
