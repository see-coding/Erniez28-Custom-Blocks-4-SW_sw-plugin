import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'ez-usp-grid',
    label: 'ez-cms.elements.uspGrid.label',
    component: 'sw-cms-el-ez-usp-grid',
    configComponent: 'sw-cms-el-config-ez-usp-grid',
    previewComponent: 'sw-cms-el-preview-ez-usp-grid',
    defaultConfig: {
        title1: { source: 'static', value: 'Kostenloser Versand' },
        text1: { source: 'static', value: 'Ab 50 € versandkostenfrei in ganz DE' },
        badge1: { source: 'static', value: 'Top Service' },
        title2: { source: 'static', value: 'Geprüfte Qualität' },
        text2: { source: 'static', value: 'Langlebige Veredelung & Premium Textilien' },
        badge2: { source: 'static', value: '100% Cotton' },
        title3: { source: 'static', value: 'Sicherer Checkout' },
        text3: { source: 'static', value: 'SSL-Verschlüsselung mit PayPal & Apple Pay' },
        badge3: { source: 'static', value: 'Verified' },
        title4: { source: 'static', value: 'Persönlicher Support' },
        text4: { source: 'static', value: 'Kompetente Beratung & unkomplizierte Hilfe' },
        badge4: { source: 'static', value: '24/7 Hilfsbereit' },
    },
});
