import template from './sw-cms-el-bp-split-image-hover.html.twig';
import './sw-cms-el-bp-split-image-hover.scss';

const { Mixin } = Shopware;

Shopware.Component.register('sw-cms-el-bp-split-image-hover', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        image1Url() {
            if (this.element && this.element.data && this.element.data.media1) {
                return this.element.data.media1.url;
            }
            return null;
        },
        image2Url() {
            if (this.element && this.element.data && this.element.data.media2) {
                return this.element.data.media2.url;
            }
            return null;
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('bp-split-image-hover');
        }
    }
});
