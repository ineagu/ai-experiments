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
// Script to move the Gravity Form into the React component
document.addEventListener('DOMContentLoaded', function() {
    // Wait for React to render (adjust timing if needed)
    setTimeout(function() {
        const formContainer = document.querySelector('.gravity-form-container');
        const formTarget = document.getElementById('optimole-gravity-form-marker');
        
        // Make sure both elements exist
        if (formContainer && formTarget) {
            // Move the form into the target div
            formTarget.innerHTML = '';
            formTarget.appendChild(formContainer.querySelector('.gform_wrapper') || formContainer);
            
            // Show the form (remove the display:none)
            formTarget.style.display = 'block';
            
            // Remove the original container
            formContainer.remove();
            
            console.log('Gravity Form moved to React component successfully');
        } else {
            console.error('Could not find the form container or target element');
        }
        
        // Add class to mark page as loaded
        document.querySelector('.contact-page-wrapper').classList.add('page-loaded');
    }, 800); // Increased timeout to ensure React has fully rendered
});
</script>

<?php
// Get footer
get_footer(); 
?> 