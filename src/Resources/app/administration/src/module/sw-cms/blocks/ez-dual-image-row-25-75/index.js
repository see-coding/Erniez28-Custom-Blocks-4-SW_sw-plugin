import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-dual-image-row-25-75',
    label: 'ez-cms.blocks.dualImageRow2575.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-dual-image-row-25-75',
    previewComponent: 'sw-cms-preview-ez-dual-image-row-25-75',
    defaultConfig: {
        marginBottom: '0px',
        marginTop: '0px',
        marginLeft: '0px',
        marginRight: '0px',
        sizingMode: 'full_width',
    },
    slots: {
        imageLeft: 'ez-dual-image-cell',
        imageRight: 'ez-dual-image-cell',
    },
});
