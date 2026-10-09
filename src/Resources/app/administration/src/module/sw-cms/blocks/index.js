/**
 * Erniez28-Custom-Blocks-4-SW - CMS Block Registrations
 *
 * Registers all modernized blocks under category "erniez28-custom-blocks"
 * and provides seamless backwards compatibility for existing theme blocks.
 */

// Core Erniez28 Custom Blocks
import './ez-2col-row';
import './ez-3col-row';
import './ez-6col-row';
import './ez-dual-image-row';
import './ez-dual-image-row-25-75';
import './ez-triple-hero';
import './ez-masonry-grid';
import './ez-split-image-hover';
import './ez-marquee-text';
import './ez-product-detail';
import './ez-minimal-footer';
import './ez-legal-modals';

// New Elite Showcase Blocks
import './ez-before-after-slider';
import './ez-usp-grid';
import './ez-faq-accordion';

// ------------------------------------------------------------------------------
// Backward Compatibility Block Aliases
// (Ensures existing layouts created in earlier themes remain functional)
// ------------------------------------------------------------------------------
const cmsService = Shopware.Service('cmsService');

if (cmsService) {
    // Backward compatibility product detail alias mapped to modern components
    cmsService.registerCmsBlock({
        name: 'ssik-liberty-product-detail',
        label: 'ez-cms.blocks.productDetail.label',
        category: 'erniez28-custom-blocks',
        component: 'sw-cms-block-ez-product-detail',
        previewComponent: 'sw-cms-preview-ez-product-detail',
        defaultConfig: {
            marginBottom: '20px',
            marginTop: '20px',
            marginLeft: '',
            marginRight: '',
            sizingMode: 'boxed',
        },
        slots: {
            left: 'ez-product-gallery',
            right: 'ez-product-buy',
        },
    });

    // Legacy bp-theme aliases
    const legacyBlocks = [
        { name: 'bp-2col-row', target: 'ez-2col-row', slots: { col1: 'text', col2: 'text' } },
        { name: 'bp-3col-row', target: 'ez-3col-row', slots: { col1: 'image', col2: 'image', col3: 'image' } },
        { name: 'bp-6col-row', target: 'ez-6col-row', slots: { col1: 'text', col2: 'text', col3: 'text', col4: 'text', col5: 'text', col6: 'text' } },
        { name: 'bp-dual-image-row', target: 'ez-dual-image-row', slots: { imageLeft: 'ez-dual-image-cell', imageRight: 'ez-dual-image-cell' } },
        { name: 'bp-dual-image-row-25-75', target: 'ez-dual-image-row-25-75', slots: { imageLeft: 'ez-dual-image-cell', imageRight: 'ez-dual-image-cell' } },
        { name: 'bp-triple-hero', target: 'ez-triple-hero', slots: { left: 'ez-hero-cell', right: 'ez-hero-cell', bottom: 'ez-hero-cell' } },
        { name: 'bp-marquee-text', target: 'ez-marquee-text', slots: { content: 'ez-marquee-text' } },
        { name: 'bp-split-image-hover', target: 'ez-split-image-hover', slots: { content: 'ez-split-image-hover' } },
        { name: 'lp-minimal-footer', target: 'ez-minimal-footer', slots: { content: 'ez-minimal-footer' } },
        { name: 'lp-legal-modals', target: 'ez-legal-modals', slots: { content: 'ez-legal-modals' } },
    ];

    legacyBlocks.forEach(block => {
        cmsService.registerCmsBlock({
            name: block.name,
            label: `ez-cms.blocks.${block.target}.label`,
            category: 'erniez28-custom-blocks',
            component: `sw-cms-block-${block.target}`,
            previewComponent: `sw-cms-preview-${block.target}`,
            defaultConfig: {
                marginBottom: '0px',
                marginTop: '0px',
                marginLeft: '0px',
                marginRight: '0px',
                sizingMode: 'boxed',
            },
            slots: block.slots,
        });
    });
}
