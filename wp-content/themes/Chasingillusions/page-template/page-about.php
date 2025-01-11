<?php
/**
 * Template Name: About
 
 */

get_header(); 
if( !empty(get_the_post_thumbnail_url( get_the_ID(),'full')) ):
	$bannerImage = get_the_post_thumbnail_url( get_the_ID(),'full');
else:
	$bannerImage = get_template_directory_uri().'/images/dealerBannerImg.png';
endif;

?>

<div class="page-wrapper">

        
          <!--== Start Page Content Wrapper ==-->
    <div class="chasingHistory">
        <!-- Timeline Element 1 -->
        <div class="timeline-element-1">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="section-title-wrap pb-26">
                            <h2 class="mb-0"><?php echo get_the_content();?></h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 m-auto">
                        <div class="cd-timeline-wrap">
                            <div class="cd-timeline">
                                <!-- Start Timeline Item #01 -->
                                <?php
                                
                                
                                if( have_rows('timeline_title') ):
                                while( have_rows('timeline_title') ) : the_row();
                                $timelinetitle = get_sub_field('timeline_title');
                                $timelinedesc = get_sub_field('time_line_description');
                                $timelineyear = get_sub_field('timeline_year');
                                $timelineimg = get_sub_field('time_line_image');
                                ?>
                                <div class="cd-timeline-block">
                                    <div class="cd-timeline-dot"></div>
                                    <div class="cd-timeline-content">
                                        <img src="<?php echo $timelineimg; ?>" />
                                        <h4><?php echo $timelineyear; ?></h4>
                                        <h5><?php echo $timelinetitle; ?></h5>
                                        <p><?php echo $timelinedesc; ?></p>
                                    </div>
                                </div><!-- Start Timeline Item #02 -->
                                
                                <?php endwhile; endif;?>
                         
                                <div class="cd-timeline-block">
                                    <div class="cd-timeline-dot"></div>
                                 
                                </div><!-- Start Timeline Item #08 -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- Timeline Element 1 -->
     
    </div>
    <!--== End Page Content Wrapper ==-->

    <section class="about-banner-area hv-100 parallaxBg bg-img" >
        <div class="container h-100">
            <div class="row align-items-center h-100">
                <div class="col-11 m-auto text-center">
                    <div class="about-banner-content">
                        <h2 class="bolder-heading"> <?php echo get_field('chase_illusions_title');?></h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
       
        <!--== Start Our Services Content Area ==-->
        <section class="our-service-content-area">
            <div class="single-call-action-wrap bg-soft-black welCome ">
            <div class="row g-0">
                <div class="col-md-8">
                   
                        <div class="call-action-info">
                           <?php echo get_field('chase_illusions_content');?>
                         </div>
                    </div>
               

                <div class="col-md-4 ">
                    <div class="about-skill-thumb"><img src="<?php echo get_field('chase_illusions_images');?>" alt="About"></div>
                </div>
            </div>
            </div>
        </section>
        <!--== End Our Services Content Area ==-->
        <!--== Start Call to Action Wrapper ==-->
        <div class="call-to-action-wrapper">
            <div class="call-to-action-content-wrap d-md-flex">
                <!-- Single Call to Action Start -->
                <div class="single-call-action-wrap text-center text-lg-start boxc1">
                    <figure class="call-action-thumb"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/vision.png"
                            alt="Call Action"></figure>
                    <div class="call-action-info">
                        <h2><?php echo get_field('vision_title');?></h2>
                       <?php echo get_field('vision_content');?>
                       </div>
                </div><!-- Single Call to Action End -->
                <!-- Single Call to Action Start -->
                <div class="single-call-action-wrap text-center text-lg-start">
                    <figure class="call-action-thumb"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/mission.png"
                            alt="Call Action"></figure>
                    <div class="call-action-info">
                         <h2><?php echo get_field('mission_title');?></h2>
                       <?php echo get_field('mission_conetnt');?>
                       </div>
                </div><!-- Single Call to Action End -->
            </div>
        </div>
        <!--== End Call to Action Wrapper ==-->

        <div class="port-work-process-area whyUs">
          
            <div class="work-process-area ">
                <div class="container">
                    <div class="work-process-content whyChoose">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="fashion-call-action-left mb-md-50 mb-sm-20">
                                    <h2><span>Why </span>  Us?  </h2>
                                </div>
                            </div>
                        </div>
                        <div class="row ">
                               <?php
                                
                                
                                if( have_rows('why_us') ):
                                while( have_rows('why_us') ) : the_row();
                                $whyustitle = get_sub_field('why_us_title');
                                $desc = get_sub_field('why_us_content');
                                $img = get_sub_field('why_us_images');
                                ?>
                            <!-- Work Process Item #1 -->
                            <div class="col-md-4">
                                <div class="single-desc-item-wrap">
                                    <img src="<?php echo $img; ?>" />
                                    <h3><?php echo  $whyustitle;?></h3>
                                    <p><?php echo $desc;?>
                                    </p>
                                </div>
                            </div><!-- Work Process Item #2 -->
                       
                        <?php endwhile; endif;?>
                        
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>

          <!-- Start Get Connected Area -->
          <section class="get-connected-area bg-brand  ">
            <div class="container h-100">
                <div class="row align-items-center h-100">
                    <div class="col-12 my-auto text-center">
                        <div class="about-us-content p-0">
							<h2 class="mb-40 mb-md-18 mb-sm-18"><?php echo get_field('content_us_title_a');?></h2>
							<h4><?php echo get_field('content_us_heading');?></h4>

                           <p class="paragraph-width"><?php echo get_field('contact_us_content');?></p>
                        </div>
                     
                        <div class="about-social-icons get-connected mt-60 mt-sm-30 mt-md-30">
                           <?php echo get_field('social_media_link');?>
                        </div>
                    </div>
                </div>
            </div>
        </section><!-- End Get Connected Area -->
    
        <!--== Start About Content Area ==-->
        <section class="about-area-content whyChasing">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-lg-12">
                        <div class="about-area-content-left">
                            <div class="fashion-call-action-left mb-20 mb-sm-40">
                                 <?php echo get_field('formula_content');?>
                            </div>

                            <div class="row  chaseFormula">
                                 <?php
                                
                                
                                if( have_rows('chasing_illusions') ):
                                while( have_rows('chasing_illusions') ) : the_row();
                                $chasing_illusions_title = get_sub_field('chasing_illusions_title');
                                $chasing_illusions_description = get_sub_field('chasing_illusions_description');
                                $chasing_illusions_images = get_sub_field('chasing_illusions_images');
                                ?>
                                <div class="col-lg-6 col-sm-6 cfBox">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img src="<?php echo $chasing_illusions_images;?>" />
                                        </div>
                                        <div class="col-md-8">
                                            <h3><?php echo $chasing_illusions_title;?></h3>
                                            <p><?php echo $chasing_illusions_description;?></p>
                                        </div>
                                    </div>
                                </div>

                               <?php endwhile; endif;?>
                                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--== End About Content Area ==-->
     

    </div>

<?php get_footer(); ?>