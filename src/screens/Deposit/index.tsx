import Header from "@components/Header";
import Title from "@components/Title";
import ATMScreen from "@components/ATMScreen";

export default function Deposit() {
    return (
        <>
            <Header boxText={true} />
            <Title title={"Depositar"} />
            <ATMScreen isDeposit={true} />
        </>
    );
}
