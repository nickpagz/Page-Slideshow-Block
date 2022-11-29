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
