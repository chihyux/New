import React from 'react'
import { useLocation } from "react-router-dom";

const Nomatch = () => {
    let location = useLocation();
    return (
        <div>
            No match for <code>{location.pathname}</code>
        </div>
    )
}

export default Nomatch