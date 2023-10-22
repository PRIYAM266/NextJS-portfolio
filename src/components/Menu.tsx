import { menuItems } from "@/data";
import Link from "next/link";

const Menu = () => {
  return (
    <ul className="hidden md:flex">
      {menuItems.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className="hover:border-b-2 hover:border-pink-600"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
