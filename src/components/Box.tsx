import Image from "next/image";

interface PropType {
  src: string;
  alt: string;
  title: string;
}

const Box = ({ src, alt, title }: PropType) => {
  return (
    <div className="shadow-md shadow-dark-blue-2 hover:scale-110 duration-500">
      <Image src={src} alt={alt} className="mx-auto" width={70} height={70} />
      <p className="my-2">{title}</p>
    </div>
  );
};

export default Box;
