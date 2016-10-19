"use strict";
function default_1(promiseFun) {
    return function (...args) {
        if (args.length == promiseFun.length + 1) {
            var callback = args[args.length - 1];
            args = args.slice(0, args.length - 1);
            promiseFun(...args)
                .then(res => callback(undefined, res))
                .catch(err => callback(err, undefined));
        }
        else {
            promiseFun(...args);
        }
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21pc2UyQ2FsbGJhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUF3QixVQUFVO0lBQzlCLE1BQU0sQ0FBQyxVQUFTLEdBQUcsSUFBSTtRQUNuQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUV0QyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ2QsSUFBSSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNyQyxLQUFLLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUMvQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUN2QixDQUFDO0lBQ0wsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQWJEOzJCQWFDLENBQUEiLCJmaWxlIjoicHJvbWlzZTJDYWxsYmFjay5qcyIsInNvdXJjZVJvb3QiOiJzcmMifQ==
