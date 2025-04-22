import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';

// Define available locales
const locales = ['en', 'ar'];
const defaultLocale = 'en';

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE');
  const locale = localeCookie?.value || defaultLocale;
  
  return {
    locale,
    // This loads the translations from the messages directory
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});