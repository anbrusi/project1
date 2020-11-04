import { TreeNode } from './treenode.js';
import { uid } from './myuid.js';

class SubTree {
    constructor(name) {
        this.name = name;
        this.nodes = [];
        console.log('Created subtree: ' + this.name);
    }
    addNode(txt) {
        let descriptor = {uid: uid(), txt: txt, order: this.nodes.length};
        let node = new TreeNode().create( descriptor );
        this.nodes.push(node);
        console.log('Added node: ' + node.txt + ' to subtree: ' + this.name);
        return node;
    }
    /**
     * Returns the node with the specified uid or undefined
     * 
     * @param {string} uid 
     */
    nodeByUid(uid) {
        for (let node in this.nodes) {
            if (node.uid == uid) {
                return node;
            } else if (node.subtree.length > 0) {
                // Search the subtree
                let subtreeNode = node.subtree.nodeByUid(uid);
                if (subtreeNode !== undefined) {
                    return subtreeNode;
                }
            }
        }
        return undefined;
    }
    /**
     * Changes the order of the nodes in this.nodes, according to the order given by
     * the order property of its nodes
     */
    reorder() {
        this.nodes.sort((a, b) => a.order - b.order);
    }
    html() {
        let subtree = document.createElement( 'ul' );
        for (let node of this.nodes) {
            subtree.appendChild( node.html() );
            if (node.subtree !== null) {
                let surrogate = document.createElement('li');
                surrogate.appendChild( node.subtree.html());
                subtree.appendChild(surrogate);
            }
        }
        return subtree;
    }
}

export { SubTree };