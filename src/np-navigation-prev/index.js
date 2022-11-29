import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType( 'np-block/page-slideshow-prev', {
    title: __( 'Previous Slide', 'np-slideshow-block' ),
    description: __( 'Previous slide navigation block', 'np-slideshow-block' ),
    icon: 'arrow-left-alt2',
    ancestor: [ 'np-block/page-slideshow-block' ],
    edit: Edit,
    save: Save,
} );
