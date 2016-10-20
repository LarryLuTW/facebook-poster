[English](./README.md)

Facebook-Poster 是一個可以自動在 Facebook 上發文的 api，這個 api 透過模擬瀏覽器來做到這件事，如果你用這個 api 進行發文的話 Facebook 會以為你是真的上線去發文。此外，這個專案目前才剛起步，如果有遇到任何錯誤或是覺得哪裡可以更好，請不吝嗇告訴我，如果你覺得這個專案很有趣，請給我一顆星星，謝謝。

## 需求

- node >= 4.3.2

## 安裝

```bash
npm install facebook-poster --save
```

## 如何使用

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

## 文件

### login({ email, password }, callback(err, api))
登入並拿到 api

__參數__

* `email`: 你的信箱
* `password`: 你的密碼

---

### api.post({ content, privacy }, callback(err))
發表新貼文

__參數__

* `content`: 貼文內容
* `privacy`: "private" 、 "friends" 或 "public".

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
