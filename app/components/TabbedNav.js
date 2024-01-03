'use client'

import React, { useEffect } from "react";
import { Link as LinkScroll } from 'react-scroll';

const TabbedNav = () => {
    useEffect(() => {
        window.onscroll = function () { myFunction() };

        var navlist = document.getElementById("nav");
        var sticky = navlist.offsetTop;

        /* Function to stick the nav bar */
        function myFunction() {
            if (window.scrollY >= sticky) {
                navlist.classList.add("nav-sticky")
            }
            else {
                navlist.classList.remove("nav-sticky");
            }
        }


    })

    return (
        <>
            <nav
                id="nav"
                className={`bg-white text-black z-10`}
            >
                <div className="innerDiv">
                    <div className="flex items-center">
                        <LinkScroll
                            to="about"
                            className="border-b-2 border-transparent px-6 lg:px-12 pb-[15px] pt-[15px] uppercase cursor-pointer text-xs md:text-[15px] font-medium"
                            smooth={true}
                            offset={-200}
                            duration={500}
                            spy={true}
                        >
                            About
                        </LinkScroll>
                        <LinkScroll
                            className="border-b-2 border-transparent px-6 lg:px-12 pb-[15px] pt-[15px] uppercase cursor-pointer text-xs md:text-[15px] font-medium"
                            to="instructor"
                            smooth={true}
                            offset={-200}
                            duration={500}
                            spy={true}
                        >
                            Instructor
                        </LinkScroll>
                        <LinkScroll
                            className="border-b-2 border-transparent px-6 lg:px-12 pb-[15px] pt-[15px] uppercase cursor-pointer text-xs md:text-[15px] font-medium"
                            to="review"
                            smooth={true}
                            offset={-200}
                            duration={500}
                            spy={true}
                        >
                            Review
                        </LinkScroll>
                    </div>
                </div>
            </nav>
            <style global jsx>{`
  .active{
border-bottom: 2px solid rgb(126, 34, 206) !important;
}
  `}</style>
        </>
    );
};

export default TabbedNav;
