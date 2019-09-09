/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	Underline,
	BlockQuote,
	Heading,
	Image,
	ImageCaption,
	SimpleUploadAdapter,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Font,
	Table,
	ImageResize,
	TableToolbar,
	Alignment,
	Indent
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontSize',
			'fontColor',
			'bold',
			'italic',
			'underline',
			'alignment',
			'indent',
			'outdent',
			'|',
			'link',
			'bulletedList',
			'numberedList',
			'imageUpload',
			'insertTable',
			'blockQuote',
			'undo',
			'redo',
		]
	},
	fontColor: {
		colors: [
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black'
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey'
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey'
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey'
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true
			},
			{
				color: 'hsl(0, 75%, 60%)',
				label: 'Red'
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Orange'
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Yellow'
			},
			{
				color: 'hsl(90, 75%, 60%)',
				label: 'Light green'
			},
			{
				color: 'hsl(120, 75%, 60%)',
				label: 'Green'
			},
			{
				color: 'hsl(150, 75%, 60%)',
				label: 'Aquamarine'
			},
			{
				color: 'hsl(180, 75%, 60%)',
				label: 'Turquoise'
			},
			{
				color: 'hsl(210, 75%, 60%)',
				label: 'Light blue'
			},
			{
				color: 'hsl(240, 75%, 60%)',
				label: 'Blue'
			},
			{
				color: 'hsl(270, 75%, 60%)',
				label: 'Purple'
			}
		]
	},
	fontSize: {
		options: [
			9,
			11,
			13,
			'default',
			17,
			19,
			21
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	simpleUpload: {
		// The URL that the images are uploaded to.
		uploadUrl: 'https://api-fujiwara-v2.herokuapp.com/uploads',
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
