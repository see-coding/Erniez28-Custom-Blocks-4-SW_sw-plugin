import template from './sw-cms-el-config-bp-hero-cell.html.twig';
import './sw-cms-el-config-bp-hero-cell.scss';

Shopware.Component.register('sw-cms-el-config-bp-hero-cell', {
    template,

    mixins: [
        Shopware.Mixin.getByName('cms-element')
    ],

    computed: {
        cmsPageState() {
            return Shopware.State.get('cmsPageState');
        },

        backgroundMediaRepository() {
            return Shopware.Service('repositoryFactory').create('media');
        },

        logoMediaRepository() {
            return Shopware.Service('repositoryFactory').create('media');
        },
        uploadTagBackground() {
            return `cms-element-bp-hero-cell-bg-${this.element.id}`;
        },

        uploadTagLogo() {
            return `cms-element-bp-hero-cell-logo-${this.element.id}`;
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('bp-hero-cell');

            const defaultConfig = {
                backgroundMedia: { source: 'static', value: null, required: true, entity: { name: 'media' } },
                logoMedia: { source: 'static', value: null, required: false, entity: { name: 'media' } },

                url: { source: 'static', value: null }
            };

            for (const key in defaultConfig) {
                if (!this.element.config[key]) {
                    this.element.config[key] = defaultConfig[key];
                }
            }
        },

        onBackgroundMediaUpload(mediaEntity) {
            const mediaItem = Array.isArray(mediaEntity) ? mediaEntity[0] : mediaEntity;
            this.element.config.backgroundMedia.value = mediaItem.id;
            this.element.config.backgroundMedia.source = 'static';
            if (this.element.data) {
                this.element.data.backgroundMedia = mediaItem;
            }
            this.$emit('element-update', this.element);
        },

        onBackgroundMediaRemove() {
            this.element.config.backgroundMedia.value = null;
            if (this.element.data) {
                this.element.data.backgroundMedia = null;
            }
            this.$emit('element-update', this.element);
        },



        onLogoMediaUpload(mediaEntity) {
            const mediaItem = Array.isArray(mediaEntity) ? mediaEntity[0] : mediaEntity;
            this.element.config.logoMedia.value = mediaItem.id;
            this.element.config.logoMedia.source = 'static';
            if (this.element.data) {
                this.element.data.logoMedia = mediaItem;
            }
            this.$emit('element-update', this.element);
        },

        onLogoMediaRemove() {
            this.element.config.logoMedia.value = null;
            if (this.element.data) {
                this.element.data.logoMedia = null;
            }
            this.$emit('element-update', this.element);
        },

        emitUpdate() {
            this.$emit('element-update', this.element);
        }
    }
});
