import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

interface ScrollLinkProps extends LinkProps {
  href: string;
  offset?: number;
  children: React.ReactNode;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({
  href,
  offset = 0,
  ...rest
}) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      const targetElement = document.querySelector(href.toString());
      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          offset;
        scroll.scrollTo(targetPosition);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [href, offset, router.events]);

  return <Link href={href} {...rest} />;
};

export default ScrollLink;
