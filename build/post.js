"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var fs = require('fs');
var request = require('request').defaults({ jar: true });
var cheerio = require('cheerio');
const cookie_1 = require('./cookie');
const defaults_1 = require('./defaults');
function getPostForm() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            var opt = {
                url: 'https://www.facebook.com/',
                jar: cookie_1.default.getJar(),
                headers: defaults_1.default.headers
            };
            request(opt, (err, res, body) => {
                if (err || res.statusCode !== 200) {
                    return reject(err);
                }
                var $ = cheerio.load(body);
                var htmls = $('div.hidden_elem > code');
                var feedxContainer = null;
                for (var i = 0; i < htmls.length; i++) {
                    var html = htmls.eq(i).html();
                    if (html.includes('is_react')) {
                        feedxContainer = html.slice(0, -4).substr(5);
                        break;
                    }
                }
                var form = {};
                $ = cheerio.load(feedxContainer);
                $('div#feedx_container > div > form > input').each(function () {
                    var name = $(this).attr('name');
                    var val = $(this).attr('value');
                    form[name] = val;
                });
                /*
                    xhpc_composerid: postForm.xhpc_composerid,
                    xhpc_targetid: postForm.xhpc_targetid,
                    __user: postForm.xhpc_targetid,
                    fb_dtsg: postForm.fb_dtsg,
                */
                if (!form.xhpc_composerid || !form.xhpc_targetid || !form.xhpc_targetid || !form.fb_dtsg) {
                    return reject(new Error('get form failed'));
                }
                resolve(form);
            });
        });
    });
}
function post({ content, privacy }) {
    return __awaiter(this, void 0, void 0, function* () {
        var postForm = yield getPostForm();
        var url = `https://www.facebook.com/ajax/updatestatus.php?av=${postForm.xhpc_targetid}&dpr=1`;
        var jar = cookie_1.default.getJar();
        if (privacy == 'public') {
            // public
            var privacyx = '300645083384735';
        }
        else if (privacy == 'friends') {
            // friends
            var privacyx = '291667064279714';
        }
        else {
            // myself
            var privacyx = '286958161406148';
        }
        if (!content) {
            return Promise.reject(new TypeError('post content is empty'));
        }
        var form = Object.assign({
            xhpc_composerid: postForm.xhpc_composerid,
            xhpc_targetid: postForm.xhpc_targetid,
            __user: postForm.xhpc_targetid,
            fb_dtsg: postForm.fb_dtsg,
            xhpc_message: content,
            xhpc_message_text: content,
            xhpc_context: 'profile',
            privacyx
        }, defaults_1.default.postForm);
        var headers = defaults_1.default.headers;
        return new Promise((resolve, reject) => {
            request.post({ url, jar, form, headers }, (err, res, body) => {
                if (err || res.statusCode !== 200) {
                    return reject(err);
                }
                if (body.length == 0) {
                    return reject(new Error('There are same post recently'));
                }
                resolve('post success');
            });
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = post;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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
