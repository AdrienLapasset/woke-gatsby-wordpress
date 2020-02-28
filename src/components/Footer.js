import React from 'react';
import Flex from 'src/components/global/Flex'
import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
      <Flex justifyBetween>
        <Flex column>
          <a href=""
            target="_blank"
            rel="noopener noreferrer">
            Facebook
          </a>
          <a href=""
            target="_blank"
            rel="noopener noreferrer">
            Instagram
          </a>
          <a href=""
            target="_blank"
            rel="noopener noreferrer">
            Linkedin
          </a>
        </Flex>
        <Flex column>
          <Link to="/intro">Qui est Woke ?</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/blog">Blog</Link>
        </Flex>
        <Flex column>
          <Link to="/Volunteer">Agir</Link>
          <Link to="/Volunteer">Faire un don</Link>
        </Flex>
        <Flex column>
          <p>Woke</p>
          <p>55 allée des côtes de Chanturgues</p>
          <p>63100 Clermont-Ferrand</p>
          <a href="mailto:contact@woke.fr"
            target="_blank"
            rel="noopener noreferrer">
            contact@woke.fr
          </a>
          <a href="tel:+33669640007" >06 69 64 00 07</a>
        </Flex>
      </Flex>
      <Flex mt={60} justifyBetween>
        <Flex>
          © {new Date().getFullYear()} Woke.&nbsp;
        <a href="https://alor.design/"
            target="_blank"
            rel="noopener noreferrer">
            Création : Alor
        </a>
          &nbsp;
          -
          &nbsp;
        <a href="https://adrienlapasset.fr/"
            target="_blank"
            rel="noopener noreferrer">
            Développement : Adrien Lapasset
        </a>
        </Flex>
        <p>S’abonner à la newsletter</p>
      </Flex>
    </>
  );
}

export default Footer;
