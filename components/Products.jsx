// import React from 'react'

const Products = () => {
    return (
        <div id="products" className="w-full scroll-mt-14 lg:flex lg:items-center h-fit bg-primary py-20 px-4 md:px-16">
            <div className="w-full mb-8">
                <img src={"/assests/dm.jpeg"} alt="dm" className="w-full h-96 lg:h-[44rem] rounded-lg object-cover object-top" />
            </div>
            <div className="w-full lg:p-8 flex flex-col items-center text-center lg:max-w-6xl lg:mx-auto">
                <h1 className="capitalize bg-white px-4 py-2 font-medium text-secondary rounded">What we offer</h1>
                <h1 className="text-secondary text-3xl lg:text-5xl font-bold my-3 lg:my-6">Professional Main Services</h1>
                <div className="flex flex-col gap-4">
                    <p className="text-secondary text-justify lg:text-lg">
                        Shree Shyam Industries offers complete customer satisfaction with its premium products to meet quality 
                        standards over the entire size range 1mm to 17mm wire.
                    </p>
                    <p className="text-secondary text-justify lg:text-lg">
                        We deal in Premier Products steel wire in the Grades SAE 52100/HCHC (EN-31)/High carbon/MS/50CRV4. Steel 
                        Wire can be supplied in Spherodized Annealed, Simple Annealed and Spring hard Conditions for various 
                        applications like Taper Roller, Needle Roller, High Tensile/Low Tensile Fasteners, Graded Steel Balls, Grinding 
                        Media Balls, Precision Balls, Textile Pins, Springs etc
                    </p>
                    <p className="text-secondary text-justify lg:text-lg">
                        Our products are manufactured under a single roof facility for the complete process, ensuring excellent control and 
                        quick customer service. Steel wire rods are sourced directly from India’s premier manufacturing company like
                        JSPL, JNIL in both hot rolled and Spherodized Annealed Condition. All material is inspected and processed through 
                        various stages of pickling, drawing, annealing Raw Material to Finished Goods. We also process material on job 
                        work basis which includes only drawing, drawing and pickling, drawing pickling and finishing etc. This is based 
                        purely on customer requirements.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Products