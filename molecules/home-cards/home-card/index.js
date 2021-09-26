import { useTranslations } from 'next-intl';
export default function HomeCard(props) {
    const t = useTranslations('content');
    const { pageLink, title, resultTitle } = props;
    return (
        <>
            <li>
                <a href={pageLink}>
                    <span>{title}</span>
                    <span>{resultTitle}</span>
                </a>
            </li>
        </>
    )
}