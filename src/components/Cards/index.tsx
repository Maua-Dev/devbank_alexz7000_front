import useAPI from "../../hooks/useAPI.ts";
import Loading from "@components/Loading";

type Transaction = {
    type: string;
    value: number;
    current_balance: string;
    timestamp: number;
};

type HistoryData = {
    all_transactions: Transaction[];
};

export default function Cards() {
    const { data, isFetching } = useAPI<HistoryData>("/history");

    if (isFetching) {
        return <Loading />;
    }

    const dataArray: HistoryData[] = data ? [data] : [];

    return (
        <div
            className="container-fluid flex-column align-items-center d-flex mb-4"
            style={{
                maxHeight: "400px",
                overflowY: "auto"
            }}
        >
            {dataArray.map((card, idx) => (
                <div className={"w-100"} key={"diva2 " + idx}>
                    {card.all_transactions.map((transaction, index) => (
                        <div
                            key={"card " + index}
                            className="card mb-4"
                            style={{ width: "95%", backgroundColor: "#003D7D" }}
                        >
                            <div className="card-body text-start p-3 w-75">
                                <div>
                                    <p className="card-text text-white">
                                        Tipo: {transaction.type} <br />
                                        Valor: {transaction.value} <br />
                                        Saldo: {
                                            transaction.current_balance
                                        }{" "}
                                        <br />
                                        Horário: {transaction.timestamp}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
