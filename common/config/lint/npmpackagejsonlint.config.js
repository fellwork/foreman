module.exports = {
	rules: {
		'require-author': 'error',
		'require-description': 'error',
		'require-engines': 'error',
		'require-license': 'error',
		'require-name': 'error',
		'require-repository': 'error',
		'require-version': 'error',
		'require-bugs': 'off',
		'require-homepage': 'off',
		'require-keywords': 'error',
		'bin-type': 'error',
		'config-type': 'error',
		'description-type': 'error',
		'devDependencies-type': 'error',
		'directories-type': 'error',
		'engines-type': 'error',
		'files-type': 'error',
		'homepage-type': 'error',
		'keywords-type': 'error',
		'license-type': 'error',
		'main-type': 'error',
		'name-type': 'error',
		'preferGlobal-type': 'error',
		'private-type': 'error',
		'repository-type': 'error',
		'scripts-type': 'error',
		'version-type': 'error',
		'no-duplicate-properties': 'error',
		'no-repeated-dependencies': 'error',
		'prefer-alphabetical-bundledDependencies': 'error',
		'prefer-alphabetical-dependencies': 'error',
		'prefer-alphabetical-devDependencies': 'error',
		'prefer-alphabetical-optionalDependencies': 'error',
		'prefer-alphabetical-scripts': 'error',
		'prefer-caret-version-dependencies': 'error',
		'prefer-caret-version-devDependencies': [
			'error',
			{
				exceptions: [
					'@fellwork/*'
				]
			}
		],
		'prefer-scripts': [
			'warning',
			[
				'lint'
			]
		]
	}
}
