Facebook-Poster is an api that automate post functionalities on facebook. This api do this by simulating the browser. If you use this api to write some post, facebook will assume you are a real user. This project is fledgling. Feel free to open a issue when you get some error or find anywhere can be better. Besides, if you think this project is interesting, please give me a star. Thanks.

## Requirement

- node >= 4.3.2

## Install

```bash
npm install facebook-poster --save
```

##  Usage

```javascript
var login = require('facebook-poster');

var user = {
    email: 'YOUR_EMAIL',
    password: 'YOUR_PASSWORD'
};

login(user, function(err, api){
    if(err) console.log(err);

    var newPost = {
        content: 'Hello World\nThis is pudding dog',
        privacy: 'private'
    }

    api.post(newPost, function(err){
        if(err) console.log(err);
        console.log('post success');
    });
});
```

![](http://i.imgur.com/MSlhdHC.png)

---

## Documentation

### login({ email, password }, callback(err, api))
login and get api

__Arguments__

* `email`: your facebook email.
* `password`: your facebook password.

---

### api.post({ content, privacy }, callback(err))
write a post

__Arguments__

* `content`: post content.
* `privacy`: "private", "friends" or "public".

---

# License

The MIT License (MIT)

Copyright (c) 2016 Larry Lu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
