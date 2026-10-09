import template from './component.html.twig';
import './component.scss';

Shopware.Component.register('sw-cms-el-ez-before-after-slider', {
    template,
    mixins: [Shopware.Mixin.getByName('cms-element')],
    computed: {
        beforeUrl() {
            return this.element?.data?.mediaBefore?.url || null;
        },
        afterUrl() {
            return this.element?.data?.mediaAfter?.url || null;
        },
    },
    created() {
        this.initElementConfig('ez-before-after-slider');
        this.initElementData('ez-before-after-slider');
    },
});
