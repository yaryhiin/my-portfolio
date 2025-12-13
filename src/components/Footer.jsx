const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="aboutMeSection">
        <h1 className="aboutMeName">About Me</h1>
        <p className="aboutMeDescription">
          I build fast, clean landing pages for small businesses that want more
          customers. I focus on clarity, speed, and conversion — no bloated
          designs, just what works.
        </p>
      </div>
      <div className="contactSection">
        <h1 className="contactTitle">Contact Me</h1>
        <a href="mailto:aderhilyt@gmail.com" className="contactLink">
          Mail
        </a>
        <a href="https://t.me/yaryhin" className="contactLink">
        Telegram
        </a>
      </div>
    </div>
  );
};

export default Footer;
