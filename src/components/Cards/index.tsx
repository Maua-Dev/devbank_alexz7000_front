import { Link } from "react-router-dom";
import "./styles.css";
import deposit from "@assets/deposit.png";
import withdraw from "@assets/withdraw.png";
import history from "@assets/money-back-guarantee.png";

export default function Cards() {
    return (
        <div className={"container-fluid row"}>
            <div className={"col-lg-4 mt-1"}>
                <div
                    className={"card card-animation"}
                    style={{
                        backgroundColor: "#004f96",
                        width: "400px",
                        height: "26vw",
                        borderColor: "#003D7D",
                        borderWidth: "20px"
                    }}
                >
                    <Link
                        style={{ textDecoration: "none" }}
                        to={"/Deposit"}
                        role="button"
                    >
                        <h1 className="text-white text-center">Depositar</h1>
                        <div className="card-body text-center align-content-center">
                            <img
                                className={"img-fluid card-img"}
                                style={{ maxWidth: "8vw", maxHeight: "8vw" }}
                                src={deposit as string}
                                alt={"deposit image"}
                            ></img>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={"col-lg-4 mt-1"}>
                <div
                    className={"card card-animation"}
                    style={{
                        backgroundColor: "#004f96",
                        width: "400px",
                        height: "26vw",
                        borderColor: "#003D7D",
                        borderWidth: "20px"
                    }}
                >
                    <Link
                        style={{ textDecoration: "none" }}
                        to={"/Withdraw"}
                        role="button"
                    >
                        <h1
                            className="text-white text-center"
                            style={{ backgroundColor: "#004f96" }}
                        >
                            Saque
                        </h1>
                        <div className="card-body text-center align-content-center">
                            <img
                                className={"img-fluid card-img "}
                                style={{ maxWidth: "8vw", maxHeight: "8vw" }}
                                src={withdraw as string}
                                alt={"deposit image"}
                            ></img>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={"col-lg-4 mt-1"}>
                <div
                    className={"card card-animation"}
                    style={{
                        backgroundColor: "#004f96",
                        width: "400px",
                        height: "26vw",
                        borderColor: "#003D7D",
                        borderWidth: "20px"
                    }}
                >
                    <Link
                        style={{ textDecoration: "none" }}
                        to={"/History"}
                        role="button"
                    >
                        <h1 className="text-white text-center">Histórico</h1>
                        <div className="card-body text-center align-content-center">
                            <img
                                className={"img-fluid card-img"}
                                style={{ maxWidth: "8vw", maxHeight: "8vw" }}
                                src={history as string}
                                alt={"deposit image"}
                            ></img>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
