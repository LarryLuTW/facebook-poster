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
function getLoginForm(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            var opt = {
                url: 'https://www.facebook.com/',
                jar: cookie_1.default.getJar(),
                headers: defaults_1.default.headers
            };
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
                    email: user.account,
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
        return new Promise((resolve, reject) => {
            var headers = defaults_1.default.headers;
            var url = 'https://www.facebook.com/login.php?login_attempt=1&lwv=110';
            request.post({ url, headers, form, jar }, (err, res, body) => {
                if (err || res.statusCode !== 302) {
                    return reject(err);
                }
                var apiList = [
                    'post'
                ];
                var api = {};
                apiList.forEach(e => {
                    api[e] = promise2Callback_1.default(require('./' + e).default);
                });
                resolve(api);
            });
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = login;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUEsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCxJQUFJLE9BQU8sR0FBRztvQkFDVixNQUFNO2lCQUNULENBQUE7Z0JBRUQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNiLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDYixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsMEJBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQUE7QUFFRDtrQkFBZSxLQUFLLENBQUMiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290Ijoic3JjIn0=
