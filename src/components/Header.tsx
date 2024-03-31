import { type ReactNode } from "react";

type HeaderProps = {
    children: ReactNode;
    image: { src: string; alt: string };
}

function Header({ image, children }: HeaderProps) {
    return (
        <header className="flex flex-col justify-center items-center">
            <img width={70} {...image} />
            {children}
        </header>
    );
}

export default Header;