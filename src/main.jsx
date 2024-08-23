import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";
import AuthProvider from "./routes/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 1000 * 60 * 10, // Cache will persist for 10 minutes
            refetchOnWindowFocus: false, // Disable refetching when window is focused
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <Toaster position="top-center" reverseOrder={false} />
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>
);
