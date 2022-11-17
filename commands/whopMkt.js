import { exec } from 'child_process'

const whopMkt = async () => {
    exec('yarn turbo run dev --filter marketplace...')
}

export default whopMkt