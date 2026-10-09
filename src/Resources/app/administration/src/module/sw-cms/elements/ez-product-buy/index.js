/**
 * Erniez28 Custom Blocks - Product Buy Widget Element
 */

Shopware.Component.register('sw-cms-el-preview-ez-product-buy', () => import('./preview'));
Shopware.Component.register('sw-cms-el-config-ez-product-buy', () => import('./config'));
Shopware.Component.register('sw-cms-el-ez-product-buy', () => import('./component'));

// Backward compatibility registration
Shopware.Component.register('ssik-liberty-elem-product-buy-preview', () => import('./preview'));
Shopware.Component.register('ssik-liberty-elem-product-buy-config', () => import('./config'));
Shopware.Component.register('ssik-liberty-elem-product-buy', () => import('./component'));

const Criteria = Shopware.Data.Criteria;
const criteria = new Criteria(1, 25);
criteria.addAssociation('deliveryTime');

const cmsService = Shopware.Service('cmsService');

const buyElementConfig = {
    name: 'ez-product-buy',
    label: 'ez-cms.elements.productBuy.label',
    component: 'sw-cms-el-ez-product-buy',
    configComponent: 'sw-cms-el-config-ez-product-buy',
    previewComponent: 'sw-cms-el-preview-ez-product-buy',
    disabledConfigInfoTextKey: 'sw-cms.elements.buyBox.infoText.tooltipSettingDisabled',
    removable: false,
    hidden: true,
    defaultConfig: {
        product: {
            source: 'static',
            value: null,
            required: false,
            entity: {
                name: 'product',
                criteria: criteria,
            },
        },
        alignment: {
            source: 'static',
            value: null,
        },
    },
    defaultData: {
        product: {
            name: 'Lorem Ipsum dolor',
            productNumber: 'XXXXXX',
            minPurchase: 1,
            deliveryTime: {
                name: '1-3 days',
            },
            price: [
                { gross: 0.00 },
            ],
        },
    },
    collect: cmsService.getCollectFunction(),
};

cmsService.registerCmsElement(buyElementConfig);
cmsService.registerCmsElement({
    ...buyElementConfig,
    name: 'ssik-liberty-product-buy',
    component: 'ssik-liberty-elem-product-buy',
    configComponent: 'ssik-liberty-elem-product-buy-config',
    previewComponent: 'ssik-liberty-elem-product-buy-preview',
});
