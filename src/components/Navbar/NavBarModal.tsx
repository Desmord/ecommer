`use client`
import {
    adminNavOptions,
    navOptions,
} from "@/utils";

type NavBarModalProps = {
    showNavModal: boolean,
    isAdminView: boolean,
}

const NavBarModal = ({
    showNavModal,
    isAdminView,
}: NavBarModalProps) => {
    return (
        <div className={`
            fixed w-full h-full flex-col bg-slate-50
            flex justify-start p-6 pt-24
            ${showNavModal ? `md:hidden` : `hidden`} 
        `}>
            {
                isAdminView ? adminNavOptions.map((item) =>
                    <li
                        className="
                            cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0
                            hover:scale-110 transition-all"
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
        </div>
    )
}

export default NavBarModal