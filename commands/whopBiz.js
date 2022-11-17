import { exec } from 'child_process'

const whopBiz = async () => {
    exec('yarn turbo run dev --filter marketplace...')
}

export default whopBiz