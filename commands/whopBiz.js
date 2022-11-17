import { exec } from 'child_process'

const whopBiz = async () => {
    exec('yarn turbo run dev --filter biz...')
}

export default whopBiz