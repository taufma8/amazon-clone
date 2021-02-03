import React from "react"
import './Header.css';
import { Link } from 'react-router-dom';
import { Search, ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }] = useStateValue()

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }
    console.log(basket)
    
    return(
        <nav className="header">
            <Link to="/login">
                <img 
                    className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon logo"    
                />  
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <Search className="header__searchButton" />
            </div>

            <div className="header__nav">
                <Link className="header__link" to={!user && "/login"}>
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : "Sign In"}</span>
                    </div>
                </Link>

                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link className="header__link" to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasket />
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header