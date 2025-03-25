import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import logo from "@/assets/images/tech.jpg"
import Image from "next/image";

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])

  return (
    <header>
       <div className='logo'>
          <Link href='/'>
            {/* <TitleLogo title='`${tech}`' caption='' className='logomin' /> */}
            <Image src={logo} alt="Tech Logo" width={150} height={40} priority className="logomin" />
          </Link>
        
      <div className='container'>
       
        <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(false)}>
          <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>Home</Link>
          <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>Agency</Link>
          <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>Team</Link>
          <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>Services</Link>
          <Link href='/showcase' className={activeLink == "/showcase" ? "activeLink" : "none"}>Showcase</Link>
          <Link href='/blogs' className={activeLink == "/blogs" ? "activeLink" : "none"}>Blog</Link>
          <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>Contact</Link>
          <Link href='/career' className={activeLink == "/career" ? "activeLink" : "none"}>Career</Link>
         
        </nav>
        <button className='button-primary login-btn'>
            Login
          </button>
       
        <button onClick={() => setOpen(!open)} className="menu-toggle">
          {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </div>
      </div>
    </header>
  )
}

export default Header
