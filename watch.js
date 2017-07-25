// This script will require the jekyll files and allow the webpack web server to auto reload
var requireTest = require.context('./_site', true,  /\.(html|md|yml)$/);
requireTest.keys().forEach(requireTest);
