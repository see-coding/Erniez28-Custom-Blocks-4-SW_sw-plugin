import template from './sw-cms-el-bp-hero-cell.html.twig';
import './sw-cms-el-bp-hero-cell.scss';

Shopware.Component.register('sw-cms-el-bp-hero-cell', {
    template,

    mixins: [
        Shopware.Mixin.getByName('cms-element')
    ],

    computed: {
        backgroundMedia() {
            return (this.element.data && this.element.data.backgroundMedia) || this.element.config.backgroundMedia.value;
        },

        logoMedia() {
            return (this.element.data && this.element.data.logoMedia) || this.element.config.logoMedia.value;
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('bp-hero-cell');
        }
    }
});
