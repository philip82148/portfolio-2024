import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container mx-auto py-8 flex justify-between items-center">
        <div className="text-base pl-3">© 2024 Ryota Sasaki</div>
        <div className="flex items-center">
          <a
            href="https://github.com/philip82148/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-square btn-ghost"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://x.com/philip82148"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-square btn-ghost"
          >
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/ryota-sasaki-philip82148"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-square btn-ghost"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};
