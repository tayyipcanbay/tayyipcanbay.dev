'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ModeToggle } from './mode-toogle';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import SocialMediaNav from './social-media-nav';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '@/lib/update-menu-state';
import { selectMenuState } from '@/store/menu-store';

export default function Header() {
    const dispatch = useDispatch();

    const activeMenu = useSelector(selectMenuState);

    const [navbarOpen, SetNavbarOpen] = useState(false);

    useEffect(() => {
        SetNavbarOpen(false);
    }, [activeMenu]);

    const changeActiveMenu = () => updateState(dispatch);

    return (
        <>
            <header className="supports-backdrop-blur:bg-background/60 fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div
                    className={`container flex h-14 sm:h-14 items-center max-w-screen-xl`}
                >
                    <div className="sm:w-[172px] w-[160px]">
                        <LogoLink changeActiveMenu={changeActiveMenu} />
                    </div>

                    <nav className="items-center sm:ml-auto flex w-full sm:w-auto sm:flex sm:space-x-6 text-sm font-medium">
                        <ul className="hidden sm:flex sm:mt-0 sm:flex-row sm:space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8">
                            <li>
                                <HomeLink
                                    activeMenu={activeMenu}
                                    changeActiveMenu={changeActiveMenu}
                                />
                            </li>
                            <li>
                                <AboutLink
                                    activeMenu={activeMenu}
                                    changeActiveMenu={changeActiveMenu}
                                />
                            </li>
                            <li>
                                <ResumeLink
                                    activeMenu={activeMenu}
                                    changeActiveMenu={changeActiveMenu}
                                />
                            </li>
                            <li>
                                <ProjectLink
                                    activeMenu={activeMenu}
                                    changeActiveMenu={changeActiveMenu}
                                />
                            </li>
                            <li>
                                <CoursesLink
                                    activeMenu={activeMenu}
                                    changeActiveMenu={changeActiveMenu}
                                />
                            </li>
                            <li>
                                <ContactLink
                                    activeMenu={activeMenu}
                                    changeActiveMenu={changeActiveMenu}
                                />
                            </li>
                        </ul>
                    </nav>
                    <SocialMediaNav className={'sm:ml-auto flex'} />
                </div>
            </header>
        </>
    );
}

function LogoLink({ changeActiveMenu }) {
    return (
        <Link
            href="#home"
            className="w-full font-bold text-center"
            onClick={() => {
                changeActiveMenu();
            }}
            scrollsmooth
        >
            <div className="sm:hidden w-[65px]">TC</div>
            <span className="hidden sm:block">Tayyip Canbay</span>
        </Link>
    );
}

const HomeLink = ({ activeMenu = '', className = '', changeActiveMenu }) => (
    <Link
        className={`block transition-colors hover:text-foreground/80 p-2 sm:p-0 ${activeMenu == '#home' ? 'text-foreground' : 'text-foreground/60'
            } ${className}`}
        onClick={changeActiveMenu}
        href="#home"
        scrollsmooth
    >
        Home
    </Link>
);

const AboutLink = ({ activeMenu = '', className = '', changeActiveMenu }) => (
    <Link
        className={`block transition-colors hover:text-foreground/80 p-2 sm:p-0 ${activeMenu == '#about' ? 'text-foreground' : 'text-foreground/60'
            } ${className}`}
        onClick={changeActiveMenu}
        href="#about"
    >
        About
    </Link>
);

const ResumeLink = ({ activeMenu = '', className = '', changeActiveMenu }) => (
    <Link
        className={`block transition-colors hover:text-foreground/80 p-2 sm:p-0 ${activeMenu == '#resume' ? 'text-foreground' : 'text-foreground/60'
            } ${className}`}
        onClick={changeActiveMenu}
        href="#resume"
    >
        Resume
    </Link>
);

const ProjectLink = ({ activeMenu = '', className = '', changeActiveMenu }) => (
    <Link
        className={`block transition-colors hover:text-foreground/80 p-2 sm:p-0 ${activeMenu == '#projects' ? 'text-foreground' : 'text-foreground/60'
            } ${className}`}
        href="#projects"
        onClick={changeActiveMenu}
    >
        Projects
    </Link>
);

const CoursesLink = ({ activeMenu = '', className = '', changeActiveMenu }) => (
    <Link
        className={`block transition-colors hover:text-foreground/80 p-2 sm:p-0 ${activeMenu == '#courses' ? 'text-foreground' : 'text-foreground/60'
            } ${className}`}
        href="#courses"
        onClick={changeActiveMenu}
    >
        Courses
    </Link>
);

const ContactLink = ({ activeMenu = '', className = '', changeActiveMenu }) => (
    <Link
        className={` block transition-colors hover:text-foreground/80 p-2 sm:p-0 text-foreground${activeMenu == '#contact' ? '' : '/60'
            } ${className}`}
        href="#contact"
        onClick={changeActiveMenu}
    >
        Contact
    </Link>
);
