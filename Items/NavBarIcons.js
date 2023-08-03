import Link from "next/link";

export default function NavbarIcons({link, icon}){
    return(
        <Link href={link} target="_blank">{icon}</Link>)
}