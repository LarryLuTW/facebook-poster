var login = require('./index');

var user = {
    email:'YOUR_EMAIL',
    password: 'YOUR_PASSWORD'
};

login(user, function(err, api){
    if(err) console.log(err);

    var newPost = {
        content: 'Hello World YA',
        privacy: 'myself'
    }

    api.post(newPost, function(err){
        if(err) console.log(err);
        console.log('post success');
    });
});
