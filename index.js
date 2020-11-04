import { SubTree } from './modules/subtree.js';
import { Tree } from './modules/tree.js';

// Create a tree
let myTree = new Tree('my first tree');

// Add node 1, 2, 3 to main
let mainSubtree = new SubTree('main');
mainSubtree.addNode( 'node 1' );
mainSubtree.addNode( 'node 2' );
let node3 = mainSubtree.addNode( 'node 3' );
    // Add a subtree to node 3
    let subtree3 = new SubTree(' subtree 3' );
    subtree3.addNode(' sub 3-1' );
    let node3_2 = subtree3.addNode(' sub 3-2' );
        let subtree3_2 = new SubTree( 'subtree 3_2' );
        subtree3_2.addNode( 'sub 3_2_1' );
        subtree3_2.addNode( 'sub 3_2_2' );
        node3_2.subtree = subtree3_2;
    subtree3.addNode(' sub 3-3' );
    subtree3.addNode(' sub 3-4' );
    node3.subtree = subtree3;
mainSubtree.addNode( 'node 4' );



// Install the main subtree
myTree.addSubtree(mainSubtree);

// Render the tree
myTree.render( 'target' );