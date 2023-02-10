import Link from "next/link";
import React from "react";
import st from "./Main.module.scss";
import img1 from "../../../public/main/01.jpg";
import img2 from "../../../public/main/02.jpg";
import img3 from "../../../public/main/03.jpg";
import img4 from "../../../public/main/04.jpg";
import Image from "next/image";
import MyButton from "../../MyButton/MyButton";

const Main: React.FC = () => {

    return (
        <div className="main">
            <div className="main__container">
                <div className={st.root}>
                    <div className={st.content}>
                        <h1 className={st.title}>
                            Marketing solutions that grow your business.
                        </h1>
                        <div className={st.text}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor.
                            </p>
                        </div>
                        <div className={st.actions}>
                            <Link href={"#"} /*className={st.btn}*/>
                                <MyButton>Our services</MyButton>
                            </Link>
                            <Link href={"#"} /*className={st.btn_dark}*/>
                                <MyButton color="rgba(129, 129, 139, 0.2)" hoverColor="rgba(129, 129, 139, 0.4)">Contact us</MyButton>
                            </Link>
                        </div>
                    </div>
                    <div className={st.images}>
                        <div className={st.column}>
                            <div className={st.item + " " + st.item1}>
                                <Image src={img1} alt="img" />
                            </div>
                            <div className={st.item + " " + st.item2}>
                                <Image src={img2} alt="img" />
                            </div>
                        </div>
                        <div className={st.column}>
                            <div className={st.item + " " + st.item3}>
                                <Image src={img3} alt="img" />
                            </div>
                            <div className={st.item + " " + st.item4}>
                                <Image src={img4} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
