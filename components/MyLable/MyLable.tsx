import React from "react";
import st from "./MyLable.module.scss";

interface props {
    children: string;
}

function MyLable({ children }: props) {
    return <div className={st.lable}>{children}</div>;
}

export default MyLable;
