'use client'
import React, {useState} from 'react';
import {usePathname} from "next/navigation";
import {motion, AnimateSharedLayout} from "framer-motion";
import Link from "next/link";

type navLink = {
    label: string
    href: string
}

type Props = {
    navLinks: navLink[]
}

const Navigation = ({navLinks} : Props) => {
    const pathName = usePathname();
    const [activeIndex, setActive] = useState(0)
    return (
        <nav>
            <ul className='flex gap-6'>
                {navLinks.map((link, index) =>{
                    const isActive = pathName === link.href;
                    return (
                        <li
                            key={link.label} className='text-lightGray'
                        >
                            <Link
                                href={link.href}
                                className={isActive ? 'text-violet text-xl' : 'text-xl transition-colors duration-500'}
                            >
                                {link.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Navigation;