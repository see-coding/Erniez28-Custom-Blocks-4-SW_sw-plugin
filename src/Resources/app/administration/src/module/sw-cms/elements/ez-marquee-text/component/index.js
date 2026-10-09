import template from './component.html.twig';
import './component.scss';

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
        marqueeText() {
            return (this.element && this.element.config && this.element.config.text && this.element.config.text.value) || 'MARQUEE TEXT';
        },

        bannerColor() {
            return (this.element && this.element.config && this.element.config.bannerColor && this.element.config.bannerColor.value) || '#000000';
        },

        textColor() {
            return (this.element && this.element.config && this.element.config.textColor && this.element.config.textColor.value) || '#FFFFFF';
        },

        speed() {
            return (this.element && this.element.config && this.element.config.speed && this.element.config.speed.value) || 'normal';
        },

        bannerStyles() {
            return {
                backgroundColor: this.bannerColor,
                color: this.textColor,
            };
        },

        animationDuration() {
            const speeds = { slow: '40s', normal: '20s', fast: '10s' };
            return speeds[this.speed] || '20s';
        },

        trackStyles() {
            return {
                animationDuration: this.animationDuration,
            };
        },
    },
};
