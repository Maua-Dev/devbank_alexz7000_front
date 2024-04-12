import "./styles.css";
import { Link } from "react-router-dom";

interface HeaderProps {
    boxText: boolean;
}

export default function Header({ boxText }: HeaderProps) {
    const dadosConta = [
        { label: "Nome", value: "Alessandro Lima" },
        { label: "Agência", value: "0000" },
        { label: "Conta", value: "00000-0" },
        { label: "Saldo", value: "1000,00" }
    ];
    return (
        <>
            <div
                className="container-fluid position-relative d-flex align-items-center"
                style={{
                    backgroundColor: "rgba(47, 72, 203, 0.33)",
                    minHeight: "10vw"
                }}
            >
                <Link style={{ textDecoration: "none" }} to={"/"} role="button">
                    <img
                        className="img-fluid img-animation ms-3"
                        src="/bank.png"
                        style={{ maxWidth: "64px", maxHeight: "64px" }}
                        alt="DevBank_logo"
                    />
                </Link>
                <div className={"flex-column w-100"}>
                    <div className="d-flex flex-column header-container">
                        <h1
                            className={
                                "text-center shadow-h1 position-relative mb-1"
                            }
                            style={{ fontSize: "8vw" }}
                        >
                            DevBank
                        </h1>
                        <p
                            className={"position-fixed pt-2"}
                            style={{
                                fontSize: "12px",
                                left: "64.25vw",
                                top: "7.25vw"
                            }}
                        >
                            by Alessandro Lima
                        </p>
                    </div>
                </div>
            </div>
            {boxText && (
                <div
                    className={
                        "container-fluid position-fixed rounded-3 z-1 pt-1"
                    }
                    style={{
                        backgroundColor: "#D7EFF2",
                        height: "7vw",
                        width: "16vw",
                        outline: "2px solid #39CBC2",
                        left: "80vw",
                        top: "2vw"
                    }}
                >
                    {dadosConta.map((info, index) => (
                        <p
                            key={index}
                            className="text-start text-black"
                            style={{ fontSize: "1vw" }}
                        >
                            {info.label}: {info.value}
                        </p>
                    ))}
                </div>
            )}
        </>
    );
}
