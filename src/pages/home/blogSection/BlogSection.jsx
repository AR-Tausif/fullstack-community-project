
import BlogCard from '../../../components/shared/blogCard/BlogCard';
import { FcOpenedFolder } from "react-icons/fc"
import SeenCard from '../../../components/shared/seenCard/SeenCard';
const BlogSection = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-8 px-6 pb-6'>
            <h4>FROM THE BLOG  --------------------------------</h4>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>

            <div className="bg-white rounded-md border shadow-sm p-3">
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
                    <div className="flex items-center">
                        <div className="flex -space-x-4">
                            <SeenCard />
                            <SeenCard />
                            <SeenCard />
                            <SeenCard />

                        </div>
                        <span>3+ views</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;