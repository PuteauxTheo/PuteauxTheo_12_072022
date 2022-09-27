import iconCalories from '../assets/iconCalories.svg'
import iconProteines from '../assets/iconProteines.svg'
import iconGlucides from '../assets/iconGlucides.svg'
import iconLipides from '../assets/iconLipides.svg'

function PersonnalStat( {dataPersonnal} ) {


    return(
        <div className='content-personnalStat'>
            <div className='content-personnalStat-card'>
                <div className='content-personnalStat-card-icon calories'>
                    <img src={iconCalories} alt=""/>                    
                </div>
                <div className='content-personnalStat-card-text'>
                    <p className='content-personnalStat-card-text-unit'>{dataPersonnal.calorieCount}kCal</p>
                    <p className='content-personnalStat-card-text-name'>Calories</p>
                </div>
            </div>
            <div className='content-personnalStat-card'>
                <div className='content-personnalStat-card-icon proteines'>
                    <img src={iconProteines} alt=""/>                    
                </div>
                <div className='content-personnalStat-card-text'>
                    <p className='content-personnalStat-card-text-unit'>{dataPersonnal.proteinCount}g</p>
                    <p className='content-personnalStat-card-text-name'>Proteines</p>
                </div>
            </div>
            <div className='content-personnalStat-card'>
                <div className='content-personnalStat-card-icon glucides'>
                    <img src={iconGlucides} alt=""/>                    
                </div>
                <div className='content-personnalStat-card-text'>
                    <p className='content-personnalStat-card-text-unit'>{dataPersonnal.carbohydrateCount}g</p>
                    <p className='content-personnalStat-card-text-name'>Glucides</p>
                </div>
            </div>
            <div className='content-personnalStat-card'>
                <div className='content-personnalStat-card-icon lipides'>
                    <img src={iconLipides} alt=""/>                    
                </div>
                <div className='content-personnalStat-card-text'>
                    <p className='content-personnalStat-card-text-unit'>{dataPersonnal.lipidCount}g</p>
                    <p className='content-personnalStat-card-text-name'>Lipides</p>
                </div>
            </div>
        </div>
    )
}

export default PersonnalStat