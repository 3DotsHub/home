'use client';

import AppCard from '@components/AppCard';
import { SOCIAL } from '@utils';
import Image from 'next/image';

export default function PageHome() {
	return (
		<AppCard>
			<div className="font-semibold">Welcome to 3Dotshub.</div>

			<div>Discover a space dedicated to advancing innovation in cutting edge technologies and finance.</div>

			<div>
				This platform serves as a hub where we develop, integrate, and share innovative tools with the world. From trading
				strategies and research initiatives to strategic business collaborations, our work is designed to drive growth and success.
			</div>

			<div>
				With a commitment to transparency, all our work is open source, inviting you to explore and engage with the tools and
				strategies shaping the future of technologies and finance.{' '}
				<a className="cursor-pointer underline" href={SOCIAL.Github_user} target="_blank">
					Visit us on GitHub
				</a>
			</div>

			<div className="font-semibold">Join us in transforming the future of technologies and innovation!</div>

			<div className="grid md:grid-cols-2 gap-10 justify-center items-center my-20">
				<Image
					className="mx-auto shadow-2xl cursor-pointer rounded-2xl"
					alt="logo"
					src={'/assets/3dotshub.jpeg'}
					width={300}
					height={300}
				></Image>
				<Image
					className="mx-auto shadow-2xl cursor-pointer rounded-2xl"
					alt="logo"
					src={'/assets/3dotshub.jpeg'}
					width={300}
					height={300}
				></Image>
			</div>
		</AppCard>
	);
}
