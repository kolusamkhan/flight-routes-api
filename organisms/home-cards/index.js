import { useTranslations } from 'next-intl';
import HomeCards from '../../molecules/home-cards';

export default function HomeCardsContainer(props) {
    const t = useTranslations('content');
    const { pageName } = props;
    return (
        <>
            <div className="page_title">
                <h1>{t(`${pageName}.title`)}</h1>
            </div>
            <HomeCards pageName={pageName} />
        </>
    );
}