import Link from 'next/link';
import NavElementTree from './NavElementTree';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { CONFIG } from '../app.config';

interface Props {
	isNavBarOpen: boolean;
	setIsNavBarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function NavBar({ isNavBarOpen, setIsNavBarOpen }: Props) {
	return (
		<div className="fixed top-0 left-0 bottom-0 z-10 md:border-r-2 border-menu-separator bg-layout-primary">
			<header className="flex items-top py-2 md:py-4 px-4 md:gap-x-4 relative h-full w-[18rem] overflow-y-auto">
				<ul className={`flex-col hidden flex-1 md:flex lg:gap-[2rem] scroll-auto mt-2`}>
					<Link className="grid justify-items-center" href={'/'}>
						<Image className="rounded-xl" src="/wrytlabs.png" alt="Logo" width={120} height={100} />
					</Link>

					<button className="absolute top-4 right-4" onClick={() => setIsNavBarOpen(false)}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					<div
						className={`fixed inset-0 h-screen w-full ml-[18rem] bg-black/70 backdrop-blur-sm ${
							isNavBarOpen ? 'block' : 'hidden'
						}`}
						onClick={() => setIsNavBarOpen(false)}
					></div>

					<menu className="grid grid-cols-1 gap-6 place-content-stretch" onClick={() => setIsNavBarOpen(false)}>
						<NavElementTree />
					</menu>

					<div className="h-10 w-full"> </div>
				</ul>

				<aside className="flex md:hidden">
					<div className="flex items-center md:block">
						<label className="absolute z-20 cursor-pointer px-3 py-6 right-0 md:right-4" htmlFor="ss-mobile-menu">
							<input className="peer hidden" type="checkbox" id="ss-mobile-menu" />

							<div className="hidden peer-checked:block">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</div>
							<div
								className={`fixed inset-0 h-screen w-full bg-black/70 backdrop-blur-sm ${
									isNavBarOpen ? 'block' : 'hidden'
								}`}
								onClick={() => setIsNavBarOpen(false)}
							></div>
							<div
								className={`fixed top-0 left-0 h-screen w-64 transition-transform duration-200 overflow-y-auto overscroll-y-auto  ${
									isNavBarOpen ? 'translate-x-0' : 'translate-x-full'
								}`}
							>
								<div className="min-h-full w-full bg-card-body-primary px-6 pt-12 relative">
									<button className="absolute top-4 right-4" onClick={() => setIsNavBarOpen(false)}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											className="w-8 h-8"
										>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
									<menu
										className="grid grid-cols-1 gap-6 place-content-stretch mt-5"
										onClick={() => setIsNavBarOpen(false)}
									>
										<NavElementTree />

										<div className="h-10 w-full"> </div>
									</menu>
								</div>
							</div>
						</label>
					</div>
				</aside>
			</header>
		</div>
	);
}