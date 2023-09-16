'use client'

import { Fragment, useContext } from "react";
import { styles } from "@/utils/index";
import { FaBagShopping } from 'react-icons/fa6';

import NavItems from "./NavItems";
import NavBarModal from "./NavBarModal";
import { GlobalContext } from "@/context";

type UserProps = {
    role: `admin`
}

const isAdminView = false;
const isAuthUser = false;
const user: UserProps = {
    role: `admin`
}


const Navbar = () => {

    const { showNavModal, setShowNavModal } = useContext(GlobalContext)

    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center cursor-pointer">
                        <span className="flex justify-center items-center gap-3 self-center text-2xl font-semibold whitespace-nowrap">
                            Ecommerce
                            <span className="hidden lg:block"><FaBagShopping /></span>
                        </span>
                    </div>
                    <div className="flex md:order-2 gap-1">
                        {
                            !isAdminView && isAuthUser ?
                                <Fragment>
                                    <button className={styles.button}>Account</button>
                                    <button className={styles.button}>Cart</button>
                                </Fragment>
                                : null
                        }
                        {
                            user.role === `admin` ?
                                isAdminView ?
                                    <button className={styles.button}>Client View</button>
                                    : <button className={styles.button}>Admin View</button>
                                : null
                        }
                        {
                            isAuthUser ?
                                <button className={styles.button}>Logout</button>
                                : <button className={styles.button}>Login</button>
                        }

                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="
                                inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg md:hidden
                                hover:bg-gray-100 focus:outline-none
                                dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-200 
                                transition-all"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={() => setShowNavModal((prev) => !prev)}>
                            <span className="sr-only">Open menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </button>

                    </div>
                    <NavItems isAdminView={isAdminView} />
                </div>
            </nav>
            <NavBarModal showNavModal={showNavModal} isAdminView={isAdminView} />
        </>
    )
}

export default Navbar