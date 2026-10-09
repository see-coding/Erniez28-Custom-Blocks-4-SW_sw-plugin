import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-3col-row',
    label: 'ez-cms.blocks.threeColRow.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-3col-row',
    previewComponent: 'sw-cms-preview-ez-3col-row',
    defaultConfig: {
        marginBottom: '0px',
        marginTop: '0px',
        marginLeft: '0px',
        marginRight: '0px',
        sizingMode: 'full_width',
    },
    slots: {
        col1: 'image',
        col2: 'image',
        col3: 'image',
    },
});
