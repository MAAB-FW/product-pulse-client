import React from "react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex items-center justify-center">
            <PuffLoader color="#1e40af" />
        </div>
    );
};

export default Loading;
