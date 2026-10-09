import template from './sw-cms-el-bp-dual-image-cell.html.twig';
import './sw-cms-el-bp-dual-image-cell.scss';

Shopware.Component.register('sw-cms-el-bp-dual-image-cell', {
    template,

    mixins: [
        Shopware.Mixin.getByName('cms-element')
    ],

    computed: {
        mediaItem() {
            return (this.element.data && this.element.data.media) || null;
        },
        mediaUrl() {
            return (this.mediaItem && this.mediaItem.url) || null;
        },
        altText() {
            return (this.element.config && this.element.config.altText && this.element.config.altText.value) || '';
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('bp-dual-image-cell');
        }
    }
});
