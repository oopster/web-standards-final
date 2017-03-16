<?php
/*=============================
=            Fonts            =
=============================*/
function final_add_google_fonts() {
  wp_register_style( 'googleFonts', 'http://fonts.googleapis.com/css?family=Open+Sans:400,300');
  wp_enqueue_style( 'googleFonts');
}
add_action( 'wp_enqueue_scripts', 'final_add_google_fonts' );

/*=============================
=            Menus            =
=============================*/
add_theme_support( 'menus' );

function final_register_menu() {
  register_nav_menu('main-menu', __( 'Main Menu') );
}
add_action('init', 'final_register_menu');

/*=============================
=            Widgets            =
=============================*/
function create_widget($name, $id, $description) {
    register_sidebar(array(
      'name' => __( $name ),
      'id'   => $id,
      'description' => __( $description ),
      'before_widget' => '<div class="widget">',
      'after_widget' => '</div>',
      'before_title' => '<h2>',
      'after_title' => '</h2>'
    ));
}

create_widget( 'Front Page Ad', 'front-ad', 'Displays add on hompage');

/*=============================
=            CSS            =
=============================*/
function theme_styles() {
    wp_enqueue_style( 'main_css', get_template_directory_uri() . '/css/style.css' );
    wp_enqueue_style( 'wp_css', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'theme_styles' );

/*=============================
=            JavaScript            =
=============================*/
function theme_js() {
   wp_enqueue_script( 'global_js', get_template_directory_uri() . '/js/global.js', '', '', true );
 if ( is_page( '4' ) ) {
   wp_register_script('home_js', get_template_directory_uri() . '/js/home.js');
   $local_dom_home = array( 'template_url' => get_bloginfo('template_url') );
   wp_localize_script( 'home_js', 'localDOMHome', $local_dom_home  );
   wp_enqueue_script( 'home_js', get_template_directory_uri() . '/js/home.js', '', null, true );
 }
 if ( is_page( '9' ) ) {
   wp_enqueue_script( 'photos_js', get_template_directory_uri() . '/js/photos.js', '', '', true );
 }
 if ( is_page( '7' ) ) {
       wp_enqueue_script( 'about_js', get_template_directory_uri() . '/js/about.js', '', '', true );
  }
 if ( is_page( '11' ) ) {
   wp_enqueue_script( 'live_js', get_template_directory_uri() . '/js/live.js', '', '', true );
 }
 if ( is_page( '13' ) ) {
   wp_enqueue_script( 'contact_js', get_template_directory_uri() . '/js/contact.js', '', '', true );
 }


}

add_action( 'wp_enqueue_scripts', 'theme_js' );
