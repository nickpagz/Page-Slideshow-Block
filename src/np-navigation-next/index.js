import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType( 'np-block/page-slideshow-next', {
    title: __( 'Next Slide', 'np-slideshow-block' ),
    description: __( 'Next slide navigation block', 'np-slideshow-block' ),
    icon: 'arrow-right-alt2',
    ancestor: [ 'np-block/page-slideshow-block' ],
    edit: Edit,
    save: Save,
} );
