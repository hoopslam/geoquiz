import { FooterWrapper } from "../styles/Footer.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="attribution">
        <p>
          Made by <a href="https://devcho.com">David Cho</a> &copy;2021
        </p>
        <p>
          Background photo by{" "}
          <a href="https://unsplash.com/@nsx_2000">Krzysztof Hepner</a>
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
