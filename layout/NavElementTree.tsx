import NavElement from './NavElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRightArrowLeft,
	faArrowUpShortWide,
	faBank,
	faGavel,
	faBuilding,
	faCampground,
	faCoins,
	faCommentDollar,
	faMoneyBills,
	faComputer,
	faDatabase,
	faFileInvoice,
	faFingerprint,
	faHandHoldingHeart,
	faHandshake,
	faHandsHoldingCircle,
	faHouse,
	faLaptopCode,
	faLightbulb,
	faMoneyBill1Wave,
	faPeopleGroup,
	faPiggyBank,
	faRankingStar,
	faScrewdriverWrench,
	faSeedling,
	faServer,
	faSliders,
	faUnlockKeyhole,
	faVault,
	faBook,
	faArrowsUpToLine,
	faFileZipper,
} from '@fortawesome/free-solid-svg-icons';
import { SetStateAction } from 'react';

export type NavBarTree = {
	title: string;
	items: (NavBarElement | NavBarElements)[];
};

export type NavBarElement = {
	name: string;
	to: string;
	external?: boolean;
	icon?: JSX.Element;
};

export type NavBarElements = {
	name: string;
	icon: JSX.Element;
	childs: NavBarElement[];
};

export const NavTree: NavBarTree[] = [
	{
		title: 'Overview',
		items: [
			{
				name: 'Dashboard',
				to: '/home/purpose',
				icon: <FontAwesomeIcon icon={faFingerprint} className="cursor-pointer" />,
			},
			{
				name: 'Investor',
				to: '/investor',
				icon: <FontAwesomeIcon icon={faBook} className="cursor-pointer" />,
			},
			{
				name: 'R&D',
				to: '/product',
				icon: <FontAwesomeIcon icon={faVault} className="cursor-pointer" />,
			},
		],
	},
	{
		title: 'Management',
		items: [
			{
				name: 'Member',
				icon: <FontAwesomeIcon icon={faPeopleGroup} className="cursor-pointer" />,
				childs: [
					{
						name: 'List',
						to: '/member/list',
					},
					{
						name: 'Details',
						to: '/member/details',
					},
					{
						name: 'Create',
						to: '/member/create',
					},
					{
						name: 'Edit',
						to: '/member/edit',
					},
				],
			},
			{
				name: 'Payment',
				icon: <FontAwesomeIcon icon={faServer} className="cursor-pointer" />,
				childs: [
					{
						name: 'List',
						to: '/payment/list',
					},
					{
						name: 'Details',
						to: '/payment/details',
					},
					{
						name: 'Create',
						to: '/payment/create',
					},
					{
						name: 'Edit',
						to: '/payment/edit',
					},
				],
			},
		],
	},
];

export type NavElementTreeProps = {
	tree?: NavBarTree[];
	setIsNavBarOpen: (value: SetStateAction<boolean>) => void;
};

export default function NavElementTree({ tree, setIsNavBarOpen }: NavElementTreeProps) {
	if (tree == undefined) tree = NavTree;
	if (tree.length == 0) return null;

	return (
		<>
			{tree.map((root) => (
				<div className="px-2" key={root.title}>
					<div className="pl-2 text-sm font-semibold">{root.title.toUpperCase()}</div>

					<li className="flex flex-col">
						{root.items.map((item) => (
							<NavElement item={item} key={item.name} setIsNavBarOpen={setIsNavBarOpen} />
						))}
					</li>
				</div>
			))}
		</>
	);
}
