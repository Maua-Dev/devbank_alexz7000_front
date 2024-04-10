import "./styles.css";
import search from "@assets/search.png";
import pencil from "@assets/pencil.png";

interface SearchBarProps {
    loupeIcon: boolean;
}

export default function SearchBar({ loupeIcon }: SearchBarProps) {
    return (
        <div className={"position-relative d-inline-block"}>
            <input
                className={"CampoTexto rounded-3 text-center"}
                placeholder={"Digite a URL da sua API aqui..."}
            />
            <img
                className={"IconeLupa"}
                src={loupeIcon ? (search as string) : (pencil as string)}
                alt={"ícone de lupa"}
            />
        </div>
    );
}
