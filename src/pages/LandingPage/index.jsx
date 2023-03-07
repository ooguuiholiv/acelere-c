import React from "react";
import { Header } from "../../blocks/Header";
import { Contador } from "../../blocks/Counter";
import { Presentation } from "../../blocks/Presentation";
import { Attendance } from "../../blocks/ConfirmedAttendance";
import { Ticket } from "../../blocks/Tickets";
import { HowItIs } from "../../blocks/HowItIs";
import { Doubt } from "../../blocks/Doubts";
import { Footer } from "../../blocks/Footer";
import { Newsletter } from "../../blocks/Newsletter";
import { Partners } from "../../blocks/Partners";

export const LandingPage = () => {
    return (
        <>
        <Header />
        <Contador />
        <Presentation />
        <Attendance />
        <Ticket />
        <HowItIs />
        <Partners />
        <Doubt />
        <Newsletter />
        <Footer />
        </>
    )
}