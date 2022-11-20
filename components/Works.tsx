import Image from "next/image"
import Link from "next/link"
import { NextFont } from "@next/font/dist/types"


const Works = ({
  fontOpenSans,
} : {
  fontOpenSans: NextFont
}) => {
  return (
    <section className="main__howItWorks">
      <Image
        src="/images/bg-curve-mobile.svg"
        alt="How it works"
        fill
        className="howItWorks__curveBg howItWorks__curveBg--mobile"
      />
      <Image
        src="/images/bg-curve-desktop.svg"
        alt="How it works"
        fill
        className="howItWorks__curveBg howItWorks__curveBg--desktop"
      />
      <div className="howItWorks__container">
        <div className="howItWorks__image">
          <Image
            src="/images/illustration-2.svg"
            alt="How it works"
            fill
          />
        </div>
        <div className="howItWorks__content">
          <h2>Stay productive, wherever you are</h2>
          <p className={fontOpenSans.className}>
            Never let location be an issue when accessing
            your files. Fylo has you covered for all of your file
            storage needs.
          </p>
          <p className={fontOpenSans.className}>
            Securely share files and folders with friends,
            family and colleagues for live collaboration. No
            email attachments required!
          </p>
          <div className="howItWorks__linkTo">
            <Link href="/">
              <span className={fontOpenSans.className}>See how Fylo works</span>
              <div className="linkTo__arrow"></div>
            </Link>
          </div>
          <div className="howItWorks__quoteHowItWorks">
            <div className="quoteHowItWorks__container">
              <div className="quoteHowItWorks__image">
                <Image
                  src="/images/icon-quotes.svg"
                  alt="Quote"
                  fill
                />
              </div>
              <p className={fontOpenSans.className}>
                Fylo has improved our team productivity by an
                order of magnitude. Since making the switch
                our team has become a well-oiled collaboration
                machine.
              </p>
              <div className="quoteHowItWorks__quoteAvatar">
                <div className="quoteAvatar__image">
                  <Image
                    src="/images/avatar-testimonial.jpg"
                    alt="Quote testimonial"
                    fill
                  />
                </div>
                <div className="quoteAvatar__avatarInfos">
                  <p className={fontOpenSans.className}>
                    Kyle Burton
                  </p>
                  <small className={fontOpenSans.className}>
                    Founder & CEO, Huddle
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works