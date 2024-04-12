import { Link } from "react-router-dom";
import leftArrow from "@assets/left-arrow.png";
import "./styles.css";

interface TitleProps {
    title: string;
}

export default function Title({ title }: TitleProps) {
    return (
        <div
            className={"d-flex custom-div justify-content-start mt-5"}
            style={{ marginLeft: "6%" }}
        >
            <Link
                style={{
                    textDecoration: "none",
                    width: "55px",
                    height: "55px"
                }}
                to={"/MainMenu"}
                type={"button"}
            >
                <img
                    className={"img-fluid"}
                    src={leftArrow as string}
                    alt={"Back Button"}
                />
            </Link>
            <h1 className={"text-center w-100 mb-5 shadow-h1"}>{title}</h1>
        </div>
    );
}
