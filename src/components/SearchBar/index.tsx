import "./styles.css";
import search from "@assets/search.png";
import pencil from "@assets/pencil.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api, useApiResult } from "../../services/queryClient.ts";
import BlueButtons from "@components/BlueButtons";

interface SearchBarProps {
    loupeIcon: boolean;
}

export default function SearchBar({ loupeIcon }: SearchBarProps) {
    const [url, setUrl] = useState("");
    const [screenName, setScreenName] = useState("");

    /* eslint-disable */
    function handleUrl(event: any) {
        setUrl(event?.target.value);
    }

    function verificarURL() {
        if (url === "") {
            alert("Este campo está vazio, por favor insira uma URL válida");
        } else if (url.startsWith("https://")) {
            api(url).then(() => setScreenName("/MainMenu"));
        } else {
            alert("URL inválida, por favor insira uma URL válida");
        }
    }

    /* eslint-enable */
    return (
        <div className={"position-relative d-inline-block"}>
            {loupeIcon ? (
                <>
                    <input
                        className={
                            "CampoTexto rounded-3 text-center text-white"
                        }
                        onChange={handleUrl}
                        value={url}
                        placeholder={"Digite aqui a URL da sua API..."}
                    />

                    <img
                        className={"IconeLupa"}
                        src={search as string}
                        alt={"ícone de lupa"}
                    />
                    <BlueButtons
                        onClick={() => verificarURL()}
                        className={"mt-5 aumentar-botao"}
                        text={"Entrar"}
                        screenName={screenName}
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
                            `${useApiResult()}` // eslint-disable-line
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
