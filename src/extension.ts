// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { handleLowercase, handleUppercase, handleLowerCamelCase, handleUpperCamelCase } from './changeCase';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-change-case" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	const uppercaseDisposable = vscode.commands.registerCommand('vscode-change-case.uppercase', handleUppercase);

	const lowercaseDisposable = vscode.commands.registerCommand('vscode-change-case.lowercase', handleLowercase);

	const lowerCamelCaseDisposable = vscode.commands.registerCommand('vscode-change-case.lowerCamelCase', handleLowerCamelCase);

	const upperCamelCaseDisposable = vscode.commands.registerCommand('vscode-change-case.upperCamelCase', handleUpperCamelCase);

	context.subscriptions.push(
		uppercaseDisposable,
		lowercaseDisposable,
		lowerCamelCaseDisposable,
		upperCamelCaseDisposable
	);

}

function myTitleFunction(): string {
    return 'My Dynamic Title';
}


// This method is called when your extension is deactivated
export function deactivate() { }
