import { SubTree } from './subtree.js';

class Tree {
    constructor(name) {
        this.name = name;
        this.subtree = new SubTree('mainsubtree');
        console.log('Created Tree: ' + name);
    }
    addSubtree(subtree, targetuid = null) {
        if (targetuid == null) {
            // It is the main subtree
            this.subtree = subtree;
        } else {
            let fatherNode = this.nodeByUid(targetuid);
            if (fatherNode === undefined) {
                // There is no node where we could attatch the subtree
                throw new Error('There is no node with uid ' + targetuid);
            } else {
                fatherNode.subtree = subtree;
            }
        }
    }
    nodeByUid(uid) {
        return this.subtree.nodeByUid(uid);
    }
    html() {
        return this.subtree.html();
    }
    render(id) {
        let container = document.getElementById( id );
        container.appendChild( this.html() );
    }
}

export { Tree }