import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, margin: "10px 0" }}>
        This is Khaled Elhannat's personal project and is not an official website, Note that it is not affiliated with NASA or SpaceX in any way.
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
