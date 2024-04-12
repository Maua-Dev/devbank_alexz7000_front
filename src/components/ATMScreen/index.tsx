import "./styles.css";

interface ATMScreenProps {
    isDeposit: boolean;
}

export default function ATMScreen({ isDeposit }: ATMScreenProps) {
    const dadosDosBotoes = [
        {
            texto1: "2 R$",
            texto2: "5 R$",
            texto3: "10 R$"
        },
        {
            texto1: "20 R$",
            texto2: "50 R$",
            texto3: "100 R$"
        },
        {
            texto1: "200 R$",
            texto2: "CORRIGE",
            texto3: "CANCELA"
        }
    ];

    return (
        <>
            <div
                className={
                    "mx-auto flex-column justify-content-center align-content-center align-items-center d-flex w-75"
                }
                style={{ backgroundColor: "#D7EFF2", height: "200px" }}
            >
                <div
                    className={"row w-100 h-100 align-content-center"}
                    style={{ backgroundColor: "rgba(0, 115, 230, 0.25)" }}
                >
                    <div className={"col-sm-4 "}>
                        <h3
                            className={
                                "text-start align-content-center rounded-3 h-100 w-75"
                            }
                            style={{
                                backgroundColor: "rgba(0, 115, 230, 0.3)",
                                padding: "18px 18px 14px 18px"
                            }}
                        >
                            Saldo Atual: 1000,00
                        </h3>
                    </div>
                    <div className={"col-sm-4 align-content-center"}>
                        <h3
                            className={"text-center"}
                            style={{ color: "#0073E6" }}
                        >
                            Quantidade Depositada: 000
                        </h3>
                    </div>
                    <div className={"col-sm-4 align-content-center"}>
                        <h3 className={"text-end"} style={{ color: "#0073E6" }}>
                            Quantidade Depositada: 000
                        </h3>
                    </div>
                </div>
                <h1
                    className={"text-black w-100 text-center"}
                    style={{ fontSize: "64px" }}
                >
                    {isDeposit ? "" : "-"}520 R$
                </h1>
            </div>
            <div
                className={
                    "container-fluid w-100 text-center mt-3 border: 2px solid #c98cf1;"
                }
            >
                <div style={{ position: "absolute", left: "10px" }}>
                    <select className={"rounded-3 custom-select"}>
                        <option value="Selecione">Selecione</option>
                        <option value="2 R$">2 R$</option>
                        <option value="5 R$">5 R$</option>
                        <option value="10 R$">10 R$</option>
                        <option value="20 R$">20 R$</option>
                        <option value="50 R$">50 R$</option>
                        <option value="100 R$">100 R$</option>
                        <option value="200 R$">200 R$</option>
                    </select>
                    <input
                        className={"rounded-3 border-0 ms-2"}
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="0"
                        max="100"
                        placeholder={"x"}
                        step="1"
                    />
                </div>
                <div className={"mb-4"}>
                    {dadosDosBotoes.slice(0, 3).map((dadosDosBotao, index) => (
                        <button
                            key={index}
                            className={
                                "atm-button rounded-3 border-0 text-wrap text-break ms-3"
                            }
                        >
                            {dadosDosBotao.texto1}
                        </button>
                    ))}
                </div>
                <div className={"mb-4"}>
                    {dadosDosBotoes.slice(0, 2).map((dadosDosBotao, index) => (
                        <button
                            key={index}
                            className={
                                "atm-button rounded-3 border-0 text-wrap text-break ms-3"
                            }
                        >
                            {dadosDosBotao.texto2}
                        </button>
                    ))}
                    <button
                        className={
                            "bg-warning atm-button rounded-3 border-0 text-wrap text-break ms-3"
                        }
                    >
                        CORRIGE
                    </button>
                </div>
                <div className={"mb-4"}>
                    {dadosDosBotoes.slice(0, 2).map((dadosDosBotao, index) => (
                        <button
                            key={index}
                            className={
                                "atm-button rounded-3 border-0 text-wrap text-break ms-3"
                            }
                        >
                            {dadosDosBotao.texto3}
                        </button>
                    ))}
                    <button
                        className={
                            "bg-danger atm-button rounded-3 border-0 text-wrap text-break ms-3"
                        }
                    >
                        CANCELA
                    </button>
                </div>
                <div>
                    <button
                        className={
                            "atm-button rounded-3 border-0 text-wrap text-break"
                        }
                        style={{ backgroundColor: "#03A800" }}
                    >
                        Confirma
                    </button>
                </div>
            </div>
        </>
    );
}
