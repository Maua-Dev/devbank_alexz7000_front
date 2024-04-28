import Header from "@components/Header";
import SearchBar from "@components/SearchBar";

export default function Home() {
    return (
        <>
            <Header boxText={false} />
            <div
                className={
                    "container-fluid w-100 flex-column d-flex justify-content-center align-items-center"
                }
                style={{ height: "75vh" }}
            >
                <div className={"mb-5"}>
                    <SearchBar loupeIcon={true} />
                </div>
            </div>
        </>
    );
}
