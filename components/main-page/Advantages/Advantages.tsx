import React from "react";
import st from "./Advantages.module.scss";
import img01 from "../../../public/advantages/01.jpg";
import Image from "next/image";

const Advantages: React.FC = () => {
    return (
        <div className="advantages">
            <div className="advantages__container">
                <div className={st.root}>
                    <div className={st.items}>
                        <div className={st.item}>
                            <div className={st.title}>1.2M+</div>
                            <div className={st.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim.
                            </div>
                        </div>
                        <div className={st.item}>
                            <div className={st.title}>3.4B</div>
                            <div className={st.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim.
                            </div>
                        </div>
                        <div className={st.item}>
                            <div className={st.title}>98%</div>
                            <div className={st.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim.
                            </div>
                        </div>
                        <div className={st.item}>
                            <div className={st.title}>10+</div>
                            <div className={st.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim.
                            </div>
                        </div>
                    </div>
                    <div className={st.image}>
                        <Image src={img01} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
