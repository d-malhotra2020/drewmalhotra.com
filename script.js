const { JSDOM } = require("jsdom");
const { document } = (new JSDOM(``)).window;
// Now you can use 'document' as if you were in a browser
