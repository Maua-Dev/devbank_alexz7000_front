import { Link } from "react-router-dom";
import "./styles.css";
import deposit from "@assets/deposit.png";
import withdraw from "@assets/withdraw.png";
import history from "@assets/money-back-guarantee.png";

export default function CashOptionCards() {
    return (
        <div className={"container-fluid row"} style={{}}>
            <div className={"col-lg-4 mt-1"}>
                <Link
                    style={{ textDecoration: "none" }}
                    to={"/Deposit"}
                    role="button"
                >
                    <div className={"card card-animation"}>
                        <h1 className="text-white text-center">Depositar</h1>
                        <div className="card-body text-center align-content-center">
                            <img
                                className={"img-fluid card-img"}
                                style={{ maxWidth: "8vw", maxHeight: "8vw" }}
                                src={deposit as string}
                                alt={"deposit image"}
                            ></img>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={"col-lg-4 mt-1"}>
                <Link
                    style={{ textDecoration: "none" }}
                    to={"/Withdraw"}
                    role="button"
                >
                    <div className={"card card-animation"}>
                        <h1 className="text-white text-center">Saque</h1>
                        <div className="card-body text-center align-content-center">
                            <img
                                className={"img-fluid card-img "}
                                style={{ maxWidth: "8vw", maxHeight: "8vw" }}
                                src={withdraw as string}
                                alt={"deposit image"}
                            ></img>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={"col-lg-4 mt-1"}>
                <Link
                    style={{ textDecoration: "none" }}
                    to={"/History"}
                    role="button"
                >
                    <div className={"card card-animation"}>
                        <h1 className="text-white text-center">Histórico</h1>
                        <div className="card-body text-center align-content-center">
                            <img
                                className={"img-fluid card-img"}
                                style={{ maxWidth: "8vw", maxHeight: "8vw" }}
                                src={history as string}
                                alt={"deposit image"}
                            ></img>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
