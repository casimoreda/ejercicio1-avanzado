function doGet() {
  const html = HtmlService.createTemplateFromFile('html y css/web');
  const output = html.evaluate();
  return output
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent()
}