import { FC } from 'react';
import './OrderButton.scss';

interface IOrderButtonProps {}

const OrderButton: FC<IOrderButtonProps> = ({}) => {
	return (
		<div className="orderButton-container">
			<button className="orderButton">Забронировать стол</button>
		</div>
	);
};

export default OrderButton;
