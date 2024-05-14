import React from "react";
const Page = ({ serverData }) => (
    <div>
        <h1>About Page</h1>
        <p>{serverData}</p>
    </div>
);
export default Page;
