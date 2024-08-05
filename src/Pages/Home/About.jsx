
import heroImg1 from '../../assets/images/about_us/person.jpg'
import heroImg2 from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='h-96'>
            <div className=" mt-20 h-auto items-center">
                <div className=" flex relative gap-20">
                    <div className='flex-col w-1/2'>
                        <img
                            src={heroImg1}
                            className=" w-3/4  rounded-lg shadow-2xl" />
                        <img
                            src={heroImg2}
                            className="w-1/4 rounded-lg shadow-2xl absolute top-1/2 right-[55%] border-white border-t-8 border-l-8" />
                    </div>
                    <div className='max-w-sm space-y-4'>
                        <h1 className="text-3xl font-bold text-orange-600">About Us</h1>
                        <p className="py-6 text-black font-bold text-3xl">
                            We are qualified and experienced in this field
                        </p>
                        <p className="">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                        </p>
                        <button className="btn btn-outline hover:bg-gradient-to-r from-orange-600 to-black">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;