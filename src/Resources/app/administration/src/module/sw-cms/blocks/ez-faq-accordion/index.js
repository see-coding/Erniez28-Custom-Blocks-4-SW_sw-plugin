import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-faq-accordion',
    label: 'ez-cms.blocks.faqAccordion.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-faq-accordion',
    previewComponent: 'sw-cms-preview-ez-faq-accordion',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        content: 'ez-faq-accordion',
    },
});
