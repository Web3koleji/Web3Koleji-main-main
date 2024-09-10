"use client";
import "./footer.css";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


interface FooterBarProps {
}

const FooterBar: React.FC<FooterBarProps> = ({ }) => {

    const router = useRouter();

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} >
            <div style={{ display: "flex", flexDirection: "row" }}>
                <ul className="footer" >
                    <div className="footer-item" >
                        <FontAwesomeIcon icon={faInstagram} />
                        <a href="https://www.instagram.com/web3koleji/" target="_blank" rel="noopener noreferrer" className="footer-text">
                            Web3Koleji
                        </a>
                    </div>
                    <div className="footer-item">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <a href="https://www.linkedin.com/company/web3koleji/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer-text">
                            Web3Koleji
                        </a>
                    </div>
                    <div className="footer-item">
                        <FontAwesomeIcon icon={faXTwitter} />
                        <a href="https://x.com/Web3Koleji" target="_blank" rel="noopener noreferrer" className="footer-text">
                            Web3Koleji
                        </a>
                    </div>
                    <div className="footer-item">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:Web3Koleji@protonmail.com" className="footer-text">
                            Web3Koleji@protonmail.com
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default FooterBar;
