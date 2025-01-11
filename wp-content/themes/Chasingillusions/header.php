<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
	<title>
<?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the site name.
	bloginfo( 'name' );

	// Add the site description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
if ( $site_description && ( is_home() || is_front_page() ) ) {
	echo " | $site_description";
}

	// Add a page number if necessary:
if ( ( $paged >= 2 || $page >= 2 ) && ! is_404() ) {
	/* translators: %s: Page number. */
	echo esc_html( ' | ' . sprintf( __( 'Page %s', 'twentyten' ), max( $paged, $page ) ) );
}

?>
	</title>
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php echo esc_url( get_bloginfo( 'pingback_url' ) ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>
	    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/modernizr-2.8.3.min.js"></script>
</head>



<body class="preloader-active">
    <!--== Start PreLoader Wrap ==-->
    <div class="preloader-area-wrap">
        <div class="spinner d-flex justify-content-center align-items-center h-100">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>
    <!--== End PreLoader Wrap ==-->
    <!--== Start Header Area Wrapper ==-->
    <header class="<?php if(is_front_page()){ echo 'header-area-wrapper header-four transparent-header sticky-header';}else{ echo 'header-area-wrapper header-four  sticky-header';}?>">
        <div class="container-fluid">
            <div class="position-relative d-flex justify-content-space-around justify-content-lg-start align-items-center">
                <div class="header-left-wrapper">
                    <!-- Start Logo Area Wrap --> <a href="<?php echo home_url(); ?>" class="logo-wrap d-block"><img
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="White Logo"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png"
                            class="sticky-logo" alt="Black Logo"> </a><!-- End Logo Area Wrap -->
                </div><!-- Start Main Navigation Wrap -->
                <div class="header-right-wrapper">
                    <div class="header-right-area d-flex justify-content-end align-items-center">
                        <div class="navigation-area-wrap align-left d-none d-lg-block">
                            <nav class="main-navigation">
                                <ul class="main-menu nav justify-content-end">
                               	<?php
				  			if ( has_nav_menu( 'primary' ) ) {
				  				wp_nav_menu(
				  					array(
				  						'container'  => '',
				  						'items_wrap' => '%3$s',
				  						'theme_location' => 'primary',
				  					)
				  				);

				  			}
				  			?>
				  			 </ul>
                            </nav>
                        </div>
                        <div class="header-right-sub-area d-flex align-items-center">
                            <div class="off-canvas-area-wrap d-flex d-lg-block">
                             <!-- Mobile Responsive Menu Button --> 
                              <button class="mobile-menu text-white d-lg-none ml-md-30 ml-sm-30"><i class="fa fa-bars"></i></button>
                            </div>
                        </div>
                    </div>
                </div><!-- End Main Navigation Wrap -->
            </div>
        </div>
    </header>


 

