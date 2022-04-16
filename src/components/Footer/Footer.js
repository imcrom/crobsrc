import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <div id='footer' className="footer">
      <h1 style={{ color: 'green',
                   textAlign: "center", 
                   marginTop: '20px',
                   marginBottom: '20px',
                   fontFamily: 'NINJA'}}>
        CROBNOBI
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Whitepaper</Heading>
            <FooterLink href="./whitepaper.pdf">Crobnobi Whitepaper v1.0</FooterLink>
          </Column>
          <Column>
            <Heading>Page</Heading>
            <FooterLink href="#overlay">Home</FooterLink>
            <FooterLink href="#tokenomics">Tokenomics</FooterLink>
            <FooterLink href="#roadmap">Roadmap</FooterLink>
            <FooterLink href="#footer">Socials</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="mail-to: administrator@crobnobi.com">Website Admin</FooterLink>
            <FooterLink href="mail-to: admin@crobnobi.com">Contract Developer</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
           
            <FooterLink href="https://twitter.com/crinjatoken">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://t.me/CrobnobiToken">
              <i className="fab fa-telegram">
                <span style={{ marginLeft: "10px" }}>
                  Telegram
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;