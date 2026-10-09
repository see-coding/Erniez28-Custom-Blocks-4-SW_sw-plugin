import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-legal-modals',
    label: 'ez-cms.blocks.legalModals.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-legal-modals',
    previewComponent: 'sw-cms-preview-ez-legal-modals',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        content: 'ez-legal-modals',
    },
});
