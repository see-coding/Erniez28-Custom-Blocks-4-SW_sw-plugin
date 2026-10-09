import template from './component.html.twig';
import './component.scss';

const { Mixin } = Shopware;

/**
 * @private
 * @package buyers-experience
 */
export default {
    template,

    mixins: [
        Mixin.getByName('cms-element'),
        Mixin.getByName('placeholder'),
    ],

    computed: {
        pageType() {
            return (this.cmsPageState && this.cmsPageState.currentPage && this.cmsPageState.currentPage.type) || '';
        },

        isProductPageType() {
            return this.pageType === 'product_detail';
        },
    },

    watch: {
        pageType(newPageType) {
            this.$set(this.element, 'locked', newPageType === 'product_detail');
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            const elementName = this.element.name || 'ez-product-buy';
            this.initElementConfig(elementName);
            this.initElementData(elementName);
            this.$set(this.element, 'locked', this.isProductPageType);
        },
    },
};
