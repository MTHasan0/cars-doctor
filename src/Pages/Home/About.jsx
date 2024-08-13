
import heroImg1 from '../../assets/images/about_us/person.jpg'
import heroImg2 from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className=''>
            <div className=" mt-20 h-auto items-center">
                <div className=" lg:flex md:flex lg:relative lg:gap-20 w-full ">
                    <div className='flex-col lg:w-1/2 md:w-1/2   '>
                        <img
                            src={heroImg1}
                            className=" lg:w-1/2 md:w-3/4 rounded-lg shadow-2xl" />
                        <img
                            src={heroImg2}
                            className="w-1/4 hidden lg:flex md:flex rounded-lg  absolute lg:top-20 right-[55%] border border-orange-300 border-b-8 border-r-8" />
                    </div>
                    <div className='max-w-xs lg:space-y-4  md:pl-5 mt-5 w-full'>
                        <h1 className="text-3xl font-bold text-orange-600">About Us</h1>
                        <p className="py-3 lg:py-6 text-black font-bold text-3xl">
                            We are qualified and experienced in this field
                        </p>
                        <p className="">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                        </p>
                        <div className='w-full items-center text-center md:text-start lg:text-start'><button className="btn btn-outline mt-4  hover:bg-gradient-to-r from-orange-600 to-black hover:text-white">Get Started</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;