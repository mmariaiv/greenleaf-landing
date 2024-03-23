import React from "react";
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";
import Logo from "@images/Logo_header.svg"
import LogoBurger from "@images/logo_burger.svg"
import Navigation from "@components/navigation";
import {useResize} from "@hooks/useResize.tsx";

const Header: React.FC = () => {
    const [burgerCLicked, isBurgerClicked] = React.useState<boolean>(false);
    const {width} = useResize();

    function handleBurgerCLick() {
        isBurgerClicked(!burgerCLicked);
    }
    return (
        <header className={`header ${burgerCLicked && "header_burger"}`}>
            <HashLink to={"/#"}><img className={`logo ${burgerCLicked && "logo_burger"}`} src={burgerCLicked ? LogoBurger : Logo} alt={"Логотип компании"}/></HashLink>
            {width < 678 ? (
                <>
                    {!burgerCLicked && (<div className={"burger-menu__btn"} onClick={handleBurgerCLick}></div>)}
                    {burgerCLicked && (<div className={"burger-menu__btn burger-menu__btn_close"} onClick={handleBurgerCLick}></div>)}
                </>
            ) : (
                <div className={"header__links-container"}>
                    <Navigation />
                    <Link to={"tel:+79115694343"} className="text_s header__phone link ">+7 (911) 569-43-43</Link>
                </div>
            )}

            {burgerCLicked && (
                <div className={"burger-menu"}>
                    <div className={"burger-menu__links-container"}>
                        <Navigation />
                        <Link to={"tel:+79115694343"} className="text_s header__phone link header__phone_burger">+7 (911) 569-43-43</Link>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header;