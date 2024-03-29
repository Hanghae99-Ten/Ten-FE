import React from 'react';
import { HEADER } from 'routes/seo/seo';
import { Helmet } from 'react-helmet';

interface DefaultHeaderProps {
  children: React.ReactNode;
}

export function DefaultSeoHeader({ children }: DefaultHeaderProps) {
  return (
    <Helmet>
      {children} <meta name="description" content={HEADER.DESCRIPTION} />
      <meta property="og:description" content={HEADER.DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={HEADER.PAGE_URL} />
      <meta property="og:image" content={HEADER.THUMBNAIL_URL} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={HEADER.DESCRIPTION} />
      <meta name="twitter:image" content={HEADER.THUMBNAIL_URL} />
      <link rel="canonical" href={HEADER.PAGE_URL} />
      <link rel="icon" type="image/png" sizes="32x32" href={HEADER.THUMBNAIL_URL} />
    </Helmet>
  );
}
