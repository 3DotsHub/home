'use client';

import AppButton from '@components/AppButton';
import AppCard from '@components/AppCard';
import AppCardDark from '@components/AppCardDark';
import AppPage from '@components/AppPage';
import AppTitle from '@components/AppTitle';
import { faBank, faDice, faSubway, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL } from '@utils';
import Head from 'next/head';
import Image from 'next/image';

export default function PageHome() {
	return (
		<AppPage className="flex flex-col gap-20">
			<Head>
				<title>Alpha-Driven Options Trading Firm - Home</title>
			</Head>

			<div className="grid md:grid-cols-3 md:mt-20">
				<div className="md:col-span-2 pt-20 pb-10 md:pr-20">
					<h1 className="text-4xl font-bold">Alpha-Driven Trading Firm</h1>
					<div>
						We specialize in high-conviction U.S. equities and options strategies, leveraging proprietary research and
						disciplined execution to capture asymmetric returns.
					</div>

					<div className="grid md:grid-cols-4 gap-4 mt-4">
						<AppButton>Learn more</AppButton>
						<AppButton>Go into</AppButton>
					</div>
				</div>

				<Image className="rounded-xl shadow-xl" src="/assets/trading.jpg" alt="trading logo" width={600} height={250} />
			</div>

			<AppCard className="">
				<div className="grid md:grid-cols-3">
					<AppTitle className="md:col-span-2 p-4 pt-10" title="Tell me more about this">
						<div className="flex flex-col gap-8 mt-8">
							<div>Discover a space dedicated to exploring and advancing decentralized technologies.</div>
							<div>
								This platform serves as a hub where we develop, integrate, and share innovative tools with the world. From
								trading models and DeFi solutions to DAOs and Governance Systems, our toolbox is designed to showcase and
								experiment with the latest advancements.
							</div>

							<div>
								With a commitment to transparency, all our work is open source, inviting you to explore and engage with the
								tools that drive the future of decentralized systems.{' '}
								<a className="cursor-pointer underline" href={SOCIAL.Github_contract} target="_blank">
									Visit us on Github
								</a>
							</div>

							<div className="font-semibold">Join us in shaping the future of open and decentralized technologies!</div>
						</div>
					</AppTitle>
					<Image className="rounded-xl shadow-xl" src="/assets/building.jpg" alt="trading logo" width={600} height={250} />
				</div>

				<div className="grid md:grid-cols-3 mt-10">
					<div className="flex flex-col items-center text-center">
						<FontAwesomeIcon className="fa-2xl" icon={faBank} />
						<div className="mt-4 p-4">
							Should not import the named export version (imported as version) from default-exporting module (only default
							export is available soon)Should not import the named export version (imported as version) from default-exporting
							module (only default export is available soon)
						</div>
					</div>

					<div className="flex flex-col items-center">
						<FontAwesomeIcon className="fa-2xl" icon={faWallet} />
						<div className="mt-4 p-4">
							Should not import the named export version (imported as version) from default-exporting module (only default
							export is available soon)Should not import the named export version (imported as version) from default-exporting
							module (only default export is available soon)
						</div>
					</div>

					<div className="flex flex-col items-center">
						<FontAwesomeIcon className="fa-2xl" icon={faDice} />
						<div className="mt-4 p-4">
							Should not import the named export version (imported as version) from default-exporting module (only default
							export is available soon)Should not import the named export version (imported as version) from default-exporting
							module (only default export is available soon)
						</div>
					</div>
				</div>
			</AppCard>

			<AppCard>
				<div className="mt-4 p-4">
					Should not import the named export version (imported as version) from default-exporting module (only default export is
					available soon)Should not import the named export version (imported as version) from default-exporting module (only
					default export is available soon)
				</div>
			</AppCard>

			<AppCardDark className="p-4">
				<div className="grid md:grid-cols-3">
					<div className="flex flex-row text-xl md:col-span-2 text-center justify-center items-center">
						Should not import the named export version from default-exporting module
					</div>
					<div className="flex flex-row gap-4 p-4">
						<AppButton className="">Action A</AppButton>
						<AppButton className="">Action A</AppButton>
					</div>
				</div>
			</AppCardDark>
		</AppPage>
	);
}
