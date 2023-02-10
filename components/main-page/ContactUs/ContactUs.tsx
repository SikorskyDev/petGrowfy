import React from "react";
import MyButton from "../../MyButton/MyButton";
import st from "./ContactUs.module.scss";

const ContactUs: React.FC = () => {
    return (
        <div className="contactUs">
            <div className="contactUs__container">
                <div className={st.root}>
                    <div className={st.content}>
                        <div className={st.title}>
                            Ready to start scaling your business now?
                        </div>
                        <div className={st.text}>
                            Lorem ipsum dolor sit am consectetur adipiscing
                            varius enim in eros.
                        </div>
                    </div>
                    <div className={st.btns}>
                        <MyButton>Our services</MyButton>
                        <MyButton
                            color="rgba(129, 129, 139, 0.2)"
                            hoverColor="rgba(129, 129, 139, 0.4)"
                        >
                            Contact us
                        </MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
