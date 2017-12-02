export function replaceHello () {
    return input => {
        return input.replace(/hello/,'你好');
    }
}

replaceHello.$inject = [];
