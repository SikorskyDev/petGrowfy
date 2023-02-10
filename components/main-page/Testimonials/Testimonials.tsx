import React from "react";
import MyButton from "../../MyButton/MyButton";
import MyLable from "../../MyLable/MyLable";
import st from "./Testimonials.module.scss";
import img1 from "../../../public/testimonials/01.jpg";
import img2 from "../../../public/testimonials/02.jpg";
import img3 from "../../../public/testimonials/03.jpg";
import stars from "../../../public/testimonials/stars.svg";
import Image from "next/image";

const Testimonials: React.FC = () => {
    return (
        <div className="testimonials">
            <div className="testimonials__container">
                <div className={st.root}>
                    <div className={st.content}>
                        <div /*className={st.lable}*/>
                            <MyLable>testimonials</MyLable>
                        </div>
                        <div className={st.title}>See what our clients say</div>
                        <div className={st.textContainer}>
                            <div className={st.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero.
                            </div>
                            <div className={st.btn}>
                                <MyButton>Get in touch</MyButton>
                            </div>
                        </div>
                    </div>
                    <div className={st.cards}>
                        <div className={st.item}>
                            <div className={st.user}>
                                <div className={st.avatar}>
                                    <Image src={img1} alt="avatar" />
                                </div>
                                <div className={st.text}>
                                    <div className={st.name}>John Doe</div>
                                    <div className={st.company}>
                                        Company Name
                                    </div>
                                </div>
                            </div>
                            <div className={st.title}>
                                I recommend this agency
                            </div>
                            <div className={st.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero.
                            </div>
                            <div /*className={st.rating}*/>
                                <Image src={stars} alt="rating" />
                            </div>
                        </div>
                        <div className={st.item}>
                            <div className={st.user}>
                                <div className={st.avatar}>
                                    <Image src={img2} alt="avatar" />
                                </div>
                                <div className={st.text}>
                                    <div className={st.name}>Alice Smith</div>
                                    <div className={st.company}>
                                        Company Name
                                    </div>
                                </div>
                            </div>
                            <div className={st.title}>
                                The support is awesome
                            </div>
                            <div className={st.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero.
                            </div>
                            <div /*className={st.rating}*/>
                                <Image src={stars} alt="rating" />
                            </div>
                        </div>
                        <div className={st.item}>
                            <div className={st.user}>
                                <div className={st.avatar}>
                                    <Image src={img3} alt="avatar" />
                                </div>
                                <div className={st.text}>
                                    <div className={st.name}>Sophia Miller</div>
                                    <div className={st.company}>
                                        Company Name
                                    </div>
                                </div>
                            </div>
                            <div className={st.title}>
                                “A game changer for us”
                            </div>
                            <div className={st.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero.
                            </div>
                            <div /*className={st.rating}*/>
                                <Image src={stars} alt="rating" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
