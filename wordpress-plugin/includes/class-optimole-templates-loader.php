<?php
/**
 * Template Loader for Optimole Templates
 *
 * @package Optimole_Templates
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Template Loader Class
 */
class Optimole_Templates_Loader {

    /**
     * Constructor
     */
    public function __construct() {
        // Register custom admin page
        add_action('admin_menu', array($this, 'register_admin_menu'));
        
        // Register AJAX handlers
        add_action('wp_ajax_optimole_get_template_data', array($this, 'get_template_data'));
        add_action('wp_ajax_nopriv_optimole_get_template_data', array($this, 'get_template_data'));
    }

    /**
     * Register admin menu
     */
    public function register_admin_menu() {
        add_menu_page(
            __('Optimole Templates', 'optimole-templates'),
            __('Optimole Templates', 'optimole-templates'),
            'manage_options',
            'optimole-templates',
            array($this, 'admin_page'),
            'dashicons-layout',
            30
        );
    }

    /**
     * Admin page callback
     */
    public function admin_page() {
        ?>
        <div class="wrap">
            <h1><?php _e('Optimole Templates', 'optimole-templates'); ?></h1>
            
            <div class="card">
                <h2><?php _e('How to Use Optimole Templates', 'optimole-templates'); ?></h2>
                <p><?php _e('This plugin provides custom page templates and shortcodes for Optimole components.', 'optimole-templates'); ?></p>
                
                <h3><?php _e('Using Page Templates', 'optimole-templates'); ?></h3>
                <ol>
                    <li><?php _e('Create a new page or edit an existing one.', 'optimole-templates'); ?></li>
                    <li><?php _e('In the Page Attributes meta box, select one of the Optimole templates from the Template dropdown.', 'optimole-templates'); ?></li>
                    <li><?php _e('Update/publish the page.', 'optimole-templates'); ?></li>
                </ol>
                
                <h3><?php _e('Using Shortcodes', 'optimole-templates'); ?></h3>
                <p><?php _e('You can also embed Optimole components using shortcodes:', 'optimole-templates'); ?></p>
                <ul>
                    <li><code>[optimole_home]</code> - <?php _e('Displays the homepage.', 'optimole-templates'); ?></li>
                    <li><code>[optimole_pricing]</code> - <?php _e('Displays the pricing page.', 'optimole-templates'); ?></li>
                    <li><code>[optimole_compress]</code> - <?php _e('Displays the image compression tool.', 'optimole-templates'); ?></li>
                    <li><code>[optimole_about]</code> - <?php _e('Displays the about page.', 'optimole-templates'); ?></li>
                    <li><code>[optimole_contact]</code> - <?php _e('Displays the contact form.', 'optimole-templates'); ?></li>
                    <li><code>[optimole_wordpress]</code> - <?php _e('Displays the WordPress plugin page.', 'optimole-templates'); ?></li>
                    <li><code>[optimole_dam]</code> - <?php _e('Displays the Digital Asset Management page.', 'optimole-templates'); ?></li>
                    <li><code>[optimole_compare]</code> - <?php _e('Displays the comparison page.', 'optimole-templates'); ?></li>
                    <li><code>[optimole_imagekit]</code> - <?php _e('Displays the Optimole vs ImageKit comparison page.', 'optimole-templates'); ?></li>
                </ul>
            </div>
        </div>
        <?php
    }

    /**
     * AJAX handler for getting template data
     */
    public function get_template_data() {
        // Check nonce
        if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'optimole_templates_nonce')) {
            wp_send_json_error(array('message' => __('Security check failed.', 'optimole-templates')));
        }

        // Get template type
        $template_type = isset($_POST['template_type']) ? sanitize_text_field($_POST['template_type']) : '';
        
        // Return data based on template type
        switch ($template_type) {
            case 'pricing':
                $data = $this->get_pricing_data();
                break;
            case 'compress':
                $data = $this->get_compress_data();
                break;
            case 'about':
                $data = $this->get_about_data();
                break;
            case 'contact':
                $data = $this->get_contact_data();
                break;
            case 'home':
                $data = $this->get_home_data();
                break;
            case 'wordpress':
                $data = $this->get_wordpress_data();
                break;
            case 'dam':
                $data = $this->get_dam_data();
                break;
            case 'compare':
                $data = $this->get_comparison_data();
                break;
            case 'imagekit':
                $data = $this->get_imagekit_data();
                break;
            default:
                $data = array();
                break;
        }

        wp_send_json_success($data);
    }

    /**
     * Get pricing data
     */
    private function get_pricing_data() {
        return array(
            'title' => __('Optimole Pricing', 'optimole-templates'),
            'description' => __('Choose the plan that fits your needs', 'optimole-templates'),
            'plans' => array(
                array(
                    'name' => __('Free', 'optimole-templates'),
                    'price' => '0',
                    'features' => array(
                        __('5,000 visits/month', 'optimole-templates'),
                        __('Unlimited image optimization', 'optimole-templates'),
                        __('Automatic image optimization', 'optimole-templates'),
                        __('CDN delivery', 'optimole-templates'),
                    ),
                ),
                array(
                    'name' => __('Essential', 'optimole-templates'),
                    'price' => '19',
                    'features' => array(
                        __('50,000 visits/month', 'optimole-templates'),
                        __('Unlimited image optimization', 'optimole-templates'),
                        __('Automatic image optimization', 'optimole-templates'),
                        __('CDN delivery', 'optimole-templates'),
                        __('Priority support', 'optimole-templates'),
                    ),
                ),
                array(
                    'name' => __('Professional', 'optimole-templates'),
                    'price' => '39',
                    'features' => array(
                        __('150,000 visits/month', 'optimole-templates'),
                        __('Unlimited image optimization', 'optimole-templates'),
                        __('Automatic image optimization', 'optimole-templates'),
                        __('CDN delivery', 'optimole-templates'),
                        __('Priority support', 'optimole-templates'),
                        __('Optimization statistics', 'optimole-templates'),
                    ),
                ),
            ),
        );
    }

    /**
     * Get compress data
     */
    private function get_compress_data() {
        return array(
            'title' => __('Image Compression Tool', 'optimole-templates'),
            'description' => __('Compress your images without losing quality', 'optimole-templates'),
            'maxUploadSize' => wp_max_upload_size(),
            'allowedTypes' => array('image/jpeg', 'image/png'),
        );
    }

    /**
     * Get about data
     */
    private function get_about_data() {
        return array(
            'title' => __('About Optimole', 'optimole-templates'),
            'description' => __('Learn more about Optimole and our mission', 'optimole-templates'),
            'content' => __('Optimole is a service that helps you optimize your images and speed up your websites.', 'optimole-templates'),
        );
    }

    /**
     * Get contact data
     */
    private function get_contact_data() {
        return array(
            'title' => __('Contact Us', 'optimole-templates'),
            'description' => __('Get in touch with our support team', 'optimole-templates'),
            'email' => get_option('admin_email'),
        );
    }

    /**
     * Get home data
     */
    private function get_home_data() {
        return array(
            'title' => __('Optimole - Image Optimization for WordPress', 'optimole-templates'),
            'description' => __('Speed up your website with our image optimization service', 'optimole-templates'),
        );
    }

    /**
     * Get WordPress data
     */
    private function get_wordpress_data() {
        return array(
            'title' => __('Optimole WordPress Plugin', 'optimole-templates'),
            'description' => __('Image optimization for WordPress', 'optimole-templates'),
            'content' => __('Optimole is a WordPress plugin that helps you optimize your images.', 'optimole-templates'),
        );
    }

    /**
     * Get Digital Asset Management data
     */
    private function get_dam_data() {
        return array(
            'title' => __('Digital Asset Management', 'optimole-templates'),
            'description' => __('Manage and optimize your digital assets', 'optimole-templates'),
            'content' => __('Organize, manage, and optimize your digital assets with Optimole.', 'optimole-templates'),
        );
    }

    /**
     * Get comparison data
     */
    private function get_comparison_data() {
        return array(
            'title' => __('Optimole vs ShortPixel', 'optimole-templates'),
            'description' => __('Compare Optimole with ShortPixel to see which image optimization service is best for your needs.', 'optimole-templates'),
        );
    }

    /**
     * Get ImageKit comparison data
     */
    private function get_imagekit_data() {
        return array(
            'title' => __('Optimole vs ImageKit', 'optimole-templates'),
            'description' => __('Compare Optimole with ImageKit to see which image optimization service is best for your needs.', 'optimole-templates'),
        );
    }
}

// Initialize the class
new Optimole_Templates_Loader(); 