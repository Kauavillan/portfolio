import {Link} from 'react-scroll';
export default function NavbarLinks({link, name}){
    return(
    <li>
        <Link 
        activeClass="active"
        to={link}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        ><span>{name}</span></Link>
    </li>)
}