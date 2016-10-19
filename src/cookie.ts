var fs = require('fs');
var request = require('request').defaults({jar: true});

var jar = request.jar();

function getJar(): any {
    return jar;
}

function saveJar(): void {
    fs.writeFileSync('jar.json', JSON.stringify(jar));
}

export default { getJar, saveJar };