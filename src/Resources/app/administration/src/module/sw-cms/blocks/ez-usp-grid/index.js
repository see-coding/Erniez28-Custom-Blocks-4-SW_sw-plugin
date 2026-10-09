import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-usp-grid',
    label: 'ez-cms.blocks.uspGrid.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-usp-grid',
    previewComponent: 'sw-cms-preview-ez-usp-grid',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        content: 'ez-usp-grid',
    },
});
