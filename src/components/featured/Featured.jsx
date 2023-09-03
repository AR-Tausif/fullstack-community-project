import { PiVideoLight } from "react-icons/pi"
const Featured = () => {
    return (
        <div className="border-b bg-white shadow-sm">
            <div className="max-w-screen-lg mx-auto">
                <div className="grid max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 px-5">
                    <div className="flex gap-2 items-center">
                        <div className="bg-blue-600 inline-block w-16 h-16 rounded-full">
                            <div className="h-full w-full flex justify-center items-center text-white text-3xl">
                                <PiVideoLight />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="font-medium text-black text-xl">8,000+ Courses</p>
                            <p className="text-gray-500 text-sm">Explore a wide range of skills.</p>
                        </div>
                    </div>

                    {/* number of two feature */}
                    <div className="flex gap-2 items-center">
                        <div className="bg-blue-600 inline-block w-16 h-16 rounded-full">
                            <div className="h-full w-full flex justify-center items-center text-white text-3xl">
                                <PiVideoLight />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p className="font-medium text-black text-xl">8,000+ Courses</p>
                            <p className="text-gray-500 text-sm">Explore a wide range of skills.</p>
                        </div>
                    </div>
                    {/* number of three feature */}
                    <div className="flex gap-2 items-center">
                        <div className="bg-blue-600 inline-block w-16 h-16 rounded-full">
                            <div className="h-full w-full flex justify-center items-center text-white text-3xl">
                                <PiVideoLight />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p className="font-medium text-black text-xl">8,000+ Courses</p>
                            <p className="text-gray-500 text-sm">Explore a wide range of skills.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Featured;