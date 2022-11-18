import { exec } from 'child_process'

const whopMkt = () => {
    exec('yarn turbo run dev --filter marketplace...')
}

export default whopMkt