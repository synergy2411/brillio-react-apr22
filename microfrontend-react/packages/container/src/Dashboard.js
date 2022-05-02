import React from 'react';
import { mount } from "marketingApp/marketingIndex";
import { useEffect, useRef } from "react";

const Dashboard = () => {

    const marketingDivRef = useRef(null)

    useEffect(() => {
        mount(marketingDivRef.current)
    }, [])

    return (
        <div ref={marketingDivRef}></div>
    )

}

export default Dashboard;