import logoSportSee from '../assets/logoSportSee.png'

function Header() {
    return (
        <header>
            <nav className='nav-content'>
                <img className='nav-content-logo' src={logoSportSee} alt=""/>
                <ul className='nav-content-list'>
                    <li>Acceuil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header