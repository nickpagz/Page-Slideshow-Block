import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Edit() {
    return (
        <div {...useBlockProps()}>
            <InnerBlocks
                template={[
                    [ 'core/paragraph', { content: 'Next slide' } ]
                ]}
            />
        </div>
    );
}
