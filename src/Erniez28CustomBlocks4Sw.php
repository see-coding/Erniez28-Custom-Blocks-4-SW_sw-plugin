<?php declare(strict_types=1);

namespace Erniez28CustomBlocks4Sw;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\ActivateContext;
use Shopware\Core\Framework\Plugin\Context\DeactivateContext;
use Shopware\Core\Framework\Plugin\Context\InstallContext;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;
use Shopware\Core\Framework\Plugin\Context\UpdateContext;

/**
 * Class Erniez28CustomBlocks4Sw
 *
 * Professional Shopware 6.6 & 6.7 CMS extension plugin providing exclusive, high-conversion
 * Erlebniswelt (Shopping Experience) blocks and elements:
 * - Responsive multi-column grid rows (2-col, 3-col, 6-col)
 * - Dynamic asymmetrical dual-image rows (75/25 and 25/75)
 * - Triple Hero showcase with interactive hover reveals
 * - Interactive masonry photo/product grid
 * - Diagonal split-image hover teaser
 * - Animated infinite marquee text banner
 * - Modern product showcase gallery & buy-box (high conversion product detail)
 * - EU GPSR (2023/988) & DSGVO/GDPR compliant legal product & shop modal drawer
 * - Minimalist landing page legal footer
 * - Interactive before/after image comparison slider with keyboard accessibility
 * - Conversion-optimized USP trust card grid
 * - Rich Schema.org JSON-LD FAQ accordion
 *
 * @package Erniez28CustomBlocks4Sw
 * @author Erniez28-SEEsg <https://github.com/see-coding>
 */
class Erniez28CustomBlocks4Sw extends Plugin
{
    /**
     * Plugin installation hook.
     *
     * @param InstallContext $installContext
     */
    public function install(InstallContext $installContext): void
    {
        parent::install($installContext);
    }

    /**
     * Plugin update hook.
     *
     * @param UpdateContext $updateContext
     */
    public function update(UpdateContext $updateContext): void
    {
        parent::update($updateContext);
    }

    /**
     * Plugin activation hook.
     *
     * @param ActivateContext $activateContext
     */
    public function activate(ActivateContext $activateContext): void
    {
        parent::activate($activateContext);
    }

    /**
     * Plugin deactivation hook.
     *
     * @param DeactivateContext $deactivateContext
     */
    public function deactivate(DeactivateContext $deactivateContext): void
    {
        parent::deactivate($deactivateContext);
    }

    /**
     * Plugin uninstall hook with strict store-compliant data cleanup routine.
     * When the user unchecks "Keep user data", all plugin configuration values are pruned.
     *
     * @param UninstallContext $uninstallContext
     */
    public function uninstall(UninstallContext $uninstallContext): void
    {
        parent::uninstall($uninstallContext);

        if ($uninstallContext->keepUserData()) {
            return;
        }

        /** @var Connection|null $connection */
        $connection = $this->container?->get(Connection::class);
        if ($connection instanceof Connection) {
            // Remove system config entries for this plugin
            $connection->executeStatement(
                'DELETE FROM `system_config` WHERE `configuration_key` LIKE :prefix',
                ['prefix' => 'Erniez28CustomBlocks4Sw.config.%']
            );
        }
    }
}
