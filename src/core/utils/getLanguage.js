import {getCookie} from './cookie';
import {getLocalStorage} from './localStorage';
import { pt } from '../i18n/pt';
import { en } from '../i18n/en';
import { es } from '../i18n/es';

export function getLocale() {
    const languageCookie = getCookie('language') || getLocalStorage('language') || 'pt_BR';
    let initLocale = 'pt';

    if (languageCookie === 'en_US')
        return initLocale = 'en';

    if (languageCookie === 'es_ES'|| languageCookie === 'es-ES')
        return initLocale = 'es';

    return initLocale;
}

export function getMessages() {
    const languageCookie = getCookie('language') || getLocalStorage('language') || 'pt_BR';
    let initMessages = pt;

    if (languageCookie === 'en_US')
        return initMessages = en;

    if (languageCookie === 'es_ES' || languageCookie === 'es-ES')
        return initMessages = es;

    return initMessages;
}