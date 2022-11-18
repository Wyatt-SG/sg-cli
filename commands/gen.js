import { exec } from 'child_process'

const templateReactComponent = (name) => {
    return `
    import React from "react";

    const ${name} = () => {
        return <div>${name}</div>
    }

    export default ${name}
    `
}

const gen = (name) => {
    exec(`echo '${templateReactComponent(name)}' >${name}.tsx`)
}

export default gen;
