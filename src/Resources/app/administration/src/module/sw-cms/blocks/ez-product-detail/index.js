import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-product-detail',
    label: 'ez-cms.blocks.productDetail.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-product-detail',
    previewComponent: 'sw-cms-preview-ez-product-detail',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '',
        marginRight: '',
        sizingMode: 'boxed',
    },
    slots: {
        left: 'ez-product-gallery',
        right: 'ez-product-buy',
    },
});
