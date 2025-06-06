interface Props {
	children?: React.ReactNode;
	className?: string;
}

export default function AppCard({ className, children }: Props) {
	return (
		<section className={`bg-card-body-primary shadow-lg rounded-xl flex flex-col px-4 py-4 gap-y-6 ${className ?? ''}`}>
			{children}
		</section>
	);
}
