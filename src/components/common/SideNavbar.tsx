
function SideNavbar() {
    const navItem = [
        "PROBLEM 1",
        "PROBLEM 2",
        "PROBLEM 3",
        "PROBLEM 4",
        "PROBLEM 5",
        "PROBLEM 6",
        "PROBLEM 7",
    ]
    return (
        <nav className="text-white">
            {navItem.map(item => <p className="cursor-pointer">{item}</p>)}
        </nav>
    )
}

export default SideNavbar
