import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-split-image-hover',
    label: 'ez-cms.blocks.splitImageHover.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-split-image-hover',
    previewComponent: 'sw-cms-preview-ez-split-image-hover',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        content: 'ez-split-image-hover',
    },
});
