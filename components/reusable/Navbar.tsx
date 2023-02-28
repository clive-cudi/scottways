import { useMemo, useState, useEffect } from "react";
import styles from "@styles/components/reusable/navBar.module.scss";
import type { NavLink } from "@customtypes/index";
import Image from "next/image";
import { CloseIcon } from "../assets/CloseIcon";
import { MenuIcon} from "../assets/MenuIcon";
import { useRouter } from "next/router";

interface NavBar_Props {
    isDOMReady?: boolean
    navLinksOverride?: NavLink[],
    variant?: "checkout" | "main",
    className?: string
}

export const Navbar = ({ isDOMReady, navLinksOverride, variant, className }: NavBar_Props) => {
    const navLinks = useMemo<NavLink[]>(() => navLinksOverride ?? [
        {
            label: "Home",
            link: "#home",
            isActive: false
        },
        {
            label: "Services",
            link: "#services",
            isActive: false
        },
        {
            label: "About",
            link: "#about",
            isActive: false
        },
        {
            label: "Contact",
            link: "#contact",
            isActive: false
        }
    ], []);
    const [showNavBar, setShowNavBar] = useState<boolean>(false);
    const [isNavScroll, setIsNavScroll] = useState<boolean>(false);
    const router = useRouter();

    function toggleShowNavBar(): void {
        if (showNavBar === true) {
            setShowNavBar(false);
        } else {
            setShowNavBar(true)
        }
    }

    function toggleIsNavScroll(override?: boolean): void {
        if (override) {
            setIsNavScroll(override);
            return;
        }

        if (isNavScroll === true) {
            setIsNavScroll(false);
            return;
        } else {
            setIsNavScroll(true);
            return;
        }
    }

    function handleScroll(e: Event) {
        if (window.scrollY > 400) {
            setIsNavScroll(true);
        } else {
            setIsNavScroll(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`${styles.nav_wrapper} ${styles[`scrolled_${isNavScroll}`]} ${styles[`nav_wrapper_${variant}`]} ${className}`}>
            <div className={styles.nav_col}>
                <div className={styles.nav_logo_wrapper} onClick={() => {router.push("/")}}>
                    <h1>SCOTTWAYS TV</h1>
                </div>
            </div>
            <div className={`${styles.nav_col}`}>
                <div className={`${styles.nav_links} ${styles[`show_${showNavBar}`]}`}>
                    <ul>
                        {navLinks.map((lnk, ix) => <li key={ix}><a href={`${lnk.link}`} onClick={() => {setShowNavBar(false)}}>{lnk.label}</a></li>)}
                    </ul>
                </div>
                <button className={styles.nav_toggle_btn} onClick={() => {toggleShowNavBar()}}>
                    {showNavBar === true ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>
        </nav>
    )
}