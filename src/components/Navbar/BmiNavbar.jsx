
import { NavLink } from 'react-router-dom'
import catOrange from '../../assets/cat-orange.svg'
import dogOrange from '../../assets/dog-orange.svg'
import './bmi-navbar.css'
export const BmiNavbar = () => {
  return (
    <div className="bmi-navbar">
      <NavLink to={"/"} >
        <img  alt='cat-orange' src={`${catOrange}`} />
      </NavLink>
      <NavLink to={"/dog"} >
        <img  alt='dog-orange' src={dogOrange} />
      </NavLink>
    </div>
  )
}