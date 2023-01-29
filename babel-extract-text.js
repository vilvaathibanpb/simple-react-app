const { writeFileSync } = require('fs');

const textJSON = {}

module.exports = function({ types: t }) {
    return {
        visitor: {
            Program: {
                exit(path) {
                    const json = JSON.stringify(textJSON);
                    writeFileSync("translations.en.json", json)
                }
            },
            JSXElement({ node }) {
                const text = node.children
                    .filter(child => child.type === "JSXText")
                    .map(child => child.value).join(" ")
                const key = `${text.substring(0,20).toLowerCase().trim().replace(/\s+/g, "_")}`
                if(key) textJSON[key] = text;
            }
        }
    }
}