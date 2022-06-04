//dependencies
import Image from "next/image";
//components
import Overlay from "./Overlay";
import Portal from "./Portal";
//styles
import styles from "../styles/Contact.module.css";
import { InformationCircleIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Contact({ show, onClose }) {
    function Social({ href, text, icon }) {
        return (
            <a href={href} target="_blank" rel="noreferrer" className={styles.social}>
                <p>{text}</p>
                {icon}
            </a>
        );
    }

    return (
        <Portal selector="#modalRoot">
            <Overlay title="Contact" show={show} onClose={onClose}>
                <div className={styles.announcement}>
                    <InformationCircleIcon />
                    <p>Since the 1st of January 2021, Sebastien Green, Stephen&apos;s son, has been taking care of this website. The below contact methods have been updated accordingly. Commercial requests are not longer accepted.</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.webmaster}>
                        <Image alt="Sebastien Green's logo" src="/assets/sg.png" height={54} width={200} quality={70} />
                        <p>Developer & Webmaster</p>
                    </div>
                    <div className={styles.socials}>
                        <Social href="mailto:sebastien@smkg.me" text="sebastien@smkg.me" icon={<PaperAirplaneIcon />} />
                        <Social href="https://linkedin.com/in/sebastiengreen" text="Sebastien Green" icon={<FontAwesomeIcon icon={faLinkedinIn} />} />
                        <Social href="https://github.com/sebygreen" text="sebygreen" icon={<FontAwesomeIcon icon={faGithub} />} />
                        <Social href="https://twitter.com/sebygreen" text="sebygreen" icon={<FontAwesomeIcon icon={faTwitter} />} />
                    </div>
                </div>
            </Overlay>
        </Portal>
    );
}
