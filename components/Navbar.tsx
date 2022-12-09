'use client'
import {Navbar} from "flowbite-react"
import Image from "next/image"
import {usePathname} from "next/navigation";

const navLinks = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/about",
        label: "About",
    },
    {
        href: "/contact",
        label: "Contact",
    },
    {
        href: "adopt",
        label: "Adopt",
    },
    {
        href: "favorites",
        label: "Favorites",
    },
    {
        href: "support",
        label: "Support",
    }
    ]

export default function Nav() {
    const pathname = usePathname()
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className="border-b-2"
        >
            <Navbar.Brand href="/">
                <Image
                    height={24}
                    width={24}
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    PetBond
                </span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                {/*<Navbar.Link*/}
                {/*    href="/"*/}
                {/*    active={usePathname() === "/"}*/}
                {/*>*/}
                {/*    <span className="text-lg">Home</span>*/}
                {/*</Navbar.Link>*/}
                {/*<Navbar.Link*/}
                {/*    href="/about"*/}
                {/*    active={usePathname() === "/about"}*/}
                {/*>*/}
                {/*    <span className="text-lg">About</span>*/}

                {/*</Navbar.Link>*/}
                {/*<Navbar.Link*/}
                {/*    href="/adopt"*/}
                {/*    active={usePathname() === "/adopt"}>*/}
                {/*    <span className="text-lg">Adopt</span>*/}
                {/*</Navbar.Link>*/}
                {/*<Navbar.Link*/}
                {/*    href="/contact"*/}
                {/*    active={usePathname() === "/contact"}*/}
                {/*>*/}
                {/*    <span className="text-lg">Contact</span>*/}

                {/*</Navbar.Link>*/}
                {/*<Navbar.Link*/}
                {/*    href="/favorites"*/}
                {/*    active={usePathname() === "/favorites"}*/}
                {/*>*/}
                {/*    <span className="text-lg">Favorites</span>*/}
                {/*</Navbar.Link>*/}
                {navLinks.map((link) => (
                    <Navbar.Link
                        key={link.href}
                        href={link.href}
                        active={pathname === link.href}
                    >
                        <span className="text-lg">{link.label}</span>
                    </Navbar.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>

    )
}
