var fs = require('fs');
var request = require('request').defaults({jar: true});
var cheerio = require('cheerio');
import cookie from './cookie';
import defaults from './defaults';

async function getPostForm(): Promise<any> {
    return new Promise((resolve, reject) => {
        var opt = {
            url: 'https://www.facebook.com/',
            jar: cookie.getJar(),
            headers: defaults.headers
        };

        request(opt, (err, res, body) => {
            if(err || res.statusCode !== 200){
                return reject(err);
            }
            
            
            var $ = cheerio.load(body);
            var htmls = $('div.hidden_elem > code');
            var feedxContainer = null;

            for(var i=0 ; i<htmls.length ; i++){
                var html = htmls.eq(i).html();
                if(html.includes('is_react')){
                    feedxContainer = html.slice(0, -4).substr(5);
                    break;
                }
            }
            
            var form = <any>{};
            $ = cheerio.load(feedxContainer);
            $('div#feedx_container > div > form > input').each(function(){
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
            
            if(!form.xhpc_composerid || !form.xhpc_targetid || !form.xhpc_targetid || !form.fb_dtsg){
                return reject(new Error('get form failed'));
            }

            resolve(form);
        });
    });
}

async function post({ content, privacy }): Promise<any> {
    var postForm = await getPostForm();
    var url = `https://www.facebook.com/ajax/updatestatus.php?av=${postForm.xhpc_targetid}&dpr=1`;
    var jar = cookie.getJar();
    
    if (privacy == 'public'){
        // public
        var privacyx = '300645083384735';
    } else if (privacy == 'friends'){
        // friends
        var privacyx = '291667064279714';
    } else {
        // myself
        var privacyx = '286958161406148';
    }
    
    if(!content){
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

    }, defaults.postForm);
    
    var headers = defaults.headers;
    
    return new Promise((resolve, reject) => {
        request.post({ url, jar, form, headers }, (err, res, body) => {
            if(err || res.statusCode !== 200){
                return reject(err);
            }
            if(body.length == 0){
                return reject(new Error('There are same post recently'));
            }
            resolve('post success');
        });
    });    
}

export default post