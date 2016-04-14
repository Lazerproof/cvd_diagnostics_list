import 'babel-polyfill';
import React from 'React';
import ReactDOM from 'react-dom';
import AppBox from './components/app-box';

const currentUrl = window.location.pathname.split('/');
const urlParts = currentUrl.slice(1, currentUrl.length - 1);
const currentSection = urlParts[urlParts.length - 1];
const currentLanguage = urlParts[0] === 'en' ? 'en' : 'ru';
const currentQueryUrl = currentSection === 'diagnostics' ? '/api/' : `/api/${currentSection}`;

const localization = {
    ru : {
        noResultText          : 'Нет совпадений',
        laboratoriesFilter    : 'Лаборатории',
        pathologiesFilter     : 'Патологии',
        diseaseFilter         : 'Заболевания',
        standardizationFilter : 'ДСТУ',
        categories            : 'Категории',
        disease               : 'Заболевания',
        standardization       : 'ДСТУ',
        pathologies           : 'Паталогии',
        document              : 'Нормативно-технический документ',
        note                  : 'Примечание',
        period                : 'Период исследования',
        method                : 'Метод исследования',
        code                  : 'Артикул',
        tableHeadCode         : 'Артикул',
        tableHeadTitle        : 'Наименование',
        tableHeadPeriod       : 'Период',
        info                  : 'Подробнее',
        close                 : 'Закрыть',
        loading               : 'Данные загружаются',
        codeHeader            : 'Артикул',
        titleHeader           : 'Наименование',
        periodHeader          : 'Период'
    },
    en : {
        noResultText: 'No result',
        labsFilter  : 'Lobaratories'
    }
};

const appState = {
    section             : currentSection,
    lang                : currentLanguage,
    localization        : (currentLanguage === 'ru') ? localization.ru : localization.en
};

ReactDOM.render(
    <AppBox appState={appState} url={currentQueryUrl} />,
    document.getElementById('app')
);
