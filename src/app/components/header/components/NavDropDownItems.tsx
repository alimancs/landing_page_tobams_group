const NavDropDownItems = ({ items }: { items: string[] }) => {
    return (
        <div className="flex flex-col">
            {items.map((item, index) => (
                <a key={index} href="#" className="text-gray-700 hover:text-gray-900 px-4 py-2">
                    {item}
                </a>
            ))}
        </div>
    );
}

export default NavDropDownItems;
