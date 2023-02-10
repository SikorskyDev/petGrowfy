import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import st from "./Header.module.scss";
import MyButton from "../MyButton/MyButton";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__container">
                <div className={st.root}>
                    <Link href="/" className={st.logo}>
                        <Image
                            src="/logo/Group.svg"
                            alt="logo"
                            width={136}
                            height={32}
                        />
                    </Link>
                    <nav className={st.menu}>
                        {/* st.menuBody - це коробка яка буде закриватись і відкриватись при роботі меню-бургер */}
                        <div className={!open ? st.menuBody : st.menuBodyOpen}>
                            <ul className={st.list}>
                                <li className={st.item}>
                                    <Link href={"#"} className={st.itemLink}>
                                        Home
                                    </Link>
                                </li>
                                <li className={st.item}>
                                    <Link href={"#"} className={st.itemLink}>
                                        About
                                    </Link>
                                </li>
                                <li className={st.item}>
                                    <Link href={"#"} className={st.itemLink}>
                                        Pages
                                    </Link>
                                </li>
                                <li className={st.item}>
                                    <Link href={"#"} className={st.itemLink}>
                                        Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Link href={"#"} className={st.cart}>
                        <span className={st.cart__text}>Cart</span>
                        <span className={st.cart__quantuty}>0</span>
                    </Link>
                    <Link href={"#"} className={st.button}>
                        <MyButton>Get started</MyButton>
                    </Link>
                    <button
                        className={st.iconMenu}
                        type="button"
                        onClick={() => setOpen(!open)}
                    >
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
