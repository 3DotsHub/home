import TableRow from '../Table/TableRow';
import { useRouter as useNavigation } from 'next/navigation';
import { capLetter, formatCurrency, FormatType } from '../../utils/format';
import AppBox from '@components/AppBox';
import { Address } from 'viem';
import { ResponseDepositUSDT } from '../../mock/ResponseDeposit';
import Button from '@components/Button';
import { TransactionLabel } from '@components/TransactionLabel';
import TokenLogo from '@components/TokenLogo';
import { PortfolioBalanceBox } from './PortfolioBalanceBox';

interface Props {
	headers: string[];
	deposit: (typeof ResponseDepositUSDT.result.data)[0];
}

export default function SafeguardDepositRow({ headers, deposit }: Props) {
	const navigate = useNavigation();
	const d = new Date(deposit.received_timestamp).toLocaleString();

	return (
		<TableRow
			headers={headers}
			// actionCol={
			// 	<Button className="h-10" >
			// 		View
			// 	</Button>
			// }
		>
			<div className="flex flex-1 max-md:justify-center max-md:items-center max-md:py-3 max-md:bg-card-content-primary max-md:rounded-xl">
				<TokenLogo currency={deposit.currency} />
				{/* <PortfolioBalanceBox currency={deposit.currency} amount={deposit.amount} /> */}
			</div>

			<div className="flex flex-col gap-2 text-text-header">
				<div className="col-span-2 text-md">
					{formatCurrency(deposit.amount, 2, 2, FormatType.us)} {deposit.currency}
				</div>
			</div>

			<div className="flex flex-col gap-2 text-text-header">
				<div className="col-span-2 text-md">{formatCurrency(deposit.amount, 2, 2, FormatType.us)} USD</div>
			</div>

			<div className="flex flex-col gap-2 text-text-header">
				<div className="col-span-2 text-md">{d.split(', ')[0]}</div>
			</div>

			<div className="flex flex-col gap-2 text-text-header">
				<TransactionLabel
					label={capLetter(deposit.state)}
					hash={deposit.transaction_id}
					blockchain={deposit.currency === 'BTC' ? 'bitcoin' : 'ethereum'}
					showLink
				/>
			</div>
		</TableRow>
	);
}