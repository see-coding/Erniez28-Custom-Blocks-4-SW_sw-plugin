import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ez-masonry-grid',
    label: 'ez-cms.blocks.masonryGrid.label',
    category: 'erniez28-custom-blocks',
    component: 'sw-cms-block-ez-masonry-grid',
    previewComponent: 'sw-cms-preview-ez-masonry-grid',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        image1: 'image',
        image2: 'image',
        image3: 'image',
        image4: 'image',
        image5: 'image',
        image6: 'image',
        image7: 'image',
        image8: 'image',
        image9: 'image',
        image10: 'image',
    },
});
