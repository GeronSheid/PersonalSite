import React from 'react';
import Navigation from "@/components/Navigation";
import Link from "next/link";

const navLinks = [
    {label: 'Обо мне', href: '/'},
    {label: 'Мои работы', href: '/portfolio'},
    {label: 'Контакты', href: '/contacts'},
]

const Header = () => {
    return (
        <header className='bg-blue min-h-[60px] flex items-center w-full'>
            <div className='sectionContainer flex items-center gap-10'>
                <Link href='/' className='text-lightGray'>
                    Logo
                </Link>
                <Navigation navLinks={navLinks}/>
            </div>
        </header>
    );
};

export default Header;