import React from 'react';
import BlogCard from '../../../components/shared/blogCard/BlogCard';
import { FcOpenedFolder } from "react-icons/fc"
const BlogSection = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-8 px-6'>
            <h4>FROM THE BLOG  --------------------------------</h4>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>

            <div className="border shadow-sm p-3">
                <div className="flex gap-4 items-center">
                    <img src="https://luma.humatheme.com/public/images/paths/invision_200x168.png" alt="" className="w-20 h-20 rounded-lg" />
                    <div className="">
                        <p className="text-xl">Design Systems Essentials</p>
                        <p className='text-sm text-gray-500'>35 views last week</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">

                    <div className="flex gap-16">
                        <div className="flex gap-4 items-center">
                            <FcOpenedFolder /> <p>INVISION</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="w-10 h-10 rounded-full border cursor-pointer" title="Tausif Ahmed"> {/*just can add tittle like userName*/}
                            <img className="w-full h-full rounded-full p-0.5" src="https://luma.humatheme.com/public/images/256_luke-porter-261779-unsplash.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;