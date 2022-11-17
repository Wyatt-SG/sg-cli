import { execa } from 'execa';

const gen = async (name) => {
    await execa('touch', [`${name}.tsx`])
}

export default gen;
