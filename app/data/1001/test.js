const demoHtml = require('./demo');
const { parseContent } = require('./index');
function test() {
  console.log(parseContent(demoHtml));
}

test();
