# Erniez28 - Custom CMS Blocks for Shopware 6 (`Erniez28CustomBlocks4Sw`)

[![Shopware](https://img.shields.io/badge/Shopware-6.6%20%7C%206.7-189EFF?style=flat-square&logo=shopware&logoColor=white)](https://shopware.com)
[![PHP](https://img.shields.io/badge/PHP-%3E%3D%208.2-777BB4?style=flat-square&logo=php&logoColor=white)](https://php.net)
[![Vite](https://img.shields.io/badge/Vite-6.x%20Ready-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![EU Compliance](https://img.shields.io/badge/EU%20Compliance-GDPR%20%7C%20GPSR%20%7C%20BFSG-28a745?style=flat-square)](https://ec.europa.eu)
[![WCAG](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-blue?style=flat-square)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License](https://img.shields.io/badge/License-MIT-black?style=flat-square)](LICENSE)

An executive-grade, production-ready Shopware 6 plugin delivering a comprehensive suite of high-conversion Shopping Experience (CMS / Erlebniswelten) blocks and elements. Engineered for high-end eCommerce merchants and agencies demanding clean architecture, zero technical debt, strict EU compliance, and stellar frontend performance.

---

## 🌟 Key Highlights & Engineering Quality

- **Zero Legacy Baggage**: Complete refactoring and elimination of outdated third-party legacy remnants (including historical `SSIK` identifiers), unified under a clean, collision-free `ez-` / `erniez28-` namespace.
- **Seamless Backwards Compatibility**: Transparent aliasing layer for historical block and element IDs (`bp-*`, `ssik-*`, `lp-*`), ensuring existing layouts render without database breakage.
- **Shopware 6.7 Vite Ready**: Pre-compiled and production-bundled administration assets adhering to Shopware 6.7's Vite architecture with full `.vite/manifest.json` asset tree.
- **Strict EU Regulatory Compliance**:
  - **GDPR / DSGVO & TDDDG**: 100% self-contained local assets. Zero unconsented external CDN requests (no third-party Google Fonts, unpkg, or cdnjs dependencies).
  - **BFSG (European Accessibility Act 2025 / WCAG 2.1 AA)**: Full keyboard navigation (Arrow keys, Home, End), ARIA roles and attributes, visible `:focus-visible` focus indicators, and touch targets ≥ 44×44px.
  - **GPSR (EU 2023/988)**: Dedicated economic operator, manufacturer, and safety modal triggers for transparent product safety compliance.
- **High-Performance Architecture**: Modular SCSS with CSS custom properties, minimal bundle footprint, and vanilla JavaScript Storefront plugins following Shopware's native `Plugin` lifecycle.
- **Shopware Community Store Ready**: Strict PHP 8.2+ types, clean `keepUserData()` uninstall cleanup routines, bilingual German (`de-DE`) and English (`en-GB`) snippets.

---

## 📦 CMS Blocks & Elements Catalog

The plugin organizes its components in the Shopware CMS Designer under the category **"Erniez28 Custom Blocks"**:

| Block Identifier | Element | Description & Features |
| :--- | :--- | :--- |
| `ez-2col-row` | Native / Standard | Flexible 2-column responsive layout grid with configurable gap spacing. |
| `ez-3col-row` | Native / Standard | Clean 3-column responsive layout grid for feature callouts and highlights. |
| `ez-6col-row` | Native / Standard | High-density 6-column micro-grid ideal for partner badges and icon strips. |
| `ez-dual-image-row` | `ez-dual-image-cell` | Balanced 50/50 dual image display with 4 customizable textured hover overlays. |
| `ez-dual-image-row-25-75` | `ez-dual-image-cell` | Asymmetric 25/75 showcase for editorial storytelling and feature spotlighting. |
| `ez-triple-hero` | `ez-hero-cell` | High-impact 3-card hero banner with custom headline badges and CTA overlays. |
| `ez-masonry-grid` | `ez-hero-cell` | Dynamic masonry collage grid for editorial and lookbook presentations. |
| `ez-split-image-hover` | `ez-split-image-hover` | Dual-state interactive hover card revealing secondary angles or details on hover. |
| `ez-marquee-text` | `ez-marquee-text` | GPU-accelerated continuous ticker marquee for promotions, reviews, and news. |
| `ez-product-detail` | `ez-product-gallery`, `ez-product-buy` | Fully decoupled, high-converting product detail layout (replaces legacy SSIK detail). |
| `ez-before-after-slider` | `ez-before-after-slider` | Interactive comparison slider with drag, touch, and WCAG keyboard controls. |
| `ez-usp-grid` | `ez-usp-grid` | Conversion-optimized 4-card value proposition grid (Shipping, Warranty, Support). |
| `ez-faq-accordion` | `ez-faq-accordion` | Accessible accordion with Schema.org `FAQPage` microdata for rich search snippets. |
| `ez-minimal-footer` | `ez-minimal-footer` | Distraction-free landing page footer with dynamic Shopware legal links. |
| `ez-legal-modals` | `ez-legal-modals` | Dedicated trigger cards for GPSR, Impressum, and Privacy with Ajax modal support. |

---

## 🧩 Architectural Deep Dive

### 1. Storefront Component Architecture
- **Vanilla JS Plugin**: Interactive components (such as `ez-before-after-slider`) extend Shopware's native `window.PluginBase`. Event listeners are bound safely and cleaned up on page transitions.
- **SCSS Architecture**: All stylesheets are segregated into modular BEM-compliant files in `src/Resources/app/storefront/src/scss/blocks/` and bundled cleanly through `base.scss`:
  ```text
  src/Resources/app/storefront/src/scss/
  ├── base.scss
  └── blocks/
      ├── _ez-before-after-slider.scss
      ├── _ez-dual-image-row.scss
      ├── _ez-faq-accordion.scss
      ├── _ez-hover-overlays.scss
      ├── _ez-legal-modals.scss
      ├── _ez-marquee-text.scss
      ├── _ez-masonry-grid.scss
      ├── _ez-minimal-footer.scss
      ├── _ez-multi-col.scss
      ├── _ez-product-detail.scss
      ├── _ez-split-image-hover.scss
      ├── _ez-triple-hero.scss
      ├── _ez-usp-grid.scss
      └── _ez-utilities.scss
  ```

### 2. Administration Module & Vite Packaging
Shopware 6.7 utilizes Vite for administration extension compilation. This repository includes:
- Source Vue components, Twig previews, and SCSS in `src/Resources/app/administration/src/module/sw-cms/`.
- Pre-compiled production bundles in `src/Resources/public/administration/assets/`.
- Complete manifest definitions in `src/Resources/public/administration/.vite/manifest.json`.

### 3. Backwards-Compatibility Layer
For seamless migration from legacy setups (including `Sw6MasterTheme` and `LandingPageShowHideSwitch`):
- All legacy block keys (`bp-triple-hero`, `bp-masonry-grid`, `ssik-liberty-product-detail`, `lp-minimal-footer`, etc.) are registered as alias views delegating to the new canonical `ez-*` templates.
- Administration element registrations maintain aliased configs for legacy element names (`bp-hero-cell`, `ssik-liberty-product-images`, etc.), preventing layout loss in existing Shopware databases.

---

## 🛡️ Legal & Accessibility Standards

### European Accessibility Act (BFSG / WCAG 2.1 AA)
Interactive components implement accessibility-first engineering:
```html
<!-- Example: WCAG 2.1 AA Compliant Comparison Slider Handle -->
<div class="ez-before-after-slider__handle"
     role="slider"
     tabindex="0"
     aria-label="Image comparison position"
     aria-valuemin="0"
     aria-valuemax="100"
     aria-valuenow="50">
    <div class="ez-before-after-slider__handle-line"></div>
    <div class="ez-before-after-slider__handle-button">
        <span class="ez-before-after-slider__handle-arrow ez-arrow-left" aria-hidden="true">‹</span>
        <span class="ez-before-after-slider__handle-arrow ez-arrow-right" aria-hidden="true">›</span>
    </div>
</div>
```
- Fully controllable via keyboard (`ArrowLeft`, `ArrowRight`, `Home`, `End`).
- Focus rings are styled via `:focus-visible` with high-contrast outlines.

### GDPR & TDDDG
- Zero external font calls or scripts.
- Modals load privacy notices and legal policies dynamically via Shopware's native `data-ajax-modal="true"`.
- Textures and icons are distributed as local SVG and PNG assets within `src/Resources/public/static/`.

---

## 🚀 Installation & Activation

### 1. Clone into your Shopware installation
```bash
cd custom/plugins
git clone git@github.com:see-coding/Erniez28-Custom-Blocks-4-SW_sw-plugin.git Erniez28CustomBlocks4Sw
```

### 2. Refresh & Install Plugin
```bash
bin/console plugin:refresh
bin/console plugin:install --activate Erniez28CustomBlocks4Sw
```

### 3. Compile Assets & Clear Cache
```bash
bin/console assets:install
bin/console theme:compile
bin/console cache:clear
```

---

## 🛠️ Development & Administration Build

To rebuild the Administration assets in Shopware 6.7:
```bash
# Export your project root and build extensions
cd vendor/shopware/administration/Resources/app/administration
PROJECT_ROOT=/path/to/shopware SHOPWARE_ADMIN_BUILD_ONLY_EXTENSIONS=1 npm run build
bin/console assets:install
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

---

**Crafted with precision by see-coding.**  
*Modern eCommerce Engineering & High-Converting Shopware Solutions.*
