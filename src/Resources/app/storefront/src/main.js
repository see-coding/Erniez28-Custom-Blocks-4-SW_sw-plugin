// ==============================================================================
// Erniez28-Custom-Blocks-4-SW - Storefront JavaScript Entrypoint
// ==============================================================================

import EzBeforeAfterSliderPlugin from './plugin/ez-before-after-slider.plugin';

const PluginManager = window.PluginManager;

if (PluginManager) {
    PluginManager.register(
        'EzBeforeAfterSlider',
        EzBeforeAfterSliderPlugin,
        '[data-ez-before-after-slider="true"]'
    );
}
