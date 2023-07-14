import { FC } from 'react';
import './Sales.scss';
import Sale from './Sale/Sale';
import { Col, Row } from 'antd';

interface ISalesProps {
	sales: { name: string; description: string; pic: string; topic: string }[];
}

const Sales: FC<ISalesProps> = ({ sales }) => {
	return (
		<section className="sales" id="sales">
			<div className="sales-container">
				<div className="sales__heading">Акции</div>
				<div className="sales-box">
					<Row justify="space-evenly">
						{sales.map((sale) => {
							return (
								<Col xs={24} sm={24} md={24} lg={12} xl={8}>
									<Sale
										name={sale.name}
										description={sale.description}
										pic={sale.pic}
										topic={sale.topic}
									/>
								</Col>
							);
						})}
					</Row>
				</div>
			</div>
		</section>
	);
};

export default Sales;
