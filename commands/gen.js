import chalk from 'chalk'
import { exec } from 'child_process'

const templateReactComponent = (name) => {
    const cleanedComponentName = name.match(/([^\/]*)$/)[0]

    return `
    import React from "react";

    const ${cleanedComponentName} = () => {
        return <div>${cleanedComponentName}</div>
    }

    export default ${cleanedComponentName}
    `
}

const gen = (name) => {
    exec(`echo '${templateReactComponent(name)}' >${name}.tsx`)

    console.log(chalk.green.bold(`Generated ${name}.tsx`))
}

export default gen;
