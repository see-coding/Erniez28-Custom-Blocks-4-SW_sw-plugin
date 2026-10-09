import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'ez-faq-accordion',
    label: 'ez-cms.elements.faqAccordion.label',
    component: 'sw-cms-el-ez-faq-accordion',
    configComponent: 'sw-cms-el-config-ez-faq-accordion',
    previewComponent: 'sw-cms-el-preview-ez-faq-accordion',
    defaultConfig: {
        headline: { source: 'static', value: 'Häufig gestellte Fragen (FAQ)' },
        q1: { source: 'static', value: 'Wie lange dauert der Versand?' },
        a1: { source: 'static', value: 'In der Regel wird Ihre Bestellung innerhalb von 1-3 Werktagen nach Zahlungseingang versendet.' },
        q2: { source: 'static', value: 'Welche Zahlungsmethoden stehen zur Verfügung?' },
        a2: { source: 'static', value: 'Wir bieten sichere Bezahlung per PayPal, Klarna, Kreditkarte und Apple Pay an.' },
        q3: { source: 'static', value: 'Wie läuft eine Rücksendung oder ein Umtausch ab?' },
        a3: { source: 'static', value: 'Sie haben ein 14-tägiges Widerrufsrecht. Kontaktieren Sie einfach unseren Kundenservice.' },
        q4: { source: 'static', value: 'Wie pflege ich die bedruckten Textilien am besten?' },
        a4: { source: 'static', value: 'Waschen Sie die Kleidungsstücke bitte bei maximal 30°C auf links.' },
    },
});
