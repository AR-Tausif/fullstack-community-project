import BannerHero from "../../components/bannerHero/BannerHero";
import Featured from "../../components/featured/Featured";
import BlogSection from "./blogSection/BlogSection";

const Home = () => {
    return (
        <>
            <header className="relative">
                {/* Background Image */}
                <div
                    className="bg-[url('https://luma.humatheme.com/public/images/photodune-4161018-group-of-students-m.jpg')] py-10 space-y-48"
                    style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '60vh' // Adjust the height as needed
                    }}
                >

                    {/* Color Overlay */}
                    <div
                        className="absolute inset-0 mix-blend-multiply bg-slate-800"
                    ></div>
                    {/* BannerHeroSection */}
                    <div className="relative z-10">
                        <BannerHero />
                    </div>
                </div>
            </header>

            <main className="bg-[#e9edf2]">
                <Featured />
                <BlogSection />
            </main>
        </>

    );
};

export default Home;