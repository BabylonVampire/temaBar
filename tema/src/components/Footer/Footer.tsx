import { FC } from 'react';
import './Footer.scss';

interface IFooterProps {
	contacts: string[];
	address: string;
	copyrights: string;
}

const Footer: FC<IFooterProps> = ({ contacts, address, copyrights }) => {
	return (
		<footer>
			<div className="footer-box">
				<div className="footer-box__address">{address}</div>
				<div className="footer-box__contacts">
					{contacts.map((contact) => {
						return <div className="footer__contact">{contact}</div>;
					})}
				</div>
			</div>
			<div className="footer-copyrights">
				<p className="footer-copyrights__text">{copyrights}</p>
			</div>
		</footer>
	);
};

export default Footer;
