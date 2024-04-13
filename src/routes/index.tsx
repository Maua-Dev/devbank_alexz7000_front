import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@screens/Home";
import MainMenu from "@screens/MainMenu";
import Deposit from "@screens/Deposit";
import Withdraw from "@screens/Withdraw";
import History from "@screens/History";
import { queryClient } from "../services/queryClient.ts";
import { QueryClientProvider } from "react-query";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/MainMenu"} element={<MainMenu />} />
                    <Route path={"/Deposit"} element={<Deposit />} />
                    <Route path={"/Withdraw"} element={<Withdraw />} />
                    <Route path={"/History"} element={<History />} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
}
