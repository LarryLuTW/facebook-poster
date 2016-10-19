"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var request = require('request').defaults({ jar: true });
var cheerio = require('cheerio');
const cookie_1 = require('./cookie');
const defaults_1 = require('./defaults');
const promise2Callback_1 = require('./promise2Callback');
function generateAPI() {
    var apiList = [
        'post'
    ];
    var api = {};
    apiList.forEach(e => {
        api[e] = promise2Callback_1.default(require('./' + e).default);
    });
    return api;
}
function getLoginForm(user) {
    return __awaiter(this, void 0, void 0, function* () {
        var opt = {
            url: 'https://www.facebook.com/',
            jar: cookie_1.default.getJar(),
            headers: defaults_1.default.headers
        };
        return new Promise((resolve, reject) => {
            request.get(opt, (err, res, body) => {
                if (err || res.statusCode !== 200) {
                    return reject(err);
                }
                var $ = cheerio.load(body);
                var obj = {};
                $('form#login_form input[type=hidden]').each(function () {
                    var name = $(this).attr('name');
                    var val = $(this).attr('value');
                    obj[name] = val;
                });
                var form = {
                    lsd: obj.lsd,
                    lgndim: 'eyJ3IjoxNDQwLCJoIjo5MDAsImF3IjoxNDQwLCJhaCI6ODA3LCJjIjoyNH0=',
                    email: user.email,
                    pass: user.password,
                    default_persistent: obj.default_persistent,
                    lgnrnd: obj.lgnrnd,
                    locale: 'zh_TW',
                    timezone: '-480',
                    lgnjs: ~~(Date.now() / 1000)
                };
                resolve(form);
            });
        });
    });
}
function login(user) {
    return __awaiter(this, void 0, void 0, function* () {
        var form = yield getLoginForm(user);
        var jar = cookie_1.default.getJar();
        var headers = defaults_1.default.headers;
        var url = 'https://www.facebook.com/login.php?login_attempt=1&lwv=110';
        return new Promise((resolve, reject) => {
            request.post({ url, headers, form, jar }, (err, res, body) => {
                if (err || res.statusCode !== 302) {
                    return reject(new Error('wrong email or password'));
                }
                var api = generateAPI();
                resolve(api);
            });
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = promise2Callback_1.default(login);

//# sourceMappingURL=data:application/json;charset=utf8;base64,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
