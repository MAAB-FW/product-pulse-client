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
import Loading from "@/components/Loading";

const Home = () => {
    const [sort, setSort] = React.useState("");
    const [bn, setBn] = React.useState("");
    const [cate, setCate] = React.useState("");
    const [price, setPrice] = useState(0);
    const [tooltipStyle, setTooltipStyle] = useState({ left: "50%", opacity: 0 });

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const itemPerPage = 9;
    const { data: products, isFetching: l1 } = useQuery({
        queryKey: ["products", currentPage, search, sort, bn, cate, price],
        queryFn: async () => {
            const res = await axios(
                `${
                    import.meta.env.VITE_BASE_URL
                }/products?size=${itemPerPage}&page=${currentPage}&search=${search}&sort=${sort}&brandName=${bn}&categoryName=${cate}&price=${price}`,
            );
            return res.data;
        },
    });
    const { data, isFetching: l2 } = useQuery({
        queryKey: ["count", search, bn, cate, price],
        queryFn: async () => {
            const res = await axios(
                `${import.meta.env.VITE_BASE_URL}/count?search=${search}&brandName=${bn}&categoryName=${cate}&price=${price}`,
            );
            return res.data;
        },
        initialData: {},
    });
    const { data: categorization } = useQuery({
        queryKey: ["categorization", currentPage, search],
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_BASE_URL}/categorization`);
            return res.data;
        },
        initialData: {},
    });
    const { count } = data;
    const { brandNames, categories } = categorization;

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
            <div className="my-12 flex items-center justify-between flex-col sm:flex-row gap-3 container *:max-w-96">
                <div className="flex-1">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">{sort ? sort : "Sort By"}</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Price</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup
                                value={sort}
                                onValueChange={(e) => {
                                    if (e === sort) {
                                        return setSort("");
                                    }
                                    setSort(e);
                                }}
                            >
                                <DropdownMenuRadioItem value="Low to High">Low to High</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="High to Low">High to Low</DropdownMenuRadioItem>
                                <DropdownMenuLabel>Date Added</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioItem value="Newest First">Newest First</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="flex-1 flex items-center justify-end flex-col sm:flex-row gap-3 *:max-w-96">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className={bn && "bg-[#1e40af] text-white"} variant="outline">
                                {bn ? bn : "Brand"}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="max-w-56 h-56 overflow-scroll">
                            <DropdownMenuRadioGroup
                                value={bn}
                                onValueChange={(e) => {
                                    if (e === bn) {
                                        return setBn("");
                                    }
                                    setBn(e);
                                }}
                            >
                                {brandNames?.map(({ brand }) => (
                                    <DropdownMenuRadioItem key={brand} value={brand}>
                                        {brand}
                                    </DropdownMenuRadioItem>
                                ))}
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className={cate && "bg-[#1e40af] text-white"} variant="outline">
                                {cate ? cate : "Category"}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="max-w-56 h-56 overflow-scroll">
                            <DropdownMenuRadioGroup
                                value={cate}
                                onValueChange={(e) => {
                                    if (e === cate) {
                                        return setCate("");
                                    }
                                    setCate(e);
                                }}
                            >
                                {categories?.map(({ category }) => (
                                    <DropdownMenuRadioItem key={category} value={category}>
                                        {category}
                                    </DropdownMenuRadioItem>
                                ))}
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div title={price} className="flex flex-col md:flex-row items-center gap-2">
                        <p className="text-nowrap">Price Range:</p>
                        <div className="relative flex items-center gap-2">
                            $0
                            <input
                                type="range"
                                value={price}
                                min="0"
                                max="1500"
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    setPrice(newValue);

                                    const rangeWidth = e.target.offsetWidth;
                                    const tooltipWidth = 40; // Approximate width of the tooltip
                                    const max = e.target.max;
                                    const min = e.target.min;
                                    const percent = (newValue - min) / (max - min);
                                    const offset = percent * (rangeWidth - tooltipWidth);

                                    setTooltipStyle({ left: `${offset}px`, opacity: 1 });
                                }}
                                onFocus={() => setTooltipStyle({ ...tooltipStyle, opacity: 1 })}
                                onBlur={() => setTooltipStyle({ ...tooltipStyle, opacity: 0 })}
                            />
                            $1500
                            <div
                                className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none transition-opacity duration-200"
                                style={tooltipStyle}
                            >
                                {price}
                            </div>
                        </div>
                        {/* <div className="flex items-center gap-2">
                            
                            <input
                                type="range"
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                min={0}
                                max={2000}
                            />
                            
                        </div> */}
                    </div>
                </div>
            </div>
            {l1 || l2 ? (
                <Loading />
            ) : products?.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 ">
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
                </>
            ) : (
                <div className="flex items-center justify-center">Empty Result</div>
            )}
        </div>
    );
};

export default Home;
