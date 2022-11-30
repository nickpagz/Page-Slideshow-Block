<?php
/**
 * Plugin Name:       Page Slideshow Block
 * Description:       Use a regular page to build a slide show.
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Nick Pagazani
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       np-slideshow-block
 *
 * @package           page-slideshow-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function np_slideshow_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'np_slideshow_block_init' );

function np_slideshow_block_enqueue_scripts() {
	wp_enqueue_script(
		'np-slideshow-block-frontend-js',
		plugins_url( '/assets/js/frontend.js', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . '/assets/js/frontend.js' ),
		true
	);
}

add_action( 'wp_enqueue_scripts', 'np_slideshow_block_enqueue_scripts' );

register_activation_hook( __FILE__, 'np_slideshow_block_plugin_install' );

function np_slideshow_block_plugin_install() {
	global $wpdb;

	// Set post details
	$the_page_title = 'Blank Slide';
	$the_page_name  = 'wp-custom-template-np-blank-slide';

	// Check if template exists
	$post_args       = array(
		'post_type' => 'wp_template',
	);
	$template_posts  = get_posts( $post_args );
	$template_exists = in_array( $the_page_name, array_column( $template_posts, 'post_name' ), true );

	if ( ! $template_exists ) {

		// Get all FSE themes
		$taxonomies = get_terms(
			array(
				'taxonomy'   => 'wp_theme',
				'hide_empty' => false,
			)
		);
		$term_ids   = array_column( $taxonomies, 'term_id' );

		// Create post object
		$_p                   = array();
		$_p['post_title']     = $the_page_title;
		$_p['post_name']      = $the_page_name;
		$_p['post_content']   = '<!-- wp:post-content /-->';
		$_p['post_status']    = 'publish';
		$_p['post_type']      = 'wp_template';
		$_p['comment_status'] = 'closed';
		$_p['ping_status']    = 'closed';
		$_p['tax_input']      = array(
			'wp_theme' => $term_ids,
		);

		// Insert the post into the database
		$the_page_id = wp_insert_post( $_p );

		// Add post_meta
		add_post_meta( $the_page_id, 'is_wp_suggestion', '' );

	}
}
