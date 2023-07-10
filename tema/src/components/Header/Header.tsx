import React, { FC } from 'react';
import './Header.scss';

interface IHeaderOptions {
	anchors: { link: string; text: string }[];
	contacts: string[];
	metro: string;
	address: string;
}

const Header: FC<IHeaderOptions> = ({ anchors, contacts, metro, address }) => {
	return (
		<div className="header">
			<div className="header__container">
				<div className="header__topBox">
					<div className="header__topBox__contacts">
						{contacts.map((contact) => {
							return <div className="contact">{contact}</div>;
						})}
					</div>
					<div className="header__topBox__logo">
						<div className="header__topBox__logo__pic" />
					</div>
					<div className="header__topBox__address">
						<div className="metroBox">
							<div className="metroDot" />
							<div className="metro">{metro}</div>
						</div>
						<div className="address">{address}</div>
					</div>
				</div>
				<div className="header__anchors">
					{anchors.map((anchor) => {
						return <div className="anchor">{anchor.text}</div>;
					})}
				</div>
			</div>
		</div>
	);
};

export default Header;
