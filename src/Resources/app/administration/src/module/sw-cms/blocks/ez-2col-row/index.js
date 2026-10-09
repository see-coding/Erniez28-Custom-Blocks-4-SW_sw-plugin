import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-2col-row',
    label: 'ez-cms.blocks.twoColRow.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-2col-row',
    previewComponent: 'sw-cms-preview-ez-2col-row',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        col1: 'text',
        col2: 'text',
    },
});
