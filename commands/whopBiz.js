import { exec } from 'child_process'

const whopBiz = () => {
    exec('yarn turbo run dev --filter biz...')
}

export default whopBiz