import { socialLinks } from "@/data";

const SocialMenu = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        {socialLinks.map((item) => (
          <li
            key={item.id}
            className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${item.bgColor}`}
          >
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href={item.href}
            >
              {item.title} <item.icon size={30} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMenu;
