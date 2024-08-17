const About = () => {
    return (
        <div className="mb-32 flex flex-col justify-start items-start">
            <div className="flex flex-col justify-center items-center w-full">
                <h2 className="text-2xl lg:text-4xl text-center animate-pulse font-black pb-2 border-b-4 border-black shadow-xl">
                    About Product Pulse
                </h2>
                <p className="mt-4 text-lg text-center font-medium lg:w-[80%] pb-6 text-[#13131399]">
                    Welcome to Product Pulse! Our mission is to empower you with the tools and information you need to make
                    informed purchasing decisions.
                </p>
            </div>

            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mx-auto rounded-2xl shadow-2xl">
                <div className="mt-9 border-b border-gray-500">
                    <h2 className="text-[#23BE0A] font-semibold text-xl">Our Mission:</h2>
                    <p className="mt-2 text-lg font-medium lg:w-[80%] pb-6 text-[#13131399]">
                        In a world flooded with countless options, making the right choice can be overwhelming. That’s where
                        Product Pulse comes in. Our platform is designed to simplify the shopping experience by providing a
                        seamless, user-friendly interface that allows you to filter, sort, and search for products that best meet
                        your needs.
                    </p>
                </div>

                <div className="mt-9 border-b border-gray-500">
                    <h2 className="text-[#23BE0A] font-semibold text-xl">What We Offer:</h2>
                    <p className="mt-2 text-lg font-medium w-[80%] pb-6 text-[#13131399]">
                        - Extensive Product Listings: Explore a wide range of products, from electronics to home goods, fashion,
                        and more. Our database is constantly updated to ensure you have access to the latest products on the
                        market.
                        <br />
                        - Advanced Filtering and Sorting: Find exactly what you’re looking for with our powerful filtering and
                        sorting options. Whether it’s by price, category, brand, or other criteria, Product Pulse helps you narrow
                        down your choices quickly and efficiently.
                        <br />
                        - Detailed Product Information: Each product listing comes with comprehensive details, including
                        specifications, user reviews, and more, so you can make well-informed decisions.
                        <br />- Easy Navigation: Our intuitive design ensures that you can browse and search for products with
                        ease, whether you’re on a desktop or mobile device.
                    </p>
                </div>

                <div className="mt-9 border-b border-gray-500">
                    <h2 className="text-[#23BE0A] font-semibold text-xl">Our Vision:</h2>
                    <p className="mt-2 text-lg font-medium w-[80%] pb-6 text-[#13131399]">
                        We envision Product Pulse as the go-to platform for anyone looking to discover, compare, and purchase
                        products online. Our goal is to continue expanding our offerings and features, ensuring that we remain at
                        the forefront of online product discovery and comparison.
                    </p>
                </div>

                <div className="mt-9 border-gray-500">
                    <h2 className="text-[#23BE0A] font-semibold text-xl">Why Choose Us?</h2>
                    <p className="mt-2 text-lg font-medium w-[80%] pb-6 text-[#13131399]">
                        - User-Centric Design: Everything we do is aimed at enhancing your shopping experience. From our clean
                        interface to our robust search and filter options, Product Pulse is built with you in mind.
                        <br />
                        - Trust and Transparency: We value your trust. Our product listings and reviews are curated with
                        integrity, ensuring that you have access to accurate and unbiased information.
                        <br />- Constant Innovation: We’re always looking for ways to improve. Our team is dedicated to bringing
                        new features and updates that make your experience even better.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
