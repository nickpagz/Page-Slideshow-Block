import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={[ 'core/cover' ] }
				template={[ 
					[ 'core/cover', {
						dimRatio: 0,
						minHeight: 100,
						minHeightUnit: 'vh',
						overlayColor: 'base',
					}, [
						[ 'core/group', { // Full height Stack group, main container.
							layout: {
								type: 'flex',
								orientation: 'vertical',
								justifyContent: 'left',
							},
							orientation: 'vertial',
							className: 'is-style-full-height-stack',
						}, [
							[ 'core/group', {}, [ // Header group/container.
								[ 'core/group', { // Header row.
									layout: {
										type: 'flex',
										flexWrap: 'nowrap',
										justifyContent: 'space-between',
									},
								}, [
									[ 'core/group', { // Left side of header row.
										layout: {
											type: 'flex',
											flexWrap: 'nowrap',
											justifyContent: 'left',
										},
									}, [
										[ 'core/heading', { content: 'Slide Title goes here', level: 3 } ], // Slide Title.
									] ],
									[ 'core/group', { // Right side of header row.
										layout: {
											type: 'flex',
											flexWrap: 'nowrap',
											justifyContent: 'left',
										},
									}, [
										[ 'np-block/page-slideshow-prev', {} ], // Previous slide navigation block.
									] ],
								]]
							] ],
							[ 'core/group', {} ], // Main/body content group/container.
							[ 'core/group', {}, [ // Footer group/container.
								[ 'core/group', { // Footer row.
									layout: {
										type: 'flex',
										flexWrap: 'nowrap',
										justifyContent: 'space-between',
									},
								}, [
									[ 'core/group', { // Left side of footer row.
										layout: {
											type: 'flex',
											flexWrap: 'nowrap',
											justifyContent: 'left',
										},
									}, [
										[ 'core/paragraph', { content: 'Footer text' } ], // Footer content.
										[ 'core/paragraph', { content: '//' } ],
										[ 'core/paragraph', { content: 'Maybe a date here?' } ],
									] ],
									[ 'core/group', { // Right side of footer row.
										layout: {
											type: 'flex',
											flexWrap: 'nowrap',
											justifyContent: 'right',
										},
									}, [
										[ 'np-block/page-slideshow-next',{} ], // Next slide navigation block.
									] ],
								] ],
							] ],
						]],	
					]],
				]}
			/>
		</div>
	);
}
