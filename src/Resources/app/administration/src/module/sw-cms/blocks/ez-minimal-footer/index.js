import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-minimal-footer',
    label: 'ez-cms.blocks.minimalFooter.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-minimal-footer',
    previewComponent: 'sw-cms-preview-ez-minimal-footer',
    defaultConfig: {
        marginBottom: '0px',
        marginTop: '0px',
        marginLeft: '0px',
        marginRight: '0px',
        sizingMode: 'full_width',
    },
    slots: {
        content: 'ez-minimal-footer',
    },
});
