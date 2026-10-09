import template from './sw-cms-el-config-bp-split-image-hover.html.twig';
import './sw-cms-el-config-bp-split-image-hover.scss';

const { Mixin } = Shopware;

Shopware.Component.register('sw-cms-el-config-bp-split-image-hover', {
    template,

    inject: ['repositoryFactory'],

    emits: ['element-update'],

    mixins: [
        Mixin.getByName('cms-element')
    ],

    data() {
        return {
            mediaModal1IsOpen: false,
            mediaModal2IsOpen: false,
        };
    },

    computed: {
        mediaRepository() {
            return this.repositoryFactory.create('media');
        },

        uploadTag1() {
            return `cms-element-bp-split-image-1-${this.element.id}`;
        },

        uploadTag2() {
            return `cms-element-bp-split-image-2-${this.element.id}`;
        },

        previewSource1() {
            if (this.element && this.element.data && this.element.data.media1 && this.element.data.media1.id) {
                return this.element.data.media1;
            }
            return this.element.config.media1.value;
        },

        previewSource2() {
            if (this.element && this.element.data && this.element.data.media2 && this.element.data.media2.id) {
                return this.element.data.media2;
            }
            return this.element.config.media2.value;
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('bp-split-image-hover');
        },

        /* ------------------------------------------------
           Image 1
           ------------------------------------------------ */
        async onImage1Upload({ targetId }) {
            const mediaEntity = await this.mediaRepository.get(targetId);
            this.element.config.media1.value = mediaEntity.id;
            this.element.config.media1.source = 'static';
            this.updateElementData1(mediaEntity);
            this.$emit('element-update', this.element);
        },

        onImage1Remove() {
            this.element.config.media1.value = null;
            this.updateElementData1(null);
            this.$emit('element-update', this.element);
        },

        onOpenMedia1Modal() {
            this.mediaModal1IsOpen = true;
        },

        onCloseMedia1Modal() {
            this.mediaModal1IsOpen = false;
        },

        onSelection1Change(mediaEntity) {
            const media = mediaEntity[0];
            this.element.config.media1.value = media.id;
            this.element.config.media1.source = 'static';
            this.updateElementData1(media);
            this.$emit('element-update', this.element);
        },

        updateElementData1(media) {
            if (!this.element.data) {
                this.element.data = {};
            }
            this.element.data.media1 = media;
        },

        /* ------------------------------------------------
           Image 2
           ------------------------------------------------ */
        async onImage2Upload({ targetId }) {
            const mediaEntity = await this.mediaRepository.get(targetId);
            this.element.config.media2.value = mediaEntity.id;
            this.element.config.media2.source = 'static';
            this.updateElementData2(mediaEntity);
            this.$emit('element-update', this.element);
        },

        onImage2Remove() {
            this.element.config.media2.value = null;
            this.updateElementData2(null);
            this.$emit('element-update', this.element);
        },

        onOpenMedia2Modal() {
            this.mediaModal2IsOpen = true;
        },

        onCloseMedia2Modal() {
            this.mediaModal2IsOpen = false;
        },

        onSelection2Change(mediaEntity) {
            const media = mediaEntity[0];
            this.element.config.media2.value = media.id;
            this.element.config.media2.source = 'static';
            this.updateElementData2(media);
            this.$emit('element-update', this.element);
        },

        updateElementData2(media) {
            if (!this.element.data) {
                this.element.data = {};
            }
            this.element.data.media2 = media;
        },

        emitUpdate() {
            this.$emit('element-update', this.element);
        }
    }
});
