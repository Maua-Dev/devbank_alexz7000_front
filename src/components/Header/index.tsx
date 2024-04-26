import "./styles.css";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "@components/Loading";
import axios from "axios";

interface HeaderProps {
    boxText: boolean;
}

export type UserData = {
    name: string;
    agency: string;
    account: string;
    current_balance: number;
};

export default function Header({ boxText }: HeaderProps) {
    const { data, isFetching } = useQuery<UserData>(
        "userDataAWS",
        async () => {
            const response = await axios.get(
                "https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws"
            );
            return response.data as UserData;
        },
        {
            staleTime: 1000 * 60 // 1 minuto
        }
    );
    const dataArray: UserData[] = data ? [data] : [];
    return (
        <div className={"position-relative"}>
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
                            className={"position-absolute pt-2"}
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
                        "container-fluid position-absolute rounded-3 z-1 pt-1"
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
        </div>
    );
}
