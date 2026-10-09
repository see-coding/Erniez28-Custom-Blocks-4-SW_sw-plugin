import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-triple-hero',
    label: 'ez-cms.blocks.tripleHero.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-triple-hero',
    previewComponent: 'sw-cms-preview-ez-triple-hero',
    defaultConfig: {
        marginBottom: '0px',
        marginTop: '0px',
        marginLeft: '0px',
        marginRight: '0px',
        sizingMode: 'full_width',
    },
    slots: {
        left: 'ez-hero-cell',
        right: 'ez-hero-cell',
        bottom: 'ez-hero-cell',
    },
});
