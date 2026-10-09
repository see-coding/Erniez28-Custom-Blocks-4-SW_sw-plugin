import template from './preview.html.twig';
import './preview.scss';

/**
 * @private
 * @package content
 */
export default {
    template,

    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },
    },
};
