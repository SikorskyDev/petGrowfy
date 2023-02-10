import React from "react";
import st from "./MyButton.module.scss";

interface props {
    children: string;
    color?: string;
    hoverColor?: string;
}

const MyButton: React.FC<props> = ({ children, color="#3d96f4", hoverColor="#6aaef7" }) => {
    const [isHover, setIsHover] = React.useState(false);

    return (
        <div
            className={st.btn}
            style={{
                backgroundColor: isHover ? hoverColor : color,
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {children}
        </div>
    );
};

export default MyButton;
