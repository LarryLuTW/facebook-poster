"use strict";
function default_1(promiseFun) {
    return function (...args) {
        if (args.length == promiseFun.length + 1) {
            console.log('exist callback');
            var callback = args[args.length - 1];
            args = args.slice(0, args.length - 1);
            promiseFun(...args)
                .then(res => callback(undefined, res))
                .catch(err => callback(err, undefined));
        }
        else {
            console.log('no callback');
            promiseFun(...args);
        }
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21pc2UyQXN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUF3QixVQUFVO0lBQzlCLE1BQU0sQ0FBQyxVQUFTLEdBQUcsSUFBSTtRQUNuQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDOUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFdEMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUNkLElBQUksQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDckMsS0FBSyxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFDL0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQixVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUN2QixDQUFDO0lBQ0wsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQWZEOzJCQWVDLENBQUEiLCJmaWxlIjoicHJvbWlzZTJBc3luYy5qcyIsInNvdXJjZVJvb3QiOiJzcmMifQ==
