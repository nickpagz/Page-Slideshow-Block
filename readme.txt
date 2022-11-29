=== Page Slideshow Block ===
Contributors:      Nick Pagazani
Tags:              block, slideshow, fse
Tested up to:      6.1
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Use a regular page to build a slide show.

== Description ==

This plugin adds a custom block that allows you to build a simple slideshow on a single WordPress page.

Basic Usage:

The block is basically a wrapper for a Cover block, and includes two custom inner blocks, "Next" and "Previous", which are used for navigating slides. 

The block is loaded with a default template structure to make it easier to build a slideshow, however it's not required and all inner blocks can be removed if desired.

Recommendations:

* The Slideshow Block works best on a new Page using a "Blank" page template. In most FSE themes, the default "Blank" template will need to be adjusted so the "Post Content" block has the "Inner blocks use content width" toggle turned off. Alternately, you can create your own custom "Blank Slide" template instead.
* Do not delete the first Cover and Stack blocks. These include specific styles to help with the slide layout.
* The "Next" and "Previous" blocks are only containers pre-loaded with a paragraph block and text. Any other block can be used inside these blocks.
* The "Next" and "Previous" navigation blocks can be placed anywhere, or not at all, or multiple times in the same slide if desired.
* While not used by the block, setting an HTML Anchor for each slideshow block will make navigation in the editor easier.
* It's best to build one slide as a template slide, the "Duplicate" this template to create a new slide.


== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/np-slideshow-block` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

Nada.

= A question that someone might have =

An answer to that question.

= What about foo bar? =

Answer to foo bar dilemma.

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Changelog ==

= 0.1.0 =
* Release

== Arbitrary section ==

You may provide arbitrary sections, in the same format as the ones above. This may be of use for extremely complicated
plugins where more information needs to be conveyed that doesn't fit into the categories of "description" or
"installation." Arbitrary sections will be shown below the built-in sections outlined above.
