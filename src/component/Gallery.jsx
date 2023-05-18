

const Gallery = () => {
    return (
        <div>
             <h1 className="text-5xl text-center p-3 font-bold"> GELLAY</h1>
            <div className="hero min-h-screen bg-base-200">
            
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/dog.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <img src="/cat3.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <img src="/teddy3.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <img src="/dog3.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <img src="/unicorn3.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    
                </div>
            </div>
        </div>
    );
};

export default Gallery;