'use client'
import {
    adminNavOptions,
    navOptions,
} from "@/utils";

type NavItemsType = {
    isAdminView: boolean,
}

const NavItems = ({
    isAdminView,
}: NavItemsType) => {
    return (
        <div className={`
            items-center justify-between w-full md:flex md:w-auto ${isAdminView ? `` : `hidden`}`}
            id="nav-items">
            <ul className="
                flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg md:flex-row 
                md:space-x-8 md:mt-0 md:border-0 bg-white
            ">
                {
                    isAdminView ? adminNavOptions.map((item) =>
                        <li
                            className="
                                cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0
                                hover:scale-110 transition-all
                            "
                            key={item.id}>
                            {item.label}
                        </li>
                    ) : navOptions.map((item) =>
                        <li
                            className="
                            cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0
                            hover:scale-110 transition-all"
                            key={item.id}>
                            {item.label}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default NavItems;