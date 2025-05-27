interface Props {
	children?: React.ReactNode;
	className?: string;
}

export default function AppCardDark({ className, children }: Props) {
	return (
		<section
			className={`text-card-body-primary bg-layout-footer shadow-lg rounded-xl flex flex-col px-4 py-4 gap-y-6 ${className ?? ''}`}
		>
			{children}
		</section>
	);
}
