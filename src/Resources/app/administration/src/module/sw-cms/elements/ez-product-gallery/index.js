/**
 * Erniez28 Custom Blocks - Product Gallery Element
 */

Shopware.Component.register('sw-cms-el-preview-ez-product-gallery', () => import('./preview'));
Shopware.Component.register('sw-cms-el-config-ez-product-gallery', () => import('./config'));
Shopware.Component.register('sw-cms-el-ez-product-gallery', () => import('./component'));

// Backward compatibility registration
Shopware.Component.register('ssik-liberty-elem-product-images-preview', () => import('./preview'));
Shopware.Component.register('ssik-liberty-elem-product-images-config', () => import('./config'));
Shopware.Component.register('ssik-liberty-elem-product-images', () => import('./component'));

const cmsService = Shopware.Service('cmsService');

const galleryElementConfig = {
    name: 'ez-product-gallery',
    label: 'ez-cms.elements.productGallery.label',
    component: 'sw-cms-el-ez-product-gallery',
    configComponent: 'sw-cms-el-config-ez-product-gallery',
    previewComponent: 'sw-cms-el-preview-ez-product-gallery',
    disabledConfigInfoTextKey: 'sw-cms.elements.buyBox.infoText.tooltipSettingDisabled',
    removable: false,
    hidden: true,
    defaultConfig: {
        sliderItems: {
            source: 'static',
            value: [],
            type: Array,
            required: false,
            entity: {
                name: 'media',
            },
        },
        navigationArrows: {
            source: 'static',
            value: 'inside',
        },
        navigationDots: {
            source: 'static',
            value: null,
        },
        galleryPosition: {
            source: 'static',
            value: 'left',
        },
        displayMode: {
            source: 'static',
            value: 'standard',
        },
        minHeight: {
            source: 'static',
            value: '340px',
        },
        verticalAlign: {
            source: 'static',
            value: null,
        },
        zoom: {
            source: 'static',
            value: false,
        },
        fullScreen: {
            source: 'static',
            value: false,
        },
        keepAspectRatioOnZoom: {
            source: 'static',
            value: true,
        },
        magnifierOverGallery: {
            source: 'static',
            value: false,
        },
    },
    enrich: function enrich(elem, data) {
        if (Object.keys(data).length < 1) {
            return;
        }

        let entityCount = 0;
        Object.keys(elem.config).forEach((configKey) => {
            const entity = elem.config[configKey].entity;

            if (!entity) {
                return;
            }

            const entityKey = `entity-${entity.name}-${entityCount}`;

            if (!data[entityKey]) {
                return;
            }

            entityCount += 1;

            elem.data[configKey] = [];
            elem.config[configKey].value.forEach((sliderItem) => {
                elem.data[configKey].push({
                    newTab: sliderItem.newTab,
                    url: sliderItem.url,
                    media: data[entityKey].get(sliderItem.mediaId),
                });
            });
        });
    },
};

cmsService.registerCmsElement(galleryElementConfig);
cmsService.registerCmsElement({
    ...galleryElementConfig,
    name: 'ssik-liberty-product-images',
    component: 'ssik-liberty-elem-product-images',
    configComponent: 'ssik-liberty-elem-product-images-config',
    previewComponent: 'ssik-liberty-elem-product-images-preview',
});
