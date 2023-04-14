import { useTranslation } from 'react-i18next';
import Seo from 'src/layouts/seo/seo';
import { AuthPageComponent } from 'src/page-component';

const AuthPage = () => {
	const { t } = useTranslation();

	return (
		<Seo
			metaTitle={
				`Orif | ${t('auth_page_title', { ns: 'seo' })}` || 'Orif | Auth'
			}
			metaDescription={
				`Orif | ${t('auth_page_description', { ns: 'seo' })}` ||
				'Login or create your account for using Orif platform'
			}
		>
			<AuthPageComponent />
		</Seo>
	);
};

export default AuthPage;
