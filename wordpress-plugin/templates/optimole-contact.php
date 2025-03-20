<?php
/**
 * Template Name: Optimole Contact
 * 
 * @package Optimole_Templates
 */

// Get header
get_header();
?>

<style>
/* Styles for the Gravity Form */
.contact-page-wrapper {
    position: relative;
}

.gravity-form-container {
    display: none; /* Initially hidden until moved to React component */
}

/* Form styles once it's inside the React component */
#optimole-gravity-form-marker .gform_wrapper {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* Override any WordPress Gravity Form default styles as needed */
#optimole-gravity-form-marker .gform_wrapper ul.gform_fields li.gfield {
    padding-right: 0;
}

#optimole-gravity-form-marker .gform_wrapper .gform_footer {
    margin-top: 1rem;
    padding-top: 0.5rem;
}

#optimole-gravity-form-marker .gform_wrapper .gform_footer input.button,
#optimole-gravity-form-marker .gform_wrapper .gform_footer input[type=submit] {
    background-color: #4F46E5; /* Indigo-600 */
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 500;
    transition: background-color 0.3s;
}

#optimole-gravity-form-marker .gform_wrapper .gform_footer input.button:hover,
#optimole-gravity-form-marker .gform_wrapper .gform_footer input[type=submit]:hover {
    background-color: #4338CA; /* Indigo-700 */
}

/* Make sure the form marker is visible */
.contact-page-wrapper #optimole-gravity-form-marker {
    display: block;
}

@media (max-width: 768px) {
    .gravity-form-container {
        position: static;
        width: 100%;
        margin-top: 30px;
    }
}
</style>

<div id="primary" class="content-area contact-page-wrapper">
    <main id="main" class="site-main" role="main">
        <!-- Render the React App -->
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
    </main>
</div>

<script>
// Enhanced script to move the Gravity Form into the React component
(function() {
    // Log for debugging
    console.log('Optimole Contact Template: Script initialized');
    
    // Function to check if React component is ready
    function checkReactReady() {
        console.log('Checking if React component is ready...');
        return document.getElementById('optimole-gravity-form-marker');
    }
    
    // Function to find the Gravity Form
    function findGravityForm() {
        console.log('Looking for Gravity Form...');
        // Try different selectors to find the form
        const formContainer = document.querySelector('.gravity-form-container');
        const gravityWrapper = document.querySelector('.gform_wrapper');
        
        // Return the first valid element found
        if (formContainer && formContainer.querySelector('.gform_wrapper')) {
            console.log('Found form in .gravity-form-container');
            return {
                container: formContainer,
                form: formContainer.querySelector('.gform_wrapper')
            };
        } else if (gravityWrapper) {
            console.log('Found direct .gform_wrapper');
            return {
                container: gravityWrapper.parentNode,
                form: gravityWrapper
            };
        } else if (formContainer) {
            console.log('Found container but no wrapper');
            return {
                container: formContainer,
                form: formContainer
            };
        }
        
        console.warn('No Gravity Form found');
        return null;
    }
    
    // Function to move the form
    function moveFormToReactComponent() {
        const formTarget = checkReactReady();
        const formData = findGravityForm();
        
        // Make sure both elements exist
        if (formTarget && formData) {
            try {
                // Move the form into the target div
                formTarget.innerHTML = '';
                formTarget.appendChild(formData.form.cloneNode(true));
                
                // Show the form (remove the display:none)
                formTarget.style.display = 'block';
                
                // Remove the original container
                if (formData.container && formData.container.parentNode) {
                    formData.container.remove();
                }
                
                console.log('Gravity Form moved to React component successfully');
                
                // Initialize any Gravity Form scripts that might need to be reinitialized
                if (window.gform && typeof window.gform.initializeOnLoaded === 'function') {
                    window.gform.initializeOnLoaded();
                }
            } catch (error) {
                console.error('Error moving Gravity Form:', error);
            }
        } else {
            console.error('Could not find the form container or target element');
            
            // Fallback for when target exists but no form found
            if (formTarget && !formData) {
                console.log('Creating fallback form for WordPress');
                formTarget.innerHTML = `
                    <div class="gform_wrapper wordpress-fallback">
                        <form id="mock-gravity-form" class="mock-form">
                            <div class="gform_body">
                                <div class="gform_fields">
                                    <div class="gfield">
                                        <label class="gfield_label">Name</label>
                                        <div class="ginput_container">
                                            <input type="text" name="input_name" placeholder="Your name">
                                        </div>
                                    </div>
                                    <div class="gfield">
                                        <label class="gfield_label">Email</label>
                                        <div class="ginput_container">
                                            <input type="email" name="input_email" placeholder="Your email">
                                        </div>
                                    </div>
                                    <div class="gfield">
                                        <label class="gfield_label">Message</label>
                                        <div class="ginput_container">
                                            <textarea name="input_message" placeholder="Your message"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="gform_footer">
                                <div class="wp-msg">Please activate Gravity Forms plugin for functional contact form</div>
                                <button type="button" class="gform_button button">Submit</button>
                            </div>
                        </form>
                    </div>
                `;
                formTarget.style.display = 'block';
                
                // Add message styles
                const style = document.createElement('style');
                style.textContent = `
                    .wordpress-fallback .wp-msg {
                        padding: 8px;
                        margin-bottom: 12px;
                        background-color: #fff8e5;
                        border-left: 4px solid #ffb900;
                        color: #6d6d6d;
                    }
                `;
                document.head.appendChild(style);
            }
        }
        
        // Add class to mark page as loaded
        const wrapper = document.querySelector('.contact-page-wrapper');
        if (wrapper) {
            wrapper.classList.add('page-loaded');
        }
    }
    
    // Function to handle initialization
    function init() {
        // Try immediately if form elements might already be available
        if (checkReactReady()) {
            moveFormToReactComponent();
        } else {
            // Use both DOMContentLoaded and window.onload for better coverage
            // WordPress may load things in different orders
            
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    // First attempt after DOM is ready
                    setTimeout(moveFormToReactComponent, 100);
                });
            } else {
                // DOM already loaded, try with a small delay
                setTimeout(moveFormToReactComponent, 100);
            }
            
            // Second attempt after window fully loaded (images, etc.)
            window.addEventListener('load', function() {
                setTimeout(moveFormToReactComponent, 800);
            });
            
            // Final fallback attempt
            setTimeout(moveFormToReactComponent, 2000);
        }
    }
    
    // Start initialization
    init();
})();
</script>

<?php
// Get footer
get_footer(); 
?> 