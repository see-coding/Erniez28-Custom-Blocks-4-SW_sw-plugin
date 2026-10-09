import './component';
import './config';
import './preview';

const cmsService = Shopware.Service('cmsService');

const heroCellConfig = {
    name: 'ez-hero-cell',
    label: 'Hero Cell (Bild + Logo)',
    component: 'sw-cms-el-bp-hero-cell',
    configComponent: 'sw-cms-el-config-bp-hero-cell',
    previewComponent: 'sw-cms-el-preview-bp-hero-cell',
    defaultConfig: {
        backgroundMedia: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'media',
            },
        },
        logoMedia: {
            source: 'static',
            value: null,
            required: false,
            entity: {
                name: 'media',
            },
        },
        url: {
            source: 'static',
            value: null,
        },
    },
};

cmsService.registerCmsElement(heroCellConfig);
cmsService.registerCmsElement({
    ...heroCellConfig,
    name: 'bp-hero-cell',
});
