import './component';
import './config';
import './preview';

const cmsService = Shopware.Service('cmsService');

const splitHoverConfig = {
    name: 'ez-split-image-hover',
    label: 'Split Image Hover',
    component: 'sw-cms-el-bp-split-image-hover',
    configComponent: 'sw-cms-el-config-bp-split-image-hover',
    previewComponent: 'sw-cms-el-preview-bp-split-image-hover',
    defaultConfig: {
        media1: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'media',
            },
        },
        media2: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'media',
            },
        },
        url1: {
            source: 'static',
            value: null,
        },
        url2: {
            source: 'static',
            value: null,
        },
        newTab1: {
            source: 'static',
            value: false,
        },
        newTab2: {
            source: 'static',
            value: false,
        },
    },
};

cmsService.registerCmsElement(splitHoverConfig);
cmsService.registerCmsElement({
    ...splitHoverConfig,
    name: 'bp-split-image-hover',
});
