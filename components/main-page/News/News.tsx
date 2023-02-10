import React from "react";
import MyButton from "../../MyButton/MyButton";
import MyLable from "../../MyLable/MyLable";
import st from "./News.module.scss";
import Image from "next/image";
import img1 from "../../../public/news/1.jpg";
import img2 from "../../../public/news/2.jpg";
import img3 from "../../../public/news/3.jpg";
import Link from "next/link";

const News: React.FC = () => {
    return (
        <div className="news">
            <div className="news__container">
                <div className={st.root}>
                    <div className={st.content}>
                        <div /*className={st.lable}*/>
                            <MyLable>Blog</MyLable>
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
                                <MyButton>All Posts</MyButton>
                            </div>
                        </div>
                    </div>
                    <div className={st.cards}>
                        <div className={st.item}>
                            <div className={st.image}>
                                <Image src={img1} alt="img" />
                            </div>
                            <div className={st.content}>
                                <div className={st.date}>August 28, 2022</div>
                                <div className={st.title}>
                                    How to Use Social Proof in Marketing
                                </div>
                                <div className={st.text}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit lobortis arcu enim urna
                                    adipiscing praesent velit viverra sit semper
                                    lorem.
                                </div>
                                <div className={st.readNow}>
                                    <Link href={"#"}>Read now</Link>
                                </div>
                            </div>
                        </div>
                        <div className={st.item}>
                            <div className={st.image}>
                                <Image src={img2} alt="img" />
                            </div>
                            <div className={st.content}>
                                <div className={st.date}>August 28, 2022</div>
                                <div className={st.title}>
                                    Make a great first impression with these
                                    titles
                                </div>
                                <div className={st.text}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit lobortis arcu enim urna
                                    adipiscing praesent velit viverra sit semper
                                    lorem.
                                </div>
                                <div className={st.readNow}>
                                    <Link href={"#"}>Read now</Link>
                                </div>
                            </div>
                        </div>
                        <div className={st.item}>
                            <div className={st.image}>
                                <Image src={img3} alt="img" />
                            </div>
                            <div className={st.content}>
                                <div className={st.date}>August 28, 2022</div>
                                <div className={st.title}>
                                    How to Grab Your Reader’s Attention
                                </div>
                                <div className={st.text}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit lobortis arcu enim urna
                                    adipiscing praesent velit viverra sit semper
                                    lorem.
                                </div>
                                <div className={st.readNow}>
                                    <Link href={"#"}>Read now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
