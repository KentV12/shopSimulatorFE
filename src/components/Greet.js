import { useEffect, useState } from "react";

import React from 'react'

const Greet = () => {

    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/greet")
        .then((response) => response.text())
        .then((data) => setMessage(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h3>{message}</h3>
        </div>
    )
}

export default Greet