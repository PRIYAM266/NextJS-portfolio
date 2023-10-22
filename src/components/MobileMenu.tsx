import { menuItems } from "@/data";
import Link from "next/link";

type MobileMenuProps = {
  handleClick: () => void;
};

const MobileMenu = ({ handleClick }: MobileMenuProps) => {
  return (
    <>
      {menuItems.map((item) => (
        <li key={item.id} className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            href={item.href}
            className="hover:border-b-2 hover:border-pink-600"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default MobileMenu;
