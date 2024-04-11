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
                        className={
                            "CampoTexto rounded-3 text-center text-white"
                        }
                        placeholder={"Digite aqui URL da sua API..."}
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
                        className={
                            "CampoTexto rounded-3 text-center text-white"
                        }
                        placeholder={
                            "Aqui deverá aparecer a URL da API do usuário"
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
