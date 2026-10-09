import './component';
import './config';
import './preview';

const cmsService = Shopware.Service('cmsService');

const dualCellConfig = {
    name: 'ez-dual-image-cell',
    label: 'Dual Image Cell (Bild + Link)',
    component: 'sw-cms-el-bp-dual-image-cell',
    configComponent: 'sw-cms-el-config-bp-dual-image-cell',
    previewComponent: 'sw-cms-el-preview-bp-dual-image-cell',
    defaultConfig: {
        media: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'media',
            },
        },
        url: {
            source: 'static',
            value: null,
        },
        newTab: {
            source: 'static',
            value: false,
        },
        altText: {
            source: 'static',
            value: '',
        },
    },
};

cmsService.registerCmsElement(dualCellConfig);
cmsService.registerCmsElement({
    ...dualCellConfig,
    name: 'bp-dual-image-cell',
});
