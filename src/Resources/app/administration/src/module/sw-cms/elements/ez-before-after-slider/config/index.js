import template from './config.html.twig';

Shopware.Component.register('sw-cms-el-config-ez-before-after-slider', {
    template,
    mixins: [Shopware.Mixin.getByName('cms-element')],
    computed: {
        cmsPageState() {
            return Shopware.State.get('cmsPageState');
        },
    },
    created() {
        this.initElementConfig('ez-before-after-slider');
    },
    methods: {
        onMediaBeforeUpload(mediaItem) {
            this.element.config.mediaBefore.value = mediaItem.id;
            this.updateElementData(mediaItem, 'mediaBefore');
        },
        onMediaBeforeRemove() {
            this.element.config.mediaBefore.value = null;
            this.updateElementData(null, 'mediaBefore');
        },
        onMediaAfterUpload(mediaItem) {
            this.element.config.mediaAfter.value = mediaItem.id;
            this.updateElementData(mediaItem, 'mediaAfter');
        },
        onMediaAfterRemove() {
            this.element.config.mediaAfter.value = null;
            this.updateElementData(null, 'mediaAfter');
        },
        updateElementData(media = null, slot = 'mediaBefore') {
            const mediaKey = slot;
            if (!this.element.data) {
                this.$set(this.element, 'data', {});
            }
            this.$set(this.element.data, mediaKey, media);
            this.$emit('element-update', this.element);
        },
    },
});
