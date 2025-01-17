'use client';

import AppCard from '@components/AppCard';
import AppPage from '@components/AppPage';
import { SOCIAL } from '@utils';
import Image from 'next/image';

export default function PageHome() {
	return (
		<AppPage className="flex flex-col gap-10">
			<AppCard>
				<div className="text-xl font-semibold">Welcome to 3Dotshub.</div>

				<div>Discover a space dedicated to advancing innovation in cutting edge technologies and finance.</div>

				<div>
					This platform serves as a hub where we develop, integrate, and share innovative tools with the world. From trading
					strategies and research initiatives to strategic business collaborations, our work is designed to drive growth and
					success.
				</div>

				<div>
					Our mission is to deliver unparalleled growth opportunities for our investors while driving transformative change in the
					financial landscape. With a strong focus on option trading, we specialize in capturing volatility and hedging exposure
					to generate cash flows. Our expertise spans both traditional finance and cryptocurrency markets, enabling us to provide
					diversified investment solutions that cater to the evolving needs of discerning investors.
				</div>
			</AppCard>

			<AppCard>
				<div className="text-lg font-semibold">3Dots Inc - Unlocking Value through Bitcoin Trading</div>
				<div>
					A privately held company established in 2020, incorporated as an International Business Company (IBC) under Seychelles
					law. The registered number of the Company is IBC No. 218305. The Registered Agent of the Company is Fidelity Corporate
					Services (Seychelles) Ltd. and the Registered Office is at Suite 9, Ansuya Estate, Royal Street, Victoria, Mahe,
					Seychelles.
				</div>

				<div>
					We bridge the gap between blockchain innovation and crypto trading, with a focus on Bitcoin options and futures.
					Leveraging our market insights and advanced analytics, we expertly manage our Bitcoin reserves to generate additional
					revenue streams through strategic debt financing. Our risk management approach is built around a delicate balance of
					exposure and borrowing. By carefully calibrating our position, we create a stable source of income for our investors
					while navigating the complexities of market volatility.
				</div>
			</AppCard>

			<AppCard>
				<div className="text-lg font-semibold">3Dots Capital OU - Unlocking Value through Traditional Finance Trading</div>
				<div>
					A privately held company established in 2022, registered in Estonia as a private limited company. The registered number
					of the Company is No. 16523199. The Registered Agent of the Company is Comistar Estonia and the Registered Office is at
					Kotkapoja tn 2a-10, 10615 Kristiine linnaosa, Tallinn, Harju maakond, Estonia.
				</div>
				<div>
					Leveraging its expertise in traditional finance with Interactive Brokers UK to access various markets and executes
					complex trading strategies. Our primary objective is to harness the power of options trading through the application of
					advanced volatility capture and hedging techniques. By utilizing proprietary tools, we aim to unlock enhanced cash flow
					potential for our investors.
				</div>
			</AppCard>

			<AppCard>
				<div className="text-lg font-semibold">Research Fields</div>
				<div>
					In addition to our trading activities, both companies contribute a portion of its earnings into cutting-edge research
					initiatives. We are dedicated to driving innovation in various fields, including:
				</div>

				<div className="flex flex-col gap-4">
					<div>
						<span className="font-semibold">Web3 Applications:</span> Exploring innovative applications of blockchain technology
						to create immersive user experiences.
					</div>
					<div>
						<span className="font-semibold">Cryptography:</span> Advancing the art of secure data transmission and encryption
						methods.
					</div>
					<div>
						<span className="font-semibold">DeFi Protocols:</span> Developing innovative lending protocols that redefine
						traditional financial systems.
					</div>
					<div>
						<span className="font-semibold">Governance Structures:</span> Crafting optimal governance frameworks for
						decentralized networks.
					</div>
					<div>
						<span className="font-semibold">Game Theories:</span> Applying game theoretical concepts to optimize decision-making
						in complex blockchain ecosystems.
					</div>
					<div>
						<span className="font-semibold">Artificial Intelligence (AI):</span>
						Harnessing the power of AI to drive innovation and growth in blockchain applications.
					</div>
				</div>

				<div>
					By fostering a culture of innovation and risk-taking, we are poised to unlock new opportunities in the crypto space and
					drive growth for our investors. With a commitment to transparency, all our work is open source, inviting you to explore
					and engage with the tools and strategies shaping the future of technologies and finance.{' '}
					<a className="cursor-pointer underline" href={SOCIAL.Github_user} target="_blank">
						Visit us on GitHub
					</a>
				</div>

				<div className="font-semibold">Join us in transforming the future of technologies and innovation!</div>

				<div className="mt-10">
					<Image
						className="mx-auto shadow-2xl cursor-pointer rounded-2xl"
						alt="logo"
						src={'/assets/3dotshub.jpeg'}
						width={300}
						height={300}
					/>
					<div className="mt-2 font-semibold text-center">3Dots Hub</div>
				</div>
			</AppCard>
		</AppPage>
	);
}
