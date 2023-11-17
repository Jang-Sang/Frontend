module.exports = {
    env : {
        browser : true,
        es6 : true,
    },
    parserOptions : {
        ecmaFeatures : {
            module : true,
            jsx : true,
        },
        ecmaVersion : 2020,
        sourceType : "module",
    },
    plugins : ["react", "unused-imports"],
    rules : {
        "react/jsx-uses-vars" : "error",
        "react/jsx-uses-react" : "error",
        "unused-imports/no-unused-imports-ts" : ["error"],
    },
};

// 이것을 가져다가 사용한다. 보통 회사에서 자주 사용하는 eslint나 개인이 자주 사용하는 eslint를 복사해서 사용한다.
// 한번 만들면 끝이다.