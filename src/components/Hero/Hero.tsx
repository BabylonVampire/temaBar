import { CSSProperties } from 'react';
import './Hero.scss';
import { Carousel } from 'antd';

const contentStyle__1: CSSProperties = {
	height: '75vh',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundImage: 'url(/src/assets/carousel_1.jpg)',
};

const contentStyle__2: CSSProperties = {
	height: '75vh',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundImage: 'url(/src/assets/carousel_2.jpg)',
};

const contentStyle__3: CSSProperties = {
	height: '75vh',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundImage: 'url(/src/assets/carousel_3.jpg)',
};

const contentStyle__4: CSSProperties = {
	height: '75vh',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundImage: 'url(/src/assets/carousel_4.jpg)',
};

const Hero = () => {
	return (
		<section className="hero">
			<Carousel autoplay>
				<div>
					<div style={contentStyle__1} />
				</div>
				<div>
					<div style={contentStyle__2} />
				</div>
				<div>
					<div style={contentStyle__3} />
				</div>
				<div>
					<div style={contentStyle__4} />
				</div>
			</Carousel>
		</section>
	);
};

export default Hero;
