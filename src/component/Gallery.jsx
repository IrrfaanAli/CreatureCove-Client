

const Gallery = () => {
    return (
        <div>
            <h1 className="text-5xl text-center p-3 font-bold"> GELLAY</h1>




            {/* 
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2"><img src="/dog.jpg" className=" rounded-lg shadow-2xl" /></div>
                        <div className=""> <img src="/cat3.jpg" className=" rounded-lg shadow-2xl" /></div>
                        <div className=""><img src="/teddy3.jpg" className=" rounded-lg shadow-2xl" /></div>
                        <div className="col-span-2"><img src="/unicorn3.jpg" className=" rounded-lg shadow-2xl" /></div>
                        <div className=""><img src="/unicorn3.jpg" className=" rounded-lg shadow-2xl" /></div>
                        <div className=""><img src="/unicorn3.jpg" className=" rounded-lg shadow-2xl" /></div>
                        <div className="col-span-2 "><img src="/unicorn3.jpg" className=" rounded-lg shadow-2xl" /></div>
                    </div> */}

            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-3">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/dog.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-3">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/dog.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-4">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/dog.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-4">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/dog3.jpg" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/cat1.jpg" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/dinosaur2.jpg" />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-7">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/dinosaur2.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/cat2.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-7">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/unicorn1.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-7">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/teddy1.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/dinosaur1.jpg" />
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default Gallery;