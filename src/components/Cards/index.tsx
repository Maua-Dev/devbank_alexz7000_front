export default function Cards() {
    const cardsData = [
        {
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
                "                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n" +
                "                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n" +
                "                        sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
                "                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n" +
                "                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n" +
                "                        sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
                "                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n" +
                "                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n" +
                "                        sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
                "                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n" +
                "                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n" +
                "                        sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
                "                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n" +
                "                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n" +
                "                        sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];

    return (
        <div
            className="container-fluid flex-column align-items-center d-flex mb-4"
            style={{
                maxHeight: "400px",
                overflowY: "auto"
            }}
        >
            {cardsData.map((card, index) => (
                <div
                    className="card mb-4"
                    style={{ width: "95%", backgroundColor: "#003D7D" }}
                >
                    <div className="card-body text-start p-3 w-75">
                        <p
                            key={index}
                            className="card-text text-white text-break text-wrap"
                        >
                            {card.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
