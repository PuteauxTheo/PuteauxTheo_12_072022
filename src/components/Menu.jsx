import iconMeditation from '../assets/iconMeditation.svg'
import iconSwimming from '../assets/iconSwimming.svg'
import iconBike from '../assets/iconBike.svg'
import iconMuscu from '../assets/iconMuscu.svg'



function Menu() {
    return(
        <div className='menu-content'>
            <nav className='menu'>
                <div className='menu-icon'>
                    <img src={iconMeditation} alt=""/>
                </div>
                <div className='menu-icon'>
                    <img src={iconSwimming} alt=""/>
                </div>
                <div className='menu-icon'> 
                    <img src={iconBike} alt=""/>
                </div>
                <div className='menu-icon'>
                    <img src={iconMuscu} alt=""/>
                </div>
            </nav>
            <p className='menu-content-right'>Copiryght, SportSee 2020</p>
        </div>
    )
}

export default Menu