// import React from 'react'

const Quality = () => {
    return (
        <main id="quality" className="bg-primary">
            <div className="w-full h-fit lg:h-fit flex flex-col lg:flex-row gap-4 p-4 md:p-16">
                <div className="h-[24rem] lg:h-[48rem] lg:w-1/2 bg-contain bg-center bg-no-repeat w-full bg-[url('/assests/qua.png')]">
                </div>
                <div className="h-fit lg:h-fit lg:w-1/2 lg:p-8">
                        {/* <h1 className="p-4 bg-slate-200/50 w-fit rounded text-sm lg:text-lg font-semibold">Welcome to Shree Shyam Industries</h1> */}
                        <h1 className="text-3xl lg:text-5xl my-3 lg:my-6 text-[#1c2752] font-bold">Quality</h1>
                        <div className="flex flex-col gap-4 text-secondary">
                            <p className="text-justify lg:text-lg">
                                The Company works on the solid foundation of ensuring quality product supported by the best equipment and a 
                                team of highly qualified and well-trained personnel. We have a rigorous quality inspection process in place at every 
                                step which makes us a quality driven organisation.
                            </p>
                            <p className="text-justify lg:text-lg">
                                Quality systems comply with the requirement of International standard systems. To achieve the objectives of the 
                                quality policy, quality checks have been introduced at various work centres of the company under the guidance & 
                                expertise of Certified Quality Management Consultants.
                            </p>
                            <p className="text-justify lg:text-lg">
                                Persistent follow up by management, internal/external audits and relentless efforts on the part of employees have 
                                paid rich dividends. Working in accordance with quality systems has now become a way of life at <span className="font-bold">Shree Shyam Industries</span>. 
                            </p>
                            <p className="text-justify lg:text-lg">
                                It&apos;s our continuous efforts to go beyond norms & limits set by standards and create our own standards to achieve 
                                excellence. Emphasis is given on detailed study of subjects and fields of our interest.
                            </p>
                            <p className="text-justify lg:text-lg">
                                We ensure that detailed specifications and materials with correct properties only, are supplied/made available for 
                                Drawing of steel. The effectiveness of quality systems is reviewed by the top management regularly.
                            </p>
                        </div>
                </div>
            </div>
        </main>
    )
}

export default Quality