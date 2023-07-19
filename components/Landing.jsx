// import React from 'react'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Landing = () => {
    return (
        <div className="w-full h-full bg-fixed bg-[url('/assests/hero1.avif')] bg-cover bg-no-repeat">
            <div className="w-full px-4 md:px-16 lg:px-32 bg-gradient-to-r from-black to-transparent lg:h-screen lg:flex lg:items-center">
                <div className="py-[140px] lg:w-2/3">
                    <div className='p-3 bg-slate-500/40 flex gap-4 items-center md:w-fit'>
                        <SettingsOutlinedIcon fontSize="large"  className="text-yellow-500"/>
                        <h1 className="text-white lg:text-xl">Imporove our Customers lives by providing effective solutions.</h1>
                    </div>
                    <div className="my-3 lg:my-6">
                        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold capitalize">Ball Bearing Wire</h1>
                    </div>
                    <div>
                        <a href="/#products" className="py-4 px-6 hover:bg-yellow-600 bg-primary font-medium">View Services</a>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Landing