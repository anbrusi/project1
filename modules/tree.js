import { SubTree } from './subtree.js';

class Tree {
    constructor(name) {
        this.name = name;
        this.subtree = new SubTree('mainsubtree');
        console.log('Created Tree: ' + name);
    }
}

export { Tree }