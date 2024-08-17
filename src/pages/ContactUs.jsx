const ContactUs = () => {
    return (
        <div className="mb-32 flex flex-col justify-start items-start  ">
            <div className="flex flex-col justify-center items-center w-full">
                <h2 className="text-2xl lg:text-4xl text-center animate-pulse font-black pb-2 border-b-4 border-black shadow-xl">
                    Contact Us
                </h2>
                <p className="mt-4 text-lg text-center font-medium lg:w-[80%] pb-6 text-[#13131399]">
                    We can help. Our team of experts is on hand to answer your questions.
                </p>
            </div>

            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mx-auto rounded-2xl shadow-2xl">
                {/* <div className="flex">
				<h1 className="font-bold uppercase text-5xl">Send us a <br /> message</h1>
			</div> */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="First Name*"
                    />
                    <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Last Name*"
                    />
                    <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="Email*"
                    />
                    <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="number"
                        placeholder="Phone*"
                    />
                </div>
                <div className="my-4">
                    <textarea
                        placeholder="Message*"
                        className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    ></textarea>
                </div>
                <div className="my-2 w-1/2 lg:w-1/4">
                    <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                        Send Message
                    </button>
                </div>
            </div>
            {/* <div className="w-full">
                <div className="mt-9 border-b border-gray-500">
                    <h2 className="text-[#23BE0A] font-semibold text-xl">Featured Books:</h2>
                    <p className="mt-2 text-lg font-medium lg:w-[80%] pb-6 text-[#13131399]">
                        Dive into our handpicked selection of featured books, carefully chosen to captivate and inspire readers of
                        all ages. From gripping thrillers to heartwarming tales, each book offers a unique journey into the realms
                        of imagination and creativity.
                    </p>
                </div>
                <div className="mt-9 border-b border-gray-500">
                    <h2 className="text-[#23BE0A] font-semibold text-xl">Browse by Genre:</h2>
                    <p className="mt-2 text-lg font-medium w-[80%] pb-6 text-[#13131399]">
                        Explore our vast collection of books organized by genre, from timeless classics to contemporary
                        bestsellers. Whether you&apos;re in the mood for romance, mystery, fantasy, or historical fiction,
                        you&apos;ll find a treasure trove of literary gems waiting to be uncovered.
                    </p>
                </div>
                <div className="mt-9 border-b border-gray-500">
                    <h2 className="text-[#23BE0A] font-semibold text-xl">Curated Collections:</h2>
                    <p className="mt-2 text-lg font-medium w-[80%] pb-6 text-[#13131399]">
                        Discover curated collections curated by our team of passionate readers, designed to cater to every
                        interest and mood. From seasonal reads to genre-specific picks, our collections are your guide to finding
                        the perfect book for any occasion.
                    </p>
                </div>
                <div className="mt-9 border-b border-gray-500">
                    <h2 className="text-[#23BE0A] font-semibold text-xl">Search and Filter:</h2>
                    <p className="mt-2 text-lg font-medium w-[80%] pb-6 text-[#13131399]">
                        Use our search and filter options to narrow down your choices and find the perfect book to suit your
                        preferences. Whether you&apos;re searching for a specific title, author, or genre, our intuitive search
                        functionality makes it easy to find exactly what you&apos;re looking for.
                    </p>
                </div>
                <p className="py-8">
                    <em>Success is for Book Vibe.</em>
                </p>
            </div> */}
        </div>
    );
};

export default ContactUs;
