
import * as vscode from 'vscode';

/** 获取选中文本 */
const getSelectedText = () => {
	const editor = vscode.window.activeTextEditor;
	if (!editor) return;
	const selection = editor.selection;
	return editor.document.getText(selection);
};

/** 文本替换 */
const replaceText = (replaceText: string) => {
	const editor = vscode.window.activeTextEditor;
	if (!editor) return;
	const selection = editor.selection;
  editor.edit(editBuilder => {
		editBuilder.replace(selection, replaceText);
	});
};

const handleUppercase = () => {
	const text = getSelectedText();
	if (!text) return;
	const upperText = text.toUpperCase();
	replaceText(upperText);
};

const handleLowercase = () => {
	const text = getSelectedText();
	if (!text) return;
	const lowerText = text.toLowerCase();
	replaceText(lowerText);
};

const handleLowerCamelCase = () => {
	const text = getSelectedText();
	if (!text) return;
	const upperCamelCaseText = text
		.replace(/-|_(\w)/g, (_, c) => c ? c.toUpperCase() : '')
		.replace(/^\w/, c => c.toLowerCase());

	replaceText(upperCamelCaseText);
};

const handleUpperCamelCase = () => {
	const text = getSelectedText();
	if (!text) return;
	const lowerCamelCaseText = text
		.replace(/-|_(\w)/g, (_, c) => c ? c.toUpperCase() : '')
		.replace(/^\w/, c => c.toUpperCase());

	replaceText(lowerCamelCaseText);
};

export {
	handleUppercase,
	handleLowercase,
	handleLowerCamelCase,
	handleUpperCamelCase,
};