<?php
/**
 * Plugin Name: Optimole Templates
 * Plugin URI: https://optimole.com
 * Description: A plugin that integrates Optimole's React components as WordPress page templates
 * Version: 1.0.0
 * Author: Optimole
 * Author URI: https://optimole.com
 * License: GPL-2.0+
 * Text Domain: optimole-templates
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Main Optimole Templates Class
 */
class Optimole_Templates {

    /**
     * Instance
     *
     * @var Optimole_Templates The single instance of the class
     */
    private static $_instance = null;

    /**
     * Plugin version
     *
     * @var string
     */
    public $version = '1.0.0';

    /**
     * Plugin basename
     *
     * @var string
     */
    public $plugin_basename;

    /**
     * Main Instance
     */
    public static function instance() {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    /**
     * Constructor
     */
    public function __construct() {
        // Define constants
        $this->define_constants();
        
        // Set plugin basename
        $this->plugin_basename = plugin_basename(__FILE__);
        
        // Initialize plugin
        $this->init();
        
        // Register hooks
        $this->register_hooks();
    }

    /**
     * Define Constants
     */
    private function define_constants() {
        define('OPTIMOLE_TEMPLATES_VERSION', $this->version);
        define('OPTIMOLE_TEMPLATES_PLUGIN_DIR', plugin_dir_path(__FILE__));
        define('OPTIMOLE_TEMPLATES_PLUGIN_URL', plugin_dir_url(__FILE__));
        define('OPTIMOLE_TEMPLATES_ASSETS_URL', OPTIMOLE_TEMPLATES_PLUGIN_URL . 'assets/');
    }

    /**
     * Initialize Plugin
     */
    private function init() {
        // Load required files
        $this->includes();
    }

    /**
     * Include required files
     */
    private function includes() {
        require_once OPTIMOLE_TEMPLATES_PLUGIN_DIR . 'includes/class-optimole-templates-loader.php';
    }

    /**
     * Register hooks
     */
    private function register_hooks() {
        // Admin assets
        add_action('admin_enqueue_scripts', array($this, 'admin_assets'));
        
        // Frontend assets
        add_action('wp_enqueue_scripts', array($this, 'frontend_assets'));
        
        // Add settings link
        add_filter('plugin_action_links_' . $this->plugin_basename, array($this, 'add_settings_link'));
        
        // Register page templates
        add_filter('theme_page_templates', array($this, 'register_page_templates'));
        
        // Load page template
        add_filter('template_include', array($this, 'load_page_template'));
        
        // Register shortcodes
        add_action('init', array($this, 'register_shortcodes'));
    }

    /**
     * Enqueue admin assets
     */
    public function admin_assets() {
        wp_enqueue_style(
            'optimole-templates-admin', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'css/admin.css', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION
        );

        wp_enqueue_script(
            'optimole-templates-admin', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'js/admin.js', 
            array('jquery'), 
            OPTIMOLE_TEMPLATES_VERSION, 
            true
        );
    }

    /**
     * Enqueue frontend assets
     */
    public function frontend_assets() {
        // Only load on our template pages
        if (!$this->is_optimole_template()) {
            return;
        }

        // Enqueue React build files
        wp_enqueue_style(
            'optimole-templates-frontend', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/css/main.css', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION
        );

        wp_enqueue_script(
            'optimole-templates-react', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/js/main.js', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION, 
            true
        );

        // Localize script with template data
        wp_localize_script('optimole-templates-react', 'optimoleTemplatesData', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('optimole_templates_nonce'),
            'siteUrl' => site_url(),
            'templateType' => $this->get_current_template_type()
        ));

        // Add Tailwind CSS (in case it's not bundled)
        wp_enqueue_style(
            'optimole-tailwind',
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'css/tailwind.min.css',
            array(),
            OPTIMOLE_TEMPLATES_VERSION
        );
    }

    /**
     * Check if current page uses an Optimole template
     */
    private function is_optimole_template() {
        if (!is_page()) {
            return false;
        }

        $template = get_page_template_slug(get_the_ID());
        return strpos($template, 'optimole-') !== false;
    }

    /**
     * Get current template type
     */
    private function get_current_template_type() {
        if (!is_page()) {
            return '';
        }

        $template = get_page_template_slug(get_the_ID());
        
        if ($template === 'optimole-pricing.php') {
            return 'pricing';
        } elseif ($template === 'optimole-home.php') {
            return 'home';
        } elseif ($template === 'optimole-about.php') {
            return 'about';
        } elseif ($template === 'optimole-contact.php') {
            return 'contact';
        } elseif ($template === 'optimole-wordpress.php') {
            return 'wordpress';
        } elseif ($template === 'optimole-dam.php') {
            return 'dam';
        } elseif ($template === 'optimole-compare.php') {
            return 'compare';
        } elseif ($template === 'optimole-imagekit.php') {
            return 'imagekit';
        }
        
        return '';
    }

    /**
     * Add settings link to plugin page
     */
    public function add_settings_link($links) {
        $settings_link = '<a href="admin.php?page=optimole-templates">' . __('Settings', 'optimole-templates') . '</a>';
        array_unshift($links, $settings_link);
        return $links;
    }

    /**
     * Register page templates
     */
    public function register_page_templates($templates) {
        $templates['optimole-pricing.php'] = __('Optimole Pricing', 'optimole-templates');
        $templates['optimole-home.php'] = __('Optimole Home', 'optimole-templates');
        $templates['optimole-about.php'] = __('Optimole About', 'optimole-templates');
        $templates['optimole-contact.php'] = __('Optimole Contact', 'optimole-templates');
        $templates['optimole-wordpress.php'] = __('Optimole WordPress Plugin', 'optimole-templates');
        $templates['optimole-dam.php'] = __('Optimole Digital Asset Management', 'optimole-templates');
        $templates['optimole-compare.php'] = __('Optimole Comparison', 'optimole-templates');
        $templates['optimole-imagekit.php'] = __('Optimole vs ImageKit', 'optimole-templates');
        
        return $templates;
    }

    /**
     * Load page template
     */
    public function load_page_template($template) {
        if (is_page()) {
            $page_template = get_page_template_slug();
            
            if (!empty($page_template) && strpos($page_template, 'optimole-') !== false) {
                $file = OPTIMOLE_TEMPLATES_PLUGIN_DIR . 'templates/' . $page_template;
                
                if (file_exists($file)) {
                    return $file;
                }
            }
        }
        
        return $template;
    }

    /**
     * Register shortcodes
     */
    public function register_shortcodes() {
        // Home shortcode
        add_shortcode('optimole_home', array($this, 'home_shortcode'));
        
        // Pricing shortcode
        add_shortcode('optimole_pricing', array($this, 'pricing_shortcode'));
        
        // About shortcode
        add_shortcode('optimole_about', array($this, 'about_shortcode'));
        
        // Contact shortcode
        add_shortcode('optimole_contact', array($this, 'contact_shortcode'));
        
        // WordPress plugin shortcode
        add_shortcode('optimole_wordpress', array($this, 'wordpress_shortcode'));
        
        // DAM shortcode
        add_shortcode('optimole_dam', array($this, 'dam_shortcode'));
        
        // Comparison shortcode
        add_shortcode('optimole_compare', array($this, 'compare_shortcode'));
        
        // ImageKit comparison shortcode
        add_shortcode('optimole_imagekit', array($this, 'imagekit_shortcode'));
    }

    /**
     * Home shortcode callback
     */
    public function home_shortcode($atts) {
        // Enqueue required assets
        wp_enqueue_style(
            'optimole-templates-frontend', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/css/main.css', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION
        );

        wp_enqueue_script(
            'optimole-templates-react', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/js/main.js', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION, 
            true
        );

        // Localize script
        wp_localize_script('optimole-templates-react', 'optimoleTemplatesData', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('optimole_templates_nonce'),
            'siteUrl' => site_url(),
            'templateType' => 'home',
            'shortcode' => true
        ));

        ob_start();
        ?>
        <div id="optimole-home-root" class="optimole-component-container"></div>
        <?php
        return ob_get_clean();
    }
    
    /**
     * WordPress plugin shortcode callback
     */
    public function wordpress_shortcode($atts) {
        // Enqueue required assets
        wp_enqueue_style(
            'optimole-templates-frontend', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/css/main.css', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION
        );

        wp_enqueue_script(
            'optimole-templates-react', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/js/main.js', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION, 
            true
        );

        // Localize script
        wp_localize_script('optimole-templates-react', 'optimoleTemplatesData', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('optimole_templates_nonce'),
            'siteUrl' => site_url(),
            'templateType' => 'wordpress',
            'shortcode' => true
        ));

        ob_start();
        ?>
        <div id="optimole-wordpress-root" class="optimole-component-container"></div>
        <?php
        return ob_get_clean();
    }
    
    /**
     * DAM shortcode callback
     */
    public function dam_shortcode($atts) {
        // Enqueue required assets
        wp_enqueue_style(
            'optimole-templates-frontend', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/css/main.css', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION
        );

        wp_enqueue_script(
            'optimole-templates-react', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/js/main.js', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION, 
            true
        );

        // Localize script
        wp_localize_script('optimole-templates-react', 'optimoleTemplatesData', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('optimole_templates_nonce'),
            'siteUrl' => site_url(),
            'templateType' => 'dam',
            'shortcode' => true
        ));

        ob_start();
        ?>
        <div id="optimole-dam-root" class="optimole-component-container"></div>
        <?php
        return ob_get_clean();
    }
    
    /**
     * Comparison shortcode callback
     */
    public function compare_shortcode($atts) {
        // Enqueue required assets
        wp_enqueue_style(
            'optimole-templates-frontend', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/css/main.css', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION
        );

        wp_enqueue_script(
            'optimole-templates-react', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/js/main.js', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION, 
            true
        );

        // Localize script
        wp_localize_script('optimole-templates-react', 'optimoleTemplatesData', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('optimole_templates_nonce'),
            'siteUrl' => site_url(),
            'templateType' => 'compare',
            'shortcode' => true
        ));

        ob_start();
        ?>
        <div id="optimole-compare-root" class="optimole-component-container"></div>
        <?php
        return ob_get_clean();
    }

    /**
     * Pricing shortcode callback
     */
    public function pricing_shortcode($atts) {
        // Enqueue required assets
        wp_enqueue_style(
            'optimole-templates-frontend', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/css/main.css', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION
        );

        wp_enqueue_script(
            'optimole-templates-react', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/js/main.js', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION, 
            true
        );

        // Localize script
        wp_localize_script('optimole-templates-react', 'optimoleTemplatesData', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('optimole_templates_nonce'),
            'siteUrl' => site_url(),
            'templateType' => 'pricing',
            'shortcode' => true
        ));

        ob_start();
        ?>
        <div id="optimole-pricing-root" class="optimole-component-container"></div>
        <?php
        return ob_get_clean();
    }

    /**
     * About shortcode callback
     */
    public function about_shortcode($atts) {
        // Enqueue required assets
        wp_enqueue_style(
            'optimole-templates-frontend', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/css/main.css', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION
        );

        wp_enqueue_script(
            'optimole-templates-react', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/js/main.js', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION, 
            true
        );

        // Localize script
        wp_localize_script('optimole-templates-react', 'optimoleTemplatesData', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('optimole_templates_nonce'),
            'siteUrl' => site_url(),
            'templateType' => 'about',
            'shortcode' => true
        ));

        ob_start();
        ?>
        <div id="optimole-about-root" class="optimole-component-container"></div>
        <?php
        return ob_get_clean();
    }

    /**
     * Contact shortcode callback
     */
    public function contact_shortcode($atts) {
        // Enqueue required assets
        wp_enqueue_style(
            'optimole-templates-frontend', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/css/main.css', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION
        );

        wp_enqueue_script(
            'optimole-templates-react', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/js/main.js', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION, 
            true
        );

        // Localize script
        wp_localize_script('optimole-templates-react', 'optimoleTemplatesData', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('optimole_templates_nonce'),
            'siteUrl' => site_url(),
            'templateType' => 'contact',
            'shortcode' => true
        ));

        // Start output
        ob_start();
        ?>
        <style>
        /* Styles to position the Gravity Form correctly */
        .optimole-contact-shortcode-wrapper {
            position: relative;
        }

        .optimole-contact-shortcode-wrapper .gravity-form-container {
            display: none; /* Initially hidden */
        }

        /* Styles to show form once page is loaded */
        .optimole-contact-shortcode-wrapper.page-loaded .gravity-form-container {
            display: block;
            position: absolute;
            top: 320px; /* Adjust based on your layout */
            right: 0;
            width: 66.66%; /* 2/3 width for the right column */
            padding: 0 15px;
            box-sizing: border-box;
        }

        .optimole-contact-shortcode-wrapper .gravity-form-container .gform_wrapper {
            background: white;
            border-radius: 0.5rem;
            padding: 10px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        /* Hide the React form container */
        .optimole-contact-shortcode-wrapper #optimole-gravity-form-marker {
            display: none;
        }

        @media (max-width: 768px) {
            .optimole-contact-shortcode-wrapper .gravity-form-container {
                position: static;
                width: 100%;
                margin-top: 30px;
            }
        }
        </style>

        <div class="optimole-contact-shortcode-wrapper">
            <!-- React component -->
            <div id="optimole-contact-root" class="optimole-component-container"></div>
            
            <!-- Directly render the Gravity Form -->
            <div class="gravity-form-container">
                <?php 
                if (shortcode_exists('gravityform')) {
                    echo do_shortcode('[gravityform id="2" title="true"]');
                } else {
                    echo '<div class="p-4 bg-yellow-100 text-yellow-800 rounded">Gravity Forms plugin is not active.</div>';
                }
                ?>
            </div>
            
            <script>
            // Simple script to mark the wrapper as loaded
            document.addEventListener('DOMContentLoaded', function() {
                // Wait a bit for React to render
                setTimeout(function() {
                    // Find the closest wrapper (handles multiple shortcodes on page)
                    var wrapper = document.querySelector('.optimole-contact-shortcode-wrapper:not(.page-loaded)');
                    if (wrapper) {
                        wrapper.classList.add('page-loaded');
                    }
                }, 500);
            });
            </script>
        </div>
        <?php
        return ob_get_clean();
    }

    /**
     * ImageKit comparison shortcode callback
     */
    public function imagekit_shortcode($atts) {
        // Enqueue required assets
        wp_enqueue_style(
            'optimole-templates-frontend', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/css/main.css', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION
        );

        wp_enqueue_script(
            'optimole-templates-react', 
            OPTIMOLE_TEMPLATES_ASSETS_URL . 'build/js/main.js', 
            array(), 
            OPTIMOLE_TEMPLATES_VERSION, 
            true
        );

        // Localize script
        wp_localize_script('optimole-templates-react', 'optimoleTemplatesData', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('optimole_templates_nonce'),
            'siteUrl' => site_url(),
            'templateType' => 'imagekit',
            'shortcode' => true
        ));

        // Start output
        ob_start();
        ?>
        <div id="optimole-imagekit-root" class="optimole-component-container"></div>
        <?php
        return ob_get_clean();
    }
}

/**
 * Initialize the plugin
 */
function optimole_templates() {
    return Optimole_Templates::instance();
}

// Start the plugin
optimole_templates(); 