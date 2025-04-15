import logo from '../assets/img/kasa-logo-footer.png' ;
import "../assets/styles/footer.scss"

function Footer () {

    return (
        <div className="footer">
            <div className="container-footer">
            <img src={logo} alt="header-logo" className="logo" />
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>

            </div>

        </div>

    );

} 

export default Footer; 