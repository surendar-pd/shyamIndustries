import React, { useState, useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import { useNavigation } from "react-router-dom";

const Header = () => {

    // const navigate = useNavigation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [header, setHeader] = useState("border-none")

    const listenScrollEvent = () => {
        window.scrollY > 10
            ? setHeader("shadow-md")
            : setHeader("border-none")
    }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })

    return (
        <>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className="flex flex-col gap-2 p-4">
                    <a href={"/#"} className="font-medium" onClick={handleClose}>Home</a>
                    <a href={"/#about"} className="font-medium" onClick={handleClose}>About</a>
                    <a href={"/#products"} className="font-medium" onClick={handleClose}>Products</a>
                    <a href={"/#process"} className="font-medium" onClick={handleClose}>Process</a>
                    <a href={"/#quality"} className="font-medium" onClick={handleClose}>Quality</a>
                    <a href={"/#contact"} className="font-medium" onClick={handleClose}>Contact Us</a>
                </div>
            </Menu>
            <header className={`${header} bg-primary w-full p-4 lg:px-16 transition-all duration-300 flex items-center justify-between fixed top-0`}>
                <div className="">
                    {/* <a href="/" className="font-semibold md:text-xl">Shree Shyam Industries</a> */}
                    <img src="/logo.png" alt="logo" className="w-20"/>
                </div>
                <div className="hidden md:flex md:gap-6">
                    <a href="/#" className="font-medium hover:text-white transition-all duration-300">Home</a>
                    <a href="/#about" className="font-medium hover:text-white transition-all duration-300">About</a>
                    <a href="/#products" className="font-medium hover:text-white transition-all duration-300">Products</a>
                    <a href="/#process" className="font-medium hover:text-white transition-all duration-300">Process</a>
                    <a href="/#quality" className="font-medium hover:text-white transition-all duration-300">Quality</a>
                    <a href="/#contact" className="font-medium hover:text-white transition-all duration-300">Contact Us</a>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    <MenuOutlinedIcon />
                </div>
            </header>
        </>
    )
}

export default Header