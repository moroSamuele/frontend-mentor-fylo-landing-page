import Image from "next/image"
import Link from "next/link"


const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <Image
          src="/images/logo.svg"
          alt="Flyo"
          fill={true}
        />
      </div>
      <nav>
        <Link href="/">Features</Link>
        <Link href="/">Team</Link>
        <Link href="/">Sign in</Link>
      </nav>
    </header>
  )
}

export default Header