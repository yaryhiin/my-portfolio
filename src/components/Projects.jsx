import walletImg from "../images/WalletApp.png";
import barbershopImg from "../images/LandingBarber.png";

const Projects = () => {
  return (
    <div className="projectsSection">
      <h1>Projects</h1>
      <div className="projectsContainer">
        <div className="project">
          <h2 className="projectName">Wallet App</h2>
          <p className="projectDescription">
            A simple and clean app to track personal finances. Manage multiple
            accounts in different currencies, add income/expenses, transfer
            money between accounts, and view transaction history.
          </p>
          <img
            src={walletImg}
            alt="Wallet App Screenshot"
            className="projectImage"
          />
          <a
            href="https://wallet-react-yaryhiin.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
          >
            View Demo
          </a>
        </div>
        <div className="project">
          <h2 className="projectName">Barbershop Landing Page</h2>
          <p className="projectDescription">
            A fast, mobile-first landing page designed for a local barbershop.
            It clearly presents services, builds trust with testimonials, and
            drives visitors to book or contact the business.
          </p>
          <img
            src={barbershopImg}
            alt="Barbershop Landing Page Screenshot"
            className="projectImage"
          />
          <a
            href="https://yaryhiin-barber-landing.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
          >
            View Demo
          </a>
        </div>
        <div className="project">
          <h2 className="projectName">Landing Page Template #2</h2>
          <p className="projectDescription">
            This is one more example of a responsive landing page template with
            a modern design.
          </p>
          <img
            src=""
            alt="Landing Page Template #2 Screenshot"
            className="projectImage"
          />
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
          >
            View Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
