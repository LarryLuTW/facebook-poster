var request = require('request').defaults({jar: true});
var cheerio = require('cheerio');
import cookie from './cookie';
import defaults from './defaults';
import promise2Callback from './promise2Callback';

function generateAPI(){
    var apiList = [
        'post'
    ]

    var api = {};
    apiList.forEach(e => {
        api[e] = promise2Callback(require('./' + e).default);
    });
    
    return api;
}

async function getLoginForm(user: { email: string, password: string }): Promise<any> {
    var opt = {
        url: 'https://www.facebook.com/',
        jar: cookie.getJar(),
        headers: defaults.headers
    };

    return new Promise((resolve, reject) => {
        request.get(opt, (err, res, body) => {
            if(err || res.statusCode !== 200){
                return reject(err);
            }
                
            var $ = cheerio.load(body);
            var obj = <any>{};
            $('form#login_form input[type=hidden]').each(function(){
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
}

async function login(user): Promise<any> {
    var form = await getLoginForm(user);
    var jar = cookie.getJar();
    var headers = defaults.headers;
    var url = 'https://www.facebook.com/login.php?login_attempt=1&lwv=110';

    return new Promise((resolve, reject) => {
        request.post({ url, headers, form, jar }, (err, res, body) => {
            if(err || res.statusCode !== 302){
                return reject(new Error('wrong email or password'));
            }
            var api = generateAPI();
            resolve(api);
        });
    });
}

export default promise2Callback(login);