import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  // Validate that locale is defined and supported
  const supportedLocales = ['fr', 'en'];
  const validLocale = locale && supportedLocales.includes(locale) ? locale : 'fr';
  
  try {
    return {
      locale: validLocale,
      messages: (await import(`../messages/${validLocale}.json`)).default
    };
  } catch (error) {
    // Fallback to French messages
    return {
      locale: 'fr',
      messages: (await import(`../messages/fr.json`)).default
    };
  }
});
