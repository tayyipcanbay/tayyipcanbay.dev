"use client"

import { actions } from "@/store/menu-store";

export const updateState = (dispatch) => {
    const setActiveMenuItem = (item) => dispatch(actions.SetMenu(item));

    const homeElement = document.getElementById('home');
    const aboutElement = document.getElementById('about');
    const resumeElement = document.getElementById('resume');
    const projectsElement = document.getElementById('projects');
    const contactElement = document.getElementById('contact');

    const update = () => {
        if (window.pageYOffset < 650) {
            setActiveMenuItem('#home');
        } else if (aboutElement && window.pageYOffset >= 650 && window.pageYOffset < 1300) {
            setActiveMenuItem('#about');
        } else if (resumeElement && window.pageYOffset >= 1300 && window.pageYOffset < 1950) {
            setActiveMenuItem('#resume');
        } else if (projectsElement && window.pageYOffset >= 1950 && window.pageYOffset < 4000) {
            setActiveMenuItem('#projects');
        } else if (contactElement && window.pageYOffset >= 4000 && window.pageYOffset < 5000) {
            setActiveMenuItem('#courses');
        } 
        else if (contactElement && window.pageYOffset >= 5000) {
            setActiveMenuItem('#contact');
        }
    }

    setTimeout(() => {
        update()
    }, 250)

    setTimeout(() => {
        update()
    }, 750)

}
