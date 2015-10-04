// Lookup test files
var context = require.context( '.', true, /\.spec\.ts/ );

// Load test files
context.keys().forEach(context);
