import Image from "next/image";
import React from "react";
import MyLable from "../../MyLable/MyLable";
import st from "./WhyUs.module.scss";
import img01 from "../../../public/whyus/01.jpg";
import img02 from "../../../public/whyus/02.jpg";

const WhyUs: React.FC = () => {
    return (
        <div className="whyus">
            <div className="whyus__container">
                <div className={st.root}>
                    <div className={st.images}>
                        <div className={st.item + " " + st.item1}>
                            <Image src={img01} alt="image" />
                        </div>
                        <div className={st.item + " " + st.item2}>
                            <Image src={img02} alt="image" />
                        </div>
                    </div>
                    <div className={st.content}>
                        <div className={st.lable}>
                            <MyLable>why choose us</MyLable>
                        </div>
                        <div className={st.title}>
                            We help great brands scale with content marketing.
                        </div>
                        <div className={st.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, suspendisse varius enim in eros elementum
                            tristique. Duis cursus, mi quis viverra ornare, eros
                            dolor.
                        </div>
                        <div className={st.list}>
                            <ul>
                                <li>This is some text inside of a div.</li>
                                <li>This is some text inside of a div.</li>
                                <li>This is some text inside of a div.</li>
                                <li>This is some text inside of a div.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
