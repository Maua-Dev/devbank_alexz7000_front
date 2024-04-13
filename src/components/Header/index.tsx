import "./styles.css";
import { Link } from "react-router-dom";
import useAPI from "../../hooks/useAPI.ts";
import Loading from "@components/Loading";

interface HeaderProps {
    boxText: boolean;
}

type UserData = {
    name: string;
    agency: string;
    account: string;
    current_balance: number;
};

export default function Header({ boxText }: HeaderProps) {
    const { data, isFetching } = useAPI<UserData[]>("");
    const dataArray: UserData[] = data ? [data] : [];

    return (
        <>
            {isFetching && <Loading />}
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
                    {dataArray?.map((info, index) => (
                        <div key={"diva " + index}>
                            <p
                                key={"dataArray " + index}
                                className="text-start text-black"
                                style={{ fontSize: "1vw" }}
                            >
                                Nome: {info.name}
                            </p>
                            <p
                                key={"Agency " + index}
                                className="text-start text-black"
                                style={{ fontSize: "1vw" }}
                            >
                                Agência: {info.agency}
                            </p>
                            <p
                                key={"Account " + index}
                                className="text-start text-black"
                                style={{ fontSize: "1vw" }}
                            >
                                Conta: {info.account}
                            </p>
                            <p
                                key={"Current Balance" + index}
                                className="text-start text-black"
                                style={{ fontSize: "1vw" }}
                            >
                                Saldo: {info.current_balance}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
