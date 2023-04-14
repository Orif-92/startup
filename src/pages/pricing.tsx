import { useTranslation } from 'react-i18next';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import { PricingPageComponent } from 'src/page-component';

const PricingPage = () => {
	const { t } = useTranslation();

	return (
		<Seo
			metaTitle={
				`Orif | ${t('pricing_page_title', { ns: 'seo' })}` ||
				'Orif | Pricing Package'
			}
			metaDescription={
				`Orif | ${t('pricing_page_description', { ns: 'seo' })}` ||
				'The best package for using and doing lesson on Orif academy'
			}
		>
			<PricingPageComponent />
		</Seo>
	);
};

export default withLayout(PricingPage);
