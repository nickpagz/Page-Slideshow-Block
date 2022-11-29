import { registerBlockType } from '@wordpress/blocks';
import './np-navigation-next';
import './np-navigation-prev';
import './style.scss';
import Edit from './edit';
import save from './save';
registerBlockType( 'np-block/page-slideshow-block', {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
