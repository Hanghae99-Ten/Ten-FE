import { DefaultSeoHeader } from 'routes/seo/header';
import { APP_DEFAULT_TITLE } from 'config';

export function SignInHeader() {
  const pageTitle = `${APP_DEFAULT_TITLE} | 로그인`;

  return (
    <DefaultSeoHeader>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="twitter:title" content={pageTitle} />
    </DefaultSeoHeader>
  );
}
