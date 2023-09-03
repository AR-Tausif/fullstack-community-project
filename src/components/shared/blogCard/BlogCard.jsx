import { IoMdEye } from "react-icons/io";

const BlogCard = () => {
    return (
        <div className='bg-[url("https://luma.humatheme.com/public/images/paths/sketch_430x168.png")] w-full h-40 p-4 rounded-md'
            style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover', // Adjust the height as needed
            }}>
            <div className="flex-col space-y-12 text-sm">
                <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-full border cursor-pointer" title="Tausif Ahmed"> {/*just can add tittle like userName*/}
                        <img className="w-full h-full rounded-full p-0.5" src="https://luma.humatheme.com/public/images/256_luke-porter-261779-unsplash.jpg" alt="" />
                    </div>
                    <div className="flex">
                        <IoMdEye /> <span>440k</span>
                    </div>
                </div>
                <div className="">
                    <p className="text-gray-400">SKETCH</p>
                    <p>Merge Duplicates Inconsistent Symbols</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;