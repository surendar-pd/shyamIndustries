// import React from 'react'

const About = () => {
    return (
        <main id="about" className=" scroll-mt-14 my-20">
            <div className="w-full h-fit lg:h-fit flex flex-col lg:flex-row gap-4 p-4 md:px-16 lg:mb-32">
                <div className="h-[24rem] rounded-lg lg:h-[40rem] lg:w-1/2 bg-cover bg-no-repeat w-full bg-[url('/assests/plant.jpeg')]">
                </div>
                <div className="h-fit lg:h-fit lg:w-1/2 lg:p-8">
                        <h1 className="p-4 bg-slate-200/50 w-fit rounded text-sm lg:text-lg font-semibold">Welcome to Shree Shyam Industries</h1>
                        <h1 className="text-3xl lg:text-5xl my-3 lg:my-6 text-[#1c2752] font-bold">We provide your future</h1>
                        <div className="flex flex-col gap-4">
                            <p className="text-slate-500 text-justify lg:text-lg">We at Shree Shyam Industries specialise in Alloy and Non alloy steel wire drawing. We deal in Premier Products steel 
                                wire in the Grades SAE 52100/HCHC (EN-31)/High carbon/MS/50 CRV4 in the diameter ranging from 1 mm to 17
                                mm. We make wire according to the needs of our customers. We prioritise customer satisfaction and on time 
                                delivery so that we can be a one stop solution for our clients.
                            </p>
                            <p className="text-slate-500 text-justify lg:text-lg">We have established ourselves as one of India’s leading names in the field of Wire Drawing with our promise of 
                                quality products that stay ahead of time.
                            </p>
                            <p className="text-slate-500 text-justify lg:text-lg">We encompass all aspects of modern steel wire making and are among the most advanced industry players, 
                                operating on a range of modern technologies. A wide exposure and deep understanding of the industry gives an 
                                insight into the needs of the changing market, our mantra of staying ahead.
                            </p>
                        </div>
                </div>
            </div>
            <div className="w-full h-fit lg:h-fit flex flex-col lg:flex-row-reverse gap-4 p-4 md:px-16">
                <div className="h-[24rem] rounded-lg lg:h-[40rem] lg:w-1/2 bg-cover bg-no-repeat w-full bg-[url('/assests/3.3.jpeg')]">
                </div>
                <div className="h-fit lg:h-fit lg:w-1/2 lg:p-8">
                        <h1 className="text-3xl lg:text-5xl my-3 lg:my-6 text-[#1c2752] font-bold">About Us</h1>
                        <div className="flex flex-col gap-4">
                            <p className="text-slate-500 text-justify lg:text-lg">
                                Shree Shyam Industries is in the nature of manufacturing and supply of all types of alloy & non alloy steel 
                                wires. We are seeking to revolutionize the Wire industry by offering its customers the sophisticated state of art 
                                technology at the most competitive prices. The company is led by both partners Mr. Prem Taparia and Mr Satish 
                                Rathi since its inception, who believes in being proactive in their decision making and look for opportunities to 
                                continuously improve.
                            </p>
                            <p className="text-slate-500 text-justify lg:text-lg">
                                We are backed by the latest technology and best equipment, coupled with a team of highly qualified & well 
                                trained personnel, supported by over one decades of experience in wire industry. This obsession for quality is 
                                reinforced by some of the best facilities for process control, inspection & testing at various levels.
                            </p>
                            <p className="text-slate-500 text-justify lg:text-lg">
                                Backed by above, in a short span of time, we have become one of the leading name in India as manufacturers of 
                                superior quality of alloy & non alloy steel wire. Our customer base is spread all around India with major OEM 
                                suppliers as our clients.
                            </p>
                        </div>
                </div>
            </div>
        </main>
    )
}

export default About