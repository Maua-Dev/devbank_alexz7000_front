import Header from "@components/Header";
import Title from "@components/Title";
import ATMScreen from "@components/ATMScreen";

export default function DepositAndWithdraw() {
    return (
        <div className={"d-flex flex-column"} style={{ maxHeight: "100vh" }}>
            <Header boxText={true} />
            <div className={"flex-grow-1 h-100 overflow-y-auto mb-1"}>
                <Title title={"Saque"} />
                <ATMScreen isDeposit={false} />
            </div>
        </div>
    );
}
