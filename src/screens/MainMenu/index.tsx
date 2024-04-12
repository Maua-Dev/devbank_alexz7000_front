import Header from "@components/Header";
import SearchBar from "@components/SearchBar";
import CashOptionCards from "@components/CashOptionCards";

export default function MainMenu() {
    return (
        <>
            <Header boxText={true} />
            <div
                className={
                    "container-fluid w-100 flex-column d-flex justify-content-center align-items-center"
                }
                style={{ height: "75vh" }}
            >
                <div className={"position-relative"}>
                    <CashOptionCards />
                </div>
                <div className={"position-fixed"} style={{ bottom: "50px" }}>
                    <SearchBar loupeIcon={false} />
                </div>
            </div>
        </>
    );
}
