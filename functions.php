<?php

function addResources() {
  wp_enqueue_style('style', get_stylesheet_uri());
  wp_enqueue_script( 'jquery', get_template_directory_uri() .'/js/_vendor/jquery.js' );
  wp_enqueue_script( 'app', get_template_directory_uri() .'/js/app.js' );
}

add_action('wp_enqueue_scripts', 'addResources');



// <!-- Navigation menus -->
//
register_nav_menus(array(
  'nav-menu' => __("Navigation Menu"),
  'footer' => __("footer Menu"),

));
