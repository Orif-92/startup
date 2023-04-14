import { useTranslation } from 'react-i18next';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import { CoursesPageComponent } from 'src/page-component';

const Courses = () => {
	const { t } = useTranslation();

	return (
		<Seo
			metaTitle={
				`Orif | ${t('course_page_title', { ns: 'seo' })}` ||
				'Orif | All Courses'
			}
			metaDescription={
				`Orif | ${t('course_page_description', { ns: 'seo' })}` ||
				'All courses in Orif platform just learn and relax'
			}
		>
			<CoursesPageComponent />
		</Seo>
	);
};

export default withLayout(Courses);
