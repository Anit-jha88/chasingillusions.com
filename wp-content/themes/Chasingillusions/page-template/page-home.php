<?php
/**
 * Template Name: Home
 
 */

get_header(); 
if( !empty(get_the_post_thumbnail_url( get_the_ID(),'full')) ):
	$bannerImage = get_the_post_thumbnail_url( get_the_ID(),'full');
else:
	$bannerImage = get_template_directory_uri().'/images/dealerBannerImg.png';
endif;

?>
  <aside class="off-canvas-responsive-menu">
        <div class="off-canvas-overlay"></div>
        <div class="off-canvas-content-wrap">
            <div class="off-canvas-content"></div>
            <button class="btn-close trio-tooltip"  data-tippy-content="Close" data-tippy-placement="right"><i class="fa fa-close"></i></button>
        </div>
    </aside>

    <!--== End Off Canvas Area Wrapper ==-->
    <!--== Start Video Background Content Area ==-->
    <section class="video-bg-content-wrapper">
        <div class="video-bg player" data-url="<?php echo get_field('banner_video');?>"></div>
        <div class="video-bg-content-wrap">
            <div class="container h-100">
                <div class="row align-items-center h-100">
                    <div class="col-12 m-auto text-center">
                        <div class="video-bg-txt">
                           <?php echo get_the_content();?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  

        <section class="port-creative-content-area">
            <!-- Start Single Portfolio Item -->
            <div class="port-creative-item">
                <div class="row align-items-center g-0 ogBox">

                    <div class="col-md-6 text-center my-auto twoSecox">
                        <a href="<?php echo get_page_link(27)?>" >
                        <div class="port-creative-item-info">
                            <img src="<?php echo get_field('animation_production_image');?>"   alt="Animation Production">
                            <h2><?php echo get_field('animation_production');?></h2>
                         
                        </div>
                        </a>
                    </div>
                    
                    <div class="col-md-6 text-center my-auto twoSecox">
                        <a href="<?php echo get_page_link(29)?>" >
                            <div class="port-creative-item-info">
                                <img src="<?php echo get_field('video_production_image');?>"  alt="Video Production">
                                <h2><?php echo get_field('video_production');?></h2>
                              
                            </div>
                        </a>
                    </div>
                </div>
            </div><!-- End Single Portfolio Item -->

 <!--== Start Architecture Clients Area ==-->
 <section class="our-client-area ">
    <div class="container-fluid ">
        <div class="row">
            <div class="col-lg-6 m-auto text-center">
                <div class="section-title-wrap">
                    <h2>Our clients</h2>
                </div>
            </div>
        </div>
        <div class="row ">
            <?php 
            
            $images = get_field('our_clients');
            foreach( $images as $image ):
                
              
            
            ?>
            <div class="col-6 col-sm-4 col-lg-2 m-auto">
                <figure class="single-client-item">
                <img src="<?php echo esc_url($image); ?>" alt="" />

                </figure>
            </div>
          <?php endforeach; ?>
          
        </div>
    </div>
</section>
<!--== End Architecture Clients Area ==-->

      <!--== Start Our Services Content Area ==-->
      <section class="our-service-content-area">
        <div class="row g-0">
            <div class="col-md-12">
                <div class="single-call-action-wrap bg-soft-black h-100 text-center text-lg-center">
               
                    <div class="call-action-info">
                      <?php echo get_field('chasing_illusions_description');?>
                      <a href="<?php echo get_page_link(16)?>" class="btn btn-bordered">Discover More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--== End Our Services Content Area ==-->

     <!--== Start Testimonial Area Wrapper ==-->
     <section class="testimonial-area bg-img mt-0 mt-md-80 "
     data-bg="<?php echo get_template_directory_uri(); ?>/assets/images/testi-bg.jpg">
     <div class="container">
         <div class="row">
             <div class="col-lg-8 m-auto text-center">
                 <div class="testimonial-content-wrap mtm-10">
                     <div class="ht-slick-slider" data-slick='{"slidesToShow": 1, "arrows": false}'>
                         
                          <?php
                                
                                
                                if( have_rows('testimonial') ):
                                while( have_rows('testimonial') ) : the_row();
                               
                                ?>
                       
                         <div class="single-testimonial-wrap">
                             <p>“<?php echo get_sub_field('testimonial_description');?>”</p>
                             <h3 class="client-name"><?php echo get_sub_field('testimonial_title');?></h3>
                             <h5 class="client-designation"><?php echo get_sub_field('testimonial_by');?></h5>
                         </div>
                      <?php endwhile; endif;?>
                       
                      
                        
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </section>
 <!--== End Testimonial Area Wrapper ==-->


      <!--== Start Fun Fact Area Wrapper ==-->
      <section class="fun-fact-area-wrapper mt-0 mt-md-62 ">
        <div class="container-fluid p-0">
            <div class="row gx-0">
             
                <div class="col-6 col-lg-3 text-center">
                    <div class="single-fun-fact-wrap bg-img">
                        <p class="fun-fact-number"><span class="odometer" data-count="<?php echo get_field('we_think_videos_count');?>"></span>+</p>
                        <h4><?php echo get_field('we_think_videos');?></h4>
                    </div>
                </div>
                <div class="col-6 col-lg-3 text-center">
                    <div class="single-fun-fact-wrap bg-img" >
                        <p class="fun-fact-number"><span class="odometer" data-count="<?php echo get_field('total_videos_made_count');?>"></span>+</p>
                        <h4><?php echo get_field('total_videos_made');?></h4>
                    </div>
                </div>
                <div class="col-6 col-lg-3 text-center">
                    <div class="single-fun-fact-wrap bg-img" >
                        <p class="fun-fact-number"><span class="odometer" data-count="<?php echo get_field('projects_completed_count');?>"></span>+</p>
                        <h4><?php echo get_field('projects_completed');?></h4>
                    </div>
                </div>
                <div class="col-6 col-lg-3 text-center">
                    <div class="single-fun-fact-wrap bg-img" >
                        <p class="fun-fact-number"><span class="odometer" data-count="<?php echo get_field('minutes_of_animation_count');?>"></span>+</p>
                        <h4><?php echo get_field('minutes_of_animation');?></h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--== End Fun Fact Area Wrapper ==-->


  
    <div class="social-button-action-area mt-0 mt-md-0 ">
        <div class="social-button-content d-flex">
           
            <div class="single-social-button"><a href="https://www.facebook.com/chasingillusionsproductions/" class="trio-tooltip" data-tippy-content="Facebook" target="_blank"><i class="fa fa-facebook"></i></a></div><!-- End Social Button Item -->
           
            <div class="single-social-button"><a href="https://x.com/0cis0?t=p0NvzKiTSNwgYk8xnX9YHw&s=09" class="trio-tooltip" data-tippy-content="Twitter" target="_blank"><i class="fa fa-twitter"></i></a></div><!-- End Social Button Item -->
          
            <div class="single-social-button"><a href="https://www.linkedin.com/404/" class="trio-tooltip" data-tippy-content="Linkdein" target="_blank"><i class="fa fa-linkedin"></i></a></div><!-- End Social Button Item -->
            <div class="single-social-button"><a href="https://www.instagram.com/chasing.illusions.studio/" class="trio-tooltip" data-tippy-content="Linkdein" target="_blank"><i class="fa fa-instagram"></i></a></div><!-- End Social Button Item -->
          
            <div class="single-social-button"><a href="https://www.youtube.com/channel/UCdLLO-SOD6m3e2-duw-fgXQ" class="trio-tooltip" data-tippy-content="Youtube" target="_blank"><i class="fa fa-youtube"></i></a></div><!-- End Social Button Item -->
         
            <div class="single-social-button whatsBtn"><a href="https://wa.me/919910911696" class="trio-tooltip" data-tippy-content="SoundCloud" target="_blank"><i class="fa fa-whatsapp"></i></a></div><!-- End Social Button Item -->
        </div>
    </div>

    <footer class="footer-wrapper layout--4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="footer-logo-area-wrap text-center">
                        <h3>Our Address</h3>
                    </div>
                    <div class="footer-contact-information mt-70 mt-sm-80 mt-xs-30">
                        <div class="row mtm-30">
                             <?php
                                
                                
                                if( have_rows('our_address') ):
                                while( have_rows('our_address') ) : the_row();
                               
                                ?>
                            
                            <div class="col-sm-4 text-center">
                                <div class="single-footer-con-info">
                                    <h2><?php echo get_sub_field('our_address');?></h2>
                                    <address>
                                        <p><?php echo get_sub_field('Eaddress');?></p>
                                        <p><a href="telto:<?php echo get_sub_field('our_address_phone');?>"><?php echo get_sub_field('our_address_phone');?></a></p>
                                        <a href="mailto:<?php echo get_sub_field('our_address_email');?>"><?php echo get_sub_field('our_address_email');?></a> 
                                    </address>
                                </div>
                            </div>
                         <?php endwhile; endif;?>
                            
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </footer>
  
   
            
<?php get_footer(); ?>