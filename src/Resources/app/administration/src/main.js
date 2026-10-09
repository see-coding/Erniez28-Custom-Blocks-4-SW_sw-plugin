// ==============================================================================
// Erniez28-Custom-Blocks-4-SW - Administration Main Entrypoint
// ==============================================================================

// CMS Blocks
import './module/sw-cms/blocks';

// CMS Elements
import './module/sw-cms/elements';

// Bilingual Snippets
import deDE from './module/snippet/de-DE.json';
import enGB from './module/snippet/en-GB.json';

if (Shopware.Locale) {
    Shopware.Locale.extend('de-DE', deDE);
    Shopware.Locale.extend('en-GB', enGB);
}
