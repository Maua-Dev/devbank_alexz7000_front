import "./styles.css";
import search from "@assets/search.png";
import pencil from "@assets/pencil.png";
import { Link } from "react-router-dom";

interface SearchBarProps {
    loupeIcon: boolean;
}

export default function SearchBar({ loupeIcon }: SearchBarProps) {
    return (
        <div className={"position-relative d-inline-block"}>
            {loupeIcon ? (
                <>
                    <input
                        readOnly={true}
                        className={
                            "CampoTexto rounded-3 text-center text-white"
                        }
                        placeholder={
                            "https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws"
                        }
                    />

                    <img
                        className={"IconeLupa"}
                        src={search as string}
                        alt={"ícone de lupa"}
                    />
                </>
            ) : (
                <Link style={{ textDecoration: "none" }} to={"/"} role="button">
                    <input
                        readOnly={true}
                        className={
                            "CampoTexto rounded-3 text-center text-white"
                        }
                        placeholder={
                            "https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws"
                        }
                        style={{ cursor: "pointer" }}
                    />
                    <img
                        className={"IconeLupa"}
                        src={pencil as string}
                        alt={"ícone de lupa"}
                    />
                </Link>
            )}
        </div>
    );
}
