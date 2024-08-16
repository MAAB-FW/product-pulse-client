import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Home = () => {
    const [sort, setSort] = React.useState("");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const itemPerPage = 9;

    const { data: products } = useQuery({
        queryKey: ["products", currentPage, search, sort],
        queryFn: async () => {
            const res = await axios(
                `${import.meta.env.VITE_BASE_URL}/products?size=${itemPerPage}&page=${currentPage}&search=${search}&sort=${sort}`,
            );
            return res.data;
        },
    });console.log(sort);
    const { data } = useQuery({
        queryKey: ["count", currentPage, search],
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_BASE_URL}/count?search=${search}`);
            return res.data;
        },
        initialData: {},
    });
    const { count } = data;
    return (
        <div>
            <div className="flex w-[83%] mx-auto items-center justify-center bg-white rounded-lg overflow-hidden pl-4 shadow-md h-10">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Products by Name"
                    id="input"
                    className="w-full h-full border-none outline-none text-sm caret-orange-600"
                    name="text"
                    type="text"
                />
                <label className="cursor-text px-3" htmlFor="input">
                    <svg className="w-3 h-3 text-gray-500" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                    </svg>
                </label>
            </div>
            <div className="my-12">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Sort By</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Price</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                            <DropdownMenuRadioItem value="Low to High">Low to High</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="High to Low">High to Low</DropdownMenuRadioItem>
                            <DropdownMenuLabel>Date Added</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioItem value="Newest First">Newest First</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                {products?.map((product) => (
                    <Card key={product.image} product={product}></Card>
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                count={count}
                itemPerPage={itemPerPage}
            ></Pagination>
        </div>
    );
};

export default Home;
