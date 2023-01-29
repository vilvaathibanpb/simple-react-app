const parser = require('@babel/parser');
const traverse = require('@babel/traverse');
const generate = require('@babel/generator');
const template = require('@babel/template');
const types = require("@babel/types");

const code = `const name = 'vilva'`;

const ast = parser.parse(code);

console.log(ast);

traverse(ast, {
    enter(path) {
        if( path.node.type === 'Identifier' && path.node.name === "name" ) {
            path.node.name = "firstName"
        }
    }
})

generate(ast, {}, code)

"import unmount from 'enzyme'"

const customTemplate = template(`
    import TESTUTILS from 'react-testing-library'
`)

const customAst = customTemplate({
    TESTUTILS: types.identifier("unmount"),
}) 
