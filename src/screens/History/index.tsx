import Header from "@components/Header";
import Title from "@components/Title";
import BlueButtons from "@components/BlueButtons";
import Cards from "@components/Cards";

export default function History() {
    return (
        <>
            <Header boxText={true} />
            <Title title={"Histórico"} />
            <Cards />
            <BlueButtons screenName={"/MainMenu"} text={"Voltar"} />
        </>
    );
}
