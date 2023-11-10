'use client';
import { updateState } from '@/lib/update-menu-state';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
export default function ViewProjectsBtn() {
    const dispatch = useDispatch();
    return (
        <Link
            href="#projects"
            className="py-2 px-10 bg-transparent border border-primary text-primary hover:text-white hover:bg-primary  transition-all transform duration-300 font-medium text-lg"
            scrollsmooth
            onClick={() => updateState(dispatch)}
        >
            View Projects
        </Link>
    );
}
