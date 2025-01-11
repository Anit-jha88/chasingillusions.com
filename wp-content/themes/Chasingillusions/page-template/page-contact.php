<?php
/**
 * Template Name: Contact
 
 */

get_header(); 
if( !empty(get_the_post_thumbnail_url( get_the_ID(),'full')) ):
	$bannerImage = get_the_post_thumbnail_url( get_the_ID(),'full');
else:
	$bannerImage = get_template_directory_uri().'/images/dealerBannerImg.png';
endif;

?>

<div class="page-wrapper">
       
     <section class="footer-wrapper layout--4">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="footer-logo-area-wrap text-center">
                            <h3><?php echo get_the_content();?></h3>
                        </div>
                        <div class="footer-contact-information mt-70 mt-sm-80 mt-xs-30">
                            <div class="row mtm-30">
                                <div class="col-sm-4 text-center">
                                    <div class="single-footer-con-info">
                                        <h2>Indian Address</h2>
                                        <address>
                                            <p><?php echo get_field('indian_address');?></p>
                                            <p><a href="tel:<?php echo get_field('phone_no_indian');?>"><?php echo get_field('phone_no_indian');?></a></p>
                                            <a href="mailto:<?php echo get_field('email_indian');?>"><?php echo get_field('email_indian');?></a> 
                                        </address>
                                    </div>
                                </div>
    
                                <div class="col-sm-4 text-center">
                                    <div class="single-footer-con-info">
                                        <h2>USA Address</h2>
                                        <address>
                                            <p><?php echo get_field('usa_address');?></p>
                                            <p><a href="tel:<?php echo get_field('usa__phone_no');?>"><?php echo get_field('usa__phone_no');?></a></p>
                                        </address>
                                    </div>
                                </div>
                                
                                <div class="col-sm-4 text-center">
                                    <div class="single-footer-con-info">
                                        <h2>Thailand Address</h2>
                                        <address>
                                            <p><?php echo get_field('thailand_address');?></p>
                                            <p><a href="tel:<?php echo get_field('thailand_phone_no');?>"><?php echo get_field('thailand_phone_no');?></a></p>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>

        <section class="contact-content-area ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 m-auto text-center">
                        <!-- Start Contact Form Area -->
                        <div class="contact-form-area-wrapper">
                            <div class="area-title mb-52 mb-sm-32">
                                <?php echo get_field('contact_form_heading');?>
                            </div>
                            <div class="contact-form-wrapper">
                                <?php echo do_shortcode('[contact-form-7 id="ec8ad52" title="Contact form 1" html_id="contact-form" html_class=""]');?>
                                
                               
                            </div>
                        </div><!-- End Contact Form Area -->
                    </div>
                </div>
            </div>
        </section>
     
        <div class="contact-map-hero-area ">
<?php echo get_field('map');?>
                            </div>
        </div><!-- Start Contact Hero Map Area -->

    </div>
    <!--== End Page Content Wrapper ==-->

<?php get_footer(); ?>