import template from './component.html.twig';
import './component.scss';

Shopware.Component.register('sw-cms-el-ez-usp-grid', {
    template,
    mixins: [Shopware.Mixin.getByName('cms-element')],
    created() {
        this.initElementConfig('ez-usp-grid');
    },
});
