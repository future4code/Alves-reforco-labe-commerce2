import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./styled";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "black",
				textAlign: "center",
				marginTop: "-60px" }}>
		STELARA uma AstroDev Franchise © - 2022
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Sobre Nós</Heading>
			<FooterLink href="#">Visão</FooterLink>
			<FooterLink href="#">Relato de Clientes</FooterLink>
		</Column>
		<Column>
			<Heading>Linha de Produtos</Heading>
			<FooterLink href="#">Satélites antigos</FooterLink>
			<FooterLink href="#">Roupas espaciais</FooterLink>
			<FooterLink href="#">Viagens espaciais</FooterLink>
			<FooterLink href="#">Meteoritos / Aerolitos </FooterLink>
            <FooterLink href="#">Brinquedos / produtos infantis</FooterLink>
            <FooterLink href="#">Naves / Foguetes / Ônibus espaciais</FooterLink>
		</Column>
		<Column>
			<Heading>Entre em contato</Heading>
			<FooterLink href="https://www.linkedin.com/in/weslianevieira" target="_blank"rel="noreferrer">Wesliane Vieira</FooterLink>
			<FooterLink href="#">#</FooterLink>
			<FooterLink href="#">#</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
