
import { NavLink } from "react-router-dom"
import { route } from "../../utils/constant"

function SideNavbar() {
    const navItem = [
        { label: "PROBLEM 1", path: route.prblm1 },
        { label: "PROBLEM 2", path: route.prblm2 },
    ]

    return (
        <nav className="flex flex-col gap-2 text-white">
            {navItem.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                        `rounded px-3 py-2 transition-colors ${
                            isActive
                                ? "bg-white text-neutral-900"
                                : "hover:bg-neutral-700"
                        }`
                    }
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    )
}

export default SideNavbar
