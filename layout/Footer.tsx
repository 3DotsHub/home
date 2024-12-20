import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMailReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faXTwitter, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { SOCIAL } from '@utils';

interface FooterItemProps {
	link: string;
	text: string;
	icon: IconProp;
}

export function FooterItem({ link, text, icon }: FooterItemProps) {
	return (
		<Link href={link} target="_blank" rel="noreferrer" className="flex gap-1 hover:opacity-70">
			<FontAwesomeIcon icon={icon} className="w-6 h-6" />
			<div className="hidden sm:block">{text}</div>
		</Link>
	);
}

export default function Footer() {
	return (
		<>
			<ul className="mt-6 mb-4 flex items-center justify-center gap-8">
				<li>
					<FooterItem link={SOCIAL.Github_user} text="Github" icon={faGithub} />
				</li>
				<li>
					<FooterItem link={SOCIAL.Telegram} text="Telegram" icon={faTelegram} />
				</li>
				<li>
					<FooterItem link={SOCIAL.Mail} text="Contact Us" icon={faEnvelope} />
				</li>
			</ul>
		</>
	);
}
