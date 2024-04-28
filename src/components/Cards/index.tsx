import { useQuery } from "react-query";
import axios from "axios";
import Loading from "@components/Loading";
import { useApiResult } from "../../services/queryClient.ts";

type HistoryData = {
    all_transactions: [
        {
            type: string;
            value: number;
            current_balance: string;
            timestamp: number;
        }
    ];
};

export default function Cards() {
    const { data, isFetching } = useQuery<HistoryData>(
        "historyDataAWS",
        async () => {
            const response = await axios.get(
                `${useApiResult()}/history` // eslint-disable-line
            );
            return response.data as HistoryData;
        }
    );
    const dataArray: HistoryData[] = data ? [data] : [];

    return (
        <>
            {isFetching && <Loading />}
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
                                style={{
                                    width: "95%",
                                    backgroundColor: "#003D7D"
                                }}
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
        </>
    );
}
