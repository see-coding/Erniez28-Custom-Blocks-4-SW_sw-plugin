import template from './component.html.twig';
import './component.scss';

Shopware.Component.register('sw-cms-el-ez-faq-accordion', {
    template,
    mixins: [Shopware.Mixin.getByName('cms-element')],
    created() {
        this.initElementConfig('ez-faq-accordion');
    },
});
