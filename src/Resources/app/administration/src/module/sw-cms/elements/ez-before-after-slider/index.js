import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'ez-before-after-slider',
    label: 'ez-cms.elements.beforeAfterSlider.label',
    component: 'sw-cms-el-ez-before-after-slider',
    configComponent: 'sw-cms-el-config-ez-before-after-slider',
    previewComponent: 'sw-cms-el-preview-ez-before-after-slider',
    defaultConfig: {
        mediaBefore: {
            source: 'static',
            value: null,
            required: true,
            entity: { name: 'media' },
        },
        mediaAfter: {
            source: 'static',
            value: null,
            required: true,
            entity: { name: 'media' },
        },
        labelBefore: {
            source: 'static',
            value: 'Vorher',
        },
        labelAfter: {
            source: 'static',
            value: 'Nachher',
        },
        initialPosition: {
            source: 'static',
            value: 50,
        },
    },
});
