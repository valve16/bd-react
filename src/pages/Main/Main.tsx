import { Link } from 'react-router-dom'
import  main_img   from '../../images/main_cut.png'
import logo_img from '../../images/secret_logo.png'
import "./Main.css"

const Main = () => {
    return (
      <div className="fullscreen-container">
        {/* <h1>Main</h1> */}
        <img src={main_img} alt="Main" className="fullscreen-image"/>
        <img src={logo_img} alt="Logo" className="logo-image"/>
        <Link to="/login">
          <button type="submit" className="main-btn">Войти</button>
        </Link>
        <div className='text-container'>
          <div className='text'>Театр танца СЕКРЕТ</div>
        </div>
      </div>
    )
  }
  
  export default Main