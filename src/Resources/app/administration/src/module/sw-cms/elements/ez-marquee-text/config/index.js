import template from './config.html.twig';

/**
 * @private
 * @package buyers-experience
 */
export default {
    template,

    mixins: [
        Shopware.Mixin.getByName('cms-element'),
    ],

    computed: {
        speedOptions() {
            return [
                { value: 'slow', label: this.$tc('bp-cms.elements.marqueeText.config.speedSlow') },
                { value: 'normal', label: this.$tc('bp-cms.elements.marqueeText.config.speedNormal') },
                { value: 'fast', label: this.$tc('bp-cms.elements.marqueeText.config.speedFast') },
            ];
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('bp-marquee-text');
        },
    },
};
