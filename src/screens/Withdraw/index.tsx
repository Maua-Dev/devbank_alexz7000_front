import Header from "@components/Header";
import Title from "@components/Title";
import ATMScreen from "@components/ATMScreen";

export default function DepositAndWithdraw() {
    return (
        <>
            <Header boxText={true} />
            <Title title={"Saque"} />
            <ATMScreen isDeposit={false} />
        </>
    );
}
