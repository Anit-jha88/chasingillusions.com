

    <footer class="footer-wrapper">
        <!-- Start Footer Widget Area -->
        <div class="footer-widget-wrapper pt-80 pt-md-80 pt-sm-60 pb-80 pb-md-78 pb-sm-60">
            <div class="container">
                <div class="row mtm-44">
                  
                    <div class="col-lg-4 col-md-6">
                        <div class="single-widget-wrap">
                            <h3 class="widget-title">Get In Touch</h3>
                            <div class="widget-body">
                                <div class="about-text">
                                    <address class="homeFoot">
                                        <p><?php echo get_field('get_in_touch_address', 'option'); ?></p>
                                       <p><a href="tellto:<?php echo get_field('get_in_touch_phone_no', 'option'); ?>"><i class="fa fa-phone"></i> <?php echo get_field('get_in_touch_phone_no', 'option'); ?></a></p>
                                       <p><a href="mailto:<?php echo get_field('get_in_touch_emai', 'option'); ?>"><i class="fa fa-envelope"></i>
                                        <?php echo get_field('get_in_touch_emai', 'option'); ?></a></p>
                                    </address>
                                       
                                </div>

                                <div class="footer-social-icons nav justify-content-md-start mt-50">
                                    <a href="<?php echo get_field('facebook_link', 'option'); ?>"  target="_blank" class="trio-tooltip" data-tippy-content="Facebook"><i class="fa fa-facebook"></i></a> 
                                    <a href="<?php echo get_field('twitter_link', 'option'); ?>" target="_blank" class="trio-tooltip"  data-tippy-content="Twitter"><i class="fa fa-twitter"></i></a> 
                                    <a href="<?php echo get_field('linkedin-in_link', 'option'); ?>" target="_blank" class="trio-tooltip" data-tippy-content="linkedin-in"><i class="fa fa-linkedin"></i></a> 
                                    <a href="<?php echo get_field('instagram_link', 'option'); ?>" target="_blank" class="trio-tooltip" data-tippy-content="Instagram"><i class="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <div class="single-widget-wrap">
                            <h3 class="widget-title">Quick Links</h3>
                            <div class="widget-body">
                                <ul class="widget-list">
                                                <?php
                                               wp_nav_menu( array(
                                                 'menu' => 'Footer menu', // Replace 'your-menu-slug' with the actual menu slug
                       
                                                ) );
                                        ?>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-widget-wrap">
                            <h3 class="widget-title">Animation Production</h3>
                            <div class="widget-body">
                                <ul class="widget-list">
                                <?php
                                $args = array(
                                'post_type' => 'our-services', // Replace with your custom post type
                                'tax_query' => array(
                                array(
                                'taxonomy' => 'our-service-category', // Replace with your taxonomy slug
                                'field'    => 'slug', // You can also use 'term_id' or 'name'
                                'terms'    => 'animation-production', // Replace with your term slug
                                ),
                                
                                ),
                                'posts_per_page' => -1, 
                                'order' => 'ASC',
                                );
                                
                                $query = new WP_Query($args);
                                
                                if ($query->have_posts()) {
                                while ($query->have_posts()) {
                                $query->the_post();
                                // Output post data
                                ?>
                                    <li><a href="<?php echo get_permalink() ?>"><?php echo get_the_title();?></a></li>
                                    
                              <?php } wp_reset_postdata(); } ?>
                                                  
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-widget-wrap">
                            <h3 class="widget-title">Video Production</h3>
                            <div class="widget-body">
                                <ul class="widget-list">
                                <?php
                                $args = array(
                                'post_type' => 'our-services', // Replace with your custom post type
                                'tax_query' => array(
                                array(
                                'taxonomy' => 'our-service-category', // Replace with your taxonomy slug
                                'field'    => 'slug', // You can also use 'term_id' or 'name'
                                'terms'    => 'video-production', // Replace with your term slug
                                ),
                                
                                ),
                                'posts_per_page' => -1, 
                                'order' => 'ASC',
                                );
                                
                                $query = new WP_Query($args);
                                
                                if ($query->have_posts()) {
                                while ($query->have_posts()) {
                                $query->the_post();
                                // Output post data
                                ?>
                                    <li><a href="<?php echo get_permalink() ?>"><?php echo get_the_title();?></a></li>
                                    
                              <?php } wp_reset_postdata(); } ?>
                                                  
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div><!-- End Footer Widget Area -->

        <!-- Start Footer Bottom Area -->
        <div class="footer-bottom-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-12 ">
                        <div class="footer-copyright-area mt-xs-10 text-center ">
                            <p> ©<script>
                                    document.write(new Date().getFullYear() + ' ');
                                </script>Chasing Illusions Studio - All Rights Reserved. | Developed By <a href="https://www.mkstechnosoft.com/" target="_blank" class="mks">MKS Technosoft</a></p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div><!-- End Footer Bottom Area -->
    </footer>
<?php wp_footer(); ?>
</body>
</html>
