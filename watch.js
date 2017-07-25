var requireTest = require.context('./_site', true,  /\.(html|md|yml)$/);
requireTest.keys().forEach(requireTest);
