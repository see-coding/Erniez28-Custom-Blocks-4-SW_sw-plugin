import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-before-after-slider',
    label: 'ez-cms.blocks.beforeAfterSlider.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-before-after-slider',
    previewComponent: 'sw-cms-preview-ez-before-after-slider',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        content: 'ez-before-after-slider',
    },
});
