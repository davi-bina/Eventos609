import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { EventDetailsPage } from "../Pages/EventDetails/EventDetails";
import { NoPage } from "../Pages/NoPage/NoPage";

export function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route /* index */ path="/" element={<Home />} />
            <Route path="/eventos/:id" element={<EventDetailsPage />}/>
            <Route path="*" element={<NoPage />} />
        </Routes>
        </BrowserRouter>
    )
}