import { Link } from "react-router-dom";
import "./styles.css";

interface BlueButtonsProps {
    text: string;
    screenName: string;
}

export default function BlueButtons({ text, screenName }: BlueButtonsProps) {
    return (
        <div className={"d-flex justify-content-center"}>
            <Link
                style={{ textDecoration: "none", width: "15%" }}
                to={screenName}
                role="button"
            >
                <button
                    className="rounded-3 button-animation border-0 text-white text-wrap text-break"
                    type={"button"}
                >
                    {text}
                </button>
            </Link>
        </div>
    );
}
