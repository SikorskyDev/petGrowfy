import React from "react";
import st from "./Footer.module.scss";
import logo from "../../public/logo/Group.svg";
import icons from "../../public/footer/icons.svg";
import Image from "next/image";
import MyButton from "../MyButton/MyButton";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <div className={st.root}>
                        <div className={st.desc}>
                            <div className={st.desc__logo}>
                                <Image src={logo} alt="logo" />
                            </div>
                            <div className={st.desc__text}>
                                Growfy is a template highly suitable for modern
                                marketing agencies, digital studios, startups
                                and businesses. The design is made in the dark
                                style, which makes the site memorable and you
                                can easily adapt it to your brand.
                            </div>
                            <div /*className={st.desc__icons}*/>
                                <Image src={icons} alt="icons" />
                            </div>
                        </div>
                        <div className={st.pages}>
                            <div className={st.pages__title}>Pages</div>
                            <div className={st.pages__allPages}>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Packages</li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className={st.utilityPages}>
                            <div className={st.utilityPages__title}>
                                Utility pages
                            </div>
                            <div className={st.utilityPages__list}>
                                <ul>
                                    <li>Instructions</li>
                                    <li>Style guide</li>
                                    <li>Licenses</li>
                                    <li>Changelog</li>
                                    <li>404 Not found</li>
                                    <li>Password protected</li>
                                </ul>
                            </div>
                        </div>
                        <div className={st.subscribe}>
                            <div className={st.subscribe__title}>
                                Subscribe to our newsletter
                            </div>
                            <div className={st.subscribe__text}>
                                Lorem ipsum dolor sit am consectetur adipiscing
                            </div>
                            <div className={st.subscribe__btns}>
                                <MyButton
                                    color="rgba(129, 129, 139, 0.2)"
                                    hoverColor="rgba(129, 129, 139, 0.4)"
                                >
                                    Enter your email
                                </MyButton>
                                <MyButton>Subscribe</MyButton>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="year">© 2023</div>
        </>
    );
};

export default Footer;
