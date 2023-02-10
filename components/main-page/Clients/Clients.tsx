import React from "react";
import st from "./Clients.module.scss";
import img01 from "../../../public/clients/01.svg";
import img02 from "../../../public/clients/02.svg";
import img03 from "../../../public/clients/03.svg";
import img04 from "../../../public/clients/04.svg";
import img05 from "../../../public/clients/05.svg";
import Image from "next/image";

const Clients: React.FC = () => {
    return (
        <div className="clients">
            <div className="clients__container">
                <div className={st.root}>
                    <h2 className={st.title}>TRUSTED BY startups and large enterprises</h2>
                    <div className={st.items}>
                        <div className={st.item}>
                            <Image src={img01} alt="clients" />
                        </div>
                        <div className={st.item}>
                            <Image src={img02} alt="clients" />
                        </div>
                        <div className={st.item}>
                            <Image src={img03} alt="clients" />
                        </div>
                        <div className={st.item}>
                            <Image src={img04} alt="clients" />
                        </div>
                        <div className={st.item}>
                            <Image src={img05} alt="clients" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
