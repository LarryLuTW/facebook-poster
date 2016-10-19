export default function(promiseFun){
    return function(...args){
        if(args.length == promiseFun.length + 1){
            var callback = args[args.length - 1];
            args = args.slice(0, args.length - 1);
            
            promiseFun(...args)
                .then(res => callback(undefined, res))
                .catch(err => callback(err, undefined))
        } else {
            promiseFun(...args)
        }
    }
}