Shopware.Component.register('sw-cms-el-bp-marquee-text', () => import('./component'));
Shopware.Component.register('sw-cms-el-config-bp-marquee-text', () => import('./config'));
Shopware.Component.register('sw-cms-el-preview-bp-marquee-text', () => import('./preview'));

const cmsService = Shopware.Service('cmsService');

const marqueeElementConfig = {
    name: 'ez-marquee-text',
    label: 'ez-cms.elements.marqueeText.label',
    component: 'sw-cms-el-bp-marquee-text',
    configComponent: 'sw-cms-el-config-bp-marquee-text',
    previewComponent: 'sw-cms-el-preview-bp-marquee-text',
    defaultConfig: {
        text: {
            source: 'static',
            value: 'EXCLUSIVE SPECIAL DROP ★ ERNIEZ28 CUSTOM BLOCKS',
        },
        bannerColor: {
            source: 'static',
            value: '#000000',
        },
        textColor: {
            source: 'static',
            value: '#FFFFFF',
        },
        speed: {
            source: 'static',
            value: 'normal',
        },
    },
};

cmsService.registerCmsElement(marqueeElementConfig);
cmsService.registerCmsElement({
    ...marqueeElementConfig,
    name: 'bp-marquee-text',
    label: 'bp-cms.elements.marqueeText.label',
});
