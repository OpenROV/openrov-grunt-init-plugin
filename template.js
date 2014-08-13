/*
 * grunt-init-openrov-plugin
 * https://openrov.com/
 *
 * Copyright (c) 2014 OpenROV Inc, contributors
 * Licensed under the MIT license.
 */

'use strict';

	// Basic template description.
	exports.description = 'Creates the scaffolding for an OpenROV Cockpit plugin';

  // Template-specific notes to be displayed before question prompts.
  exports.notes = '_Project name_ should not contain "openrov-plugin" as it will be added automatically and ' +
    'should be a unique ID not already in use. _Project ' +
    'title_ should be a human-readable title, and doesn\'t need to contain ' +
    'the word "jQuery", although it may. ';

	// Template-specific notes to be displayed after question prompts.
	exports.after = 'If you have not already, be sure to run git init to initalize your repository. ' +
    'When you are ready to publish, use:' +
    '\n\n' +
    '$ bower register <my-package-name> <git-endpoint>';

	// Any existing file or directory matching this wildcard will cause a warning.
	exports.warnOn = '*';

	// The actual init template.
	exports.template = function(grunt, init, done) {

		init.process({}, [
			// Prompt for these values.
      init.prompt('name'),
      init.prompt('description'),
      init.prompt('main'),
      init.prompt('version','0.0.0'),
      init.prompt('author_name'),
      init.prompt('author_email'),
      init.prompt('homepage'),
      init.prompt('licenses')
		], function(err, props) {
			// Files to copy (and process).
			var files = init.filesToCopy(props);

			// Actually copy (and process) files.
			init.copyAndProcess(files, props);

      // Add properly-named license files.
      init.addLicenseFiles(files, props.licenses);

			// Generate package.json file, used by npm and grunt.
			init.writePackageJSON('bower.json', {
				name: 'openrov-plugin-' + props.name,
				main: props.main,
				version: props.version,
        authors: [
          props.author_name + '<' + props.author_email + '>'
        ],
				description: props.description,
        moduleType: [
          'es6',
          'node'
        ],
        keywords: [
          'openrov',
          'plugin'
        ],
        license: props.licenses,
        homepage: props.homepage,
        ignore: [
          "**/.*",
          "node_modules",
          "bower_components",
          "test",
          "tests"
        ]
			});

			// All done!
			done();
		});
	};
