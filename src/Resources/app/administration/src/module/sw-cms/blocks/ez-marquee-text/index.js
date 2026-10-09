import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-marquee-text',
    label: 'ez-cms.blocks.marqueeText.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-marquee-text',
    previewComponent: 'sw-cms-preview-ez-marquee-text',
    defaultConfig: {
        marginBottom: '0px',
        marginTop: '0px',
        marginLeft: '0px',
        marginRight: '0px',
        sizingMode: 'full_width',
    },
    slots: {
        content: 'ez-marquee-text',
    },
});
