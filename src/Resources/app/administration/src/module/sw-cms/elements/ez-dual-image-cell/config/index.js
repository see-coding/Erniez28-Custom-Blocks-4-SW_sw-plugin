import template from './sw-cms-el-config-bp-dual-image-cell.html.twig';
import './sw-cms-el-config-bp-dual-image-cell.scss';

Shopware.Component.register('sw-cms-el-config-bp-dual-image-cell', {
    template,

    mixins: [
        Shopware.Mixin.getByName('cms-element')
    ],

    computed: {
        cmsPageState() {
            return Shopware.State.get('cmsPageState');
        },
        uploadTag() {
            return `cms-element-bp-dual-image-cell-${this.element.id}`;
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('bp-dual-image-cell');

            const defaults = {
                media:   { source: 'static', value: null, required: true, entity: { name: 'media' } },
                url:     { source: 'static', value: null },
                newTab:  { source: 'static', value: false },
                altText: { source: 'static', value: '' }
            };

            for (const key in defaults) {
                if (!this.element.config[key]) {
                    this.element.config[key] = defaults[key];
                }
            }
        },

        onMediaUpload(mediaEntity) {
            const mediaItem = Array.isArray(mediaEntity) ? mediaEntity[0] : mediaEntity;
            this.element.config.media.value = mediaItem.id;
            this.element.config.media.source = 'static';
            if (this.element.data) {
                this.element.data.media = mediaItem;
            }
            this.$emit('element-update', this.element);
        },

        onMediaRemove() {
            this.element.config.media.value = null;
            if (this.element.data) {
                this.element.data.media = null;
            }
            this.$emit('element-update', this.element);
        },

        emitUpdate() {
            this.$emit('element-update', this.element);
        }
    }
});
