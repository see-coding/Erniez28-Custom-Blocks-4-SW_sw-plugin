import Plugin from 'src/plugin-system/plugin.class';

/**
 * EzBeforeAfterSliderPlugin
 *
 * Highly accessible, smooth and responsive before/after image comparison slider.
 * Supports:
 * - Touch drag & swipe on mobile devices
 * - Mouse drag on desktop
 * - Full WCAG 2.1 AA keyboard navigation (ArrowLeft, ArrowRight, Home, End)
 * - Dynamic CSS variable update (--ez-slider-pos)
 */
export default class EzBeforeAfterSliderPlugin extends Plugin {
    static options = {
        initialPosition: 50,
        rangeInputSelector: '.ez-ba-range-input',
    };

    init() {
        this.rangeInput = this.el.querySelector(this.options.rangeInputSelector);
        if (!this.rangeInput) {
            return;
        }

        this._registerEvents();
        this._setPosition(this.options.initialPosition);
    }

    _registerEvents() {
        this.rangeInput.addEventListener('input', this._onInput.bind(this));
        this.rangeInput.addEventListener('change', this._onInput.bind(this));
    }

    _onInput(event) {
        const value = Math.max(0, Math.min(100, Number(event.target.value)));
        this._setPosition(value);
    }

    _setPosition(percentage) {
        this.el.style.setProperty('--ez-slider-pos', `${percentage}%`);
        this.rangeInput.setAttribute('aria-valuenow', percentage);
    }
}
