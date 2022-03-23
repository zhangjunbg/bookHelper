const demoHtml = require('./demo');
const { parseContent } = require('./index');
function test() {
  parseContent(demoHtml);
  // console.log(parseContent(demoHtml));
}

test();
