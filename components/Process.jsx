// import React from 'react'

const Process = () => {

    const process = [
        {
            img: "bg-[url('/assests/wire.jpeg')]",
            title: "Wire Rod",
        },
        {
            img: "bg-[url('/assests/pickling.jpeg')]",
            title: "Pickling",
        },
        {
            img: "bg-[url('/assests/3.jpeg')]",
            title: "Heat Treatment",
        },
        {
            img: "bg-[url('/assests/4.1.jpeg')]",
            title: "Wire Drawing",
        },
        {
            img: "bg-[url('/assests/6.jpeg')]",
            title: "Packing",
        },
        {
            img: "bg-[url('/assests/dispatch.webp')]",
            title: "Dispatch",
        },
    ]
    return (
        <div id="process" className="w-full scroll-mt-[8rem] h-fit py-20 px-4 md:px-16">
            <div className="w-full flex flex-col items-center text-center lg:max-w-6xl lg:mx-auto">
                <h1 className="capitalize bg-primary px-4 py-2 font-medium text-secondary rounded">Areas of Service</h1>
                <h1 className="text-secondary text-3xl lg:text-5xl font-bold my-3 lg:my-6">Process</h1>
                <p className="text-secondary text-center lg:text-lg">
                    We follow our process of producing best quality material very rigorously. We know the importance the process has 
                    on quality of the product
                </p>
                <div className="w-full my-3 md:my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
                    {
                        process.map((process, index) => (
                            <div key={index}>
                                <div className={`${process.img} bg-cover bg-no-repeat bg-bottom w-full h-[20rem] rounded`}></div>
                                <h1 className="text-lg font-medium mt-2">{process.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Process