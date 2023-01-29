module.exports = function customLoader( sourceCode ) {

    let importString;

    if(sourceCode.indexOf('useState') >= 0) {
        importString = `import React, { useState } from 'react'`
    } else {
        importString = `import React from 'react'`
    }
    
    return `
        ${importString};
        ${sourceCode}
    `
}