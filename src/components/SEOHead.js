import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ title, description, canonical, image }) => {
  const defaultTitle = "Montfort School Nagpur - Best CBSE School in Nagpur | Excellence in Education Since 1996";
  const defaultDescription = "Montfort School Nagpur - Premier CBSE school offering excellence in education since 1996. State-of-the-art infrastructure, experienced faculty, holistic development, and 100% success rate. Admissions open for 2024-25.";
  const defaultImage = "https://montfortschoolnagpur.com/montfort.jpg";
  const defaultCanonical = "https://montfortschoolnagpur.com/";

  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageImage = image || defaultImage;
  const pageCanonical = canonical || defaultCanonical;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content="Montfort School Nagpur, best school Nagpur, CBSE school Nagpur, top school Nagpur, Montfortian education, Nagpur admissions, school near me, best CBSE school Maharashtra, St. Montfort school, Brothers of St Gabriel" />
      <meta name="author" content="Montfort School Nagpur" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={pageCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Montfort School Nagpur" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageCanonical} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Nagpur, Maharashtra" />
      <meta name="ICBM" content="21.1458,79.0882" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};

export default SEOHead;
