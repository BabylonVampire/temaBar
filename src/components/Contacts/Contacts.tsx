import { FC } from 'react';
import './Contacts.scss';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import Icons from '../Icons/Icons';

interface IContactsProps {
	address: string;
	contacts: string[];
}

const Contacts: FC<IContactsProps> = ({ address, contacts }) => {
	return (
		<section className="contacts" id="contacts">
			<div className="contacts__heading">Контакты</div>
			<div className="contacts-container">
				<div className="contacts-container-contacts">
					<div className="contacts-container-contacts__phones">
						{contacts.map((contact) => {
							return <div className="contact">{contact}</div>;
						})}
					</div>
					<address className="contacts-container-contacts__address">
						{address}
					</address>
					<Icons />
				</div>
				<div className="contacts-container__map">
					<YMaps>
						<Map
							defaultState={{
								center: [55.76179596728984, 37.64014927219182],
								zoom: 17,
							}}
							width="50vh"
							height="40vh"
						/>
					</YMaps>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
