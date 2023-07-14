import React, { FC } from 'react';
import './Header.scss';
import Icons from '../Icons/Icons';

interface IHeaderOptions {
	anchors: { link: string; text: string }[];
	contacts: string[];
	metro: string;
	address: string;
}

const Header: FC<IHeaderOptions> = ({ anchors, contacts, metro, address }) => {
	return (
		<header className="header">
			<div className="header-container">
				<div className="header__topBox">
					<div className="header__topBox__contacts">
						{contacts.map((contact) => {
							return <div className="contact">{contact}</div>;
						})}
						{/* <Icons /> */}
					</div>
					<div className="header__topBox__logo">
						<div className="header__topBox__logo__pic" />
					</div>
					<div className="header__topBox__address">
						<div className="metroBox">
							<div className="metroDot">
								<span className="metroDot__number">1</span>
							</div>
							<div className="metro">{metro}</div>
						</div>
						<address className="address">{address}</address>
					</div>
				</div>
				<nav className="header__anchors">
					{anchors.map((anchor) => {
						return (
							<a href={`${anchor.link}`}>
								<div className="anchor">{anchor.text}</div>
							</a>
						);
					})}
				</nav>
			</div>
		</header>
	);
};

export default Header;
