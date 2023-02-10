import Image from "next/image";
import React from "react";
import st from "./Services.module.scss";
import img1 from "../../../public/services/01.svg";
import img2 from "../../../public/services/02.svg";
import img3 from "../../../public/services/03.svg";
import img4 from "../../../public/services/04.svg";
import MyButton from "../../MyButton/MyButton";
import MyLable from "../../MyLable/MyLable";

const Services = () => {
    return (
        <div className="services">
            <div className="services__container">
                <div className={st.root}>
                    <div className={st.content}>
                        <div className={st.lable}>
                            <MyLable>services</MyLable>
                        </div>
                        <div className={st.title}>Services we offer</div>
                        <div className={st.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, suspendisse varius enim in eros elementum
                            tristique. Duis cursus, mi quis viverra ornare, eros
                            dolor.
                        </div>
                        <div /*className={st.btn}*/>
                            <MyButton>All services</MyButton>
                        </div>
                    </div>
                    <div className={st.carts}>
                        <div className={st.column}>
                            <div className={st.item}>
                                <div className={st.lable}>
                                    <Image src={img1} alt="services" />
                                </div>
                                <div className={st.title}>
                                    Social Media Marketing
                                </div>
                                <div className={st.text}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit lobortis arcu enim urna
                                    adipiscing praesent velit.
                                </div>
                            </div>
                            <div className={st.item}>
                                <div className={st.lable}>
                                    <Image src={img2} alt="services" />
                                </div>
                                <div className={st.title}>Email Marketing</div>
                                <div className={st.text}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit lobortis arcu enim urna
                                    adipiscing praesent velit.
                                </div>
                            </div>
                        </div>
                        <div className={st.column}>
                            <div className={st.item}>
                                <div className={st.lable}>
                                    <Image src={img3} alt="services" />
                                </div>
                                <div className={st.title}>Paid Advertising</div>
                                <div className={st.text}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit lobortis arcu enim urna
                                    adipiscing praesent velit.
                                </div>
                            </div>
                            <div className={st.item}>
                                <div className={st.lable}>
                                    <Image src={img4} alt="services" />
                                </div>
                                <div className={st.title}>SEO Optimization</div>
                                <div className={st.text}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit lobortis arcu enim urna
                                    adipiscing praesent velit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
