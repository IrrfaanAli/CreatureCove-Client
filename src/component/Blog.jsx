

const Blog = () => {
    return (
     <>
        <h1 className="text-3xl lg:text-5xl font-bold text-center mt-1 lg:mt-5  p-3 lg:p-7">Latest Blog</h1>
        <div className="flex ml-12 lg:ml-96">
            
            <div>
                <img className=" w-full h-48 lg:h-96 " src="./1.webp" alt="" />
            </div>
            <div className="p-24">
                <h1 className=" text-3xl font-bold ">Build Toy Room</h1>
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem dolor minus nisi placeat iusto dignissimos ut molestias, nobis velit quia incidunt quaerat in ducimus nostrum sint cum perferendis laboriosam aspernatur. Temporibus quam ipsa voluptates officia, dolorem quisquam culpa laboriosam vero incidunt explicabo excepturi nostrum, vitae corporis magnam possimus dolores odio?</h1>
            </div>
        </div>
        </>
    );
};

export default Blog;