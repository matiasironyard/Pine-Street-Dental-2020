import React from 'react';
import Helmet from 'react-helmet';

const Seo = () => {
	const url = `https://www.pinestdentalsc.com/`;
	const title = `Pine Street Dental 364 S Pine St suite a-101, Spartanburg, SC 29302 864
  585 500`;
	const description = `Providing the best dentistry to the family and friends of Spartanburg and the Upstate for over 40 years. Call 582-5000 for appointments and questions`;
	const keyWords = `dentist near me, dentinst in spartanburg, spartanburg best dentist, east side dentist, pine street, pine st, omar figueroa, toothache, tooth pain, best dentist in spartanburg, Spartanburg Dentist, Dentist, Cleanings &amp; Prevention, Dental Exams &amp; Cleanings, Dental X-Rays, Home Care, Cosmetic Dentistry, Composite Fillings, Porcelain Crowns (Caps), Porcelain Fixed Bridges, Porcelain Veneers, Tooth Whitening, Periodontal Disease, Diagnosis, Treatment, Maintenance, Restorations, Composite Fillings, Crowns (Caps), Dentures &amp; Partial Dentures, Fixed Bridges, Root Canal Therapy`;
	const author = `Matias Mariani`;
	const meta = [];
	const lang = 'en';
	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			link={[
				{
					rel: `canonical`,
					href: `https://www.pinestdentalsc.com/`,
				},
				{
					rel: `manifest`,
					href: `%PUBLIC_URL%/manifest.json`,
				},
				{
					rel: `shortcut icon`,
					href: `%PUBLIC_URL%/favicon.ico`,
				},
				{
					rel: `stylesheet`,
					href: `https://fonts.googleapis.com/css?family=Roboto`,
				},
				{
					rel: `stylesheet`,
					href: `//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css`,
				},
			]}
			meta={[
				{
					'http-equiv': `X-UA-Compatible`,
					content: `IE=edge,chrome=1`,
				},
				{
					charset: `utf-8`,
				},
				{
					name: `viewport`,
					content: `width=device-width,initial-scale=1,shrink-to-fit=no`,
				},
				{
					'http-equiv': `x-rim-auto-match`,
					content: `none`,
				},
				{
					name: `HandheldFriendly`,
					content: `true`,
				},
				{
					name: `http-equiv`,
					content: `true`,
				},
				{
					name: `identifier-url`,
					content: url,
				},
				{
					name: `title`,
					content: title,
				},
				{
					name: `description`,
					content: description,
				},
				{
					name: `abstract`,
					content: description,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: description,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: description,
				},
				{
					name: `robots`,
					content: `index, follow`,
				},
				{
					'http-equiv': `Content-Type`,
					content: `text/html; charset=utf-8`,
				},
				{
					name: `language`,
					content: `English`,
				},
				{
					name: `copyright`,
					content: `© ${new Date().getFullYear()}`,
				},
				{
					name: `robots`,
					content: `All`,
				},
			].concat(meta)}
		/>
	);
};
export default Seo;
