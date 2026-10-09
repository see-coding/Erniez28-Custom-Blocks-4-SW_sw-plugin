import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-6col-row',
    label: 'ez-cms.blocks.sixColRow.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-6col-row',
    previewComponent: 'sw-cms-preview-ez-6col-row',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        col1: 'text', col2: 'text', col3: 'text', col4: 'text', col5: 'text', col6: 'text',
    },
});
