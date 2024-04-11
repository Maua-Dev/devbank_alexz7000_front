import { Link } from "react-router-dom";

interface BlueButtonsProps {
    text: string;
    screenName: string;
}

export default function BlueButtons({ text, screenName }: BlueButtonsProps) {
    return (
        <Link
            className={"d-flex justify-content-center"}
            to={screenName}
            role="button"
        >
            <button
                className="rounded-3  border-0 text-white text-wrap text-break"
                type={"button"}
                style={{
                    backgroundColor: "#0073E6",
                    width: "15%",
                    height: "7vh",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    fontSize: "calc(1vw + 0.5em)",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
                }}
            >
                {text}
            </button>
        </Link>
    );
}
