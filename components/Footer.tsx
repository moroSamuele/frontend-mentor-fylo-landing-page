import Image from "next/image"
import Link from "next/link"
import { NextFont } from "@next/font/dist/types"


const Footer = ({
  fontOpenSans,
} : {
  fontOpenSans: NextFont
}) => {
  return (
    <footer>
      <div className="footer__content">
        <div className="footer__footerMainInfos">
          <div className="footerMainInfos__logo"></div>
          <div className="footerMainInfos__contacts">
            <p className={fontOpenSans.className}>
              <Image
                src="/images/icon-phone.svg"
                alt="Our phone number"
                width="20"
                height="20"
              />
              Phone: +1-543-123-4567
            </p>
            <p className={fontOpenSans.className}>
              <Image
                src="/images/icon-email.svg"
                alt="Our email"
                width="20"
                height="16"
              />
              example@fylo.com
            </p>
          </div>
        </div>
        <div className={`footer__secondaryLinksContainer ${fontOpenSans.className}`}>
          <nav className="footer__secondaryLinksList">
            <Link href="#">About Us</Link>
            <Link href="#">Jobs</Link>
            <Link href="#">Press</Link>
            <Link href="#">Blog</Link>
          </nav>
        </div>
        <div className="footer__secondaryLinksContainer">
          <nav className="footer__secondaryLinksList">
            <Link href="#">Contact Us</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
          </nav>
        </div>
        <div className="footer__socialsContainer">
          <Link href="#" className="footer__socialsContainer--facebook"></Link>
          <Link href="#" className="footer__socialsContainer--twitter"></Link>
          <Link href="#" className="footer__socialsContainer--instagram"></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer