import template from './config.html.twig';

Shopware.Component.register('sw-cms-el-config-ez-usp-grid', {
    template,
    mixins: [Shopware.Mixin.getByName('cms-element')],
    created() {
        this.initElementConfig('ez-usp-grid');
    },
});
