"use strict";
var fs = require('fs');
var request = require('request').defaults({ jar: true });
var jar = request.jar();
function getJar() {
    return jar;
}
function saveJar() {
    fs.writeFileSync('jar.json', JSON.stringify(jar));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { getJar, saveJar };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb2tpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUV2RCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFeEI7SUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVEO0lBQ0ksRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFFRDtrQkFBZSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyIsImZpbGUiOiJjb29raWUuanMiLCJzb3VyY2VSb290Ijoic3JjIn0=
