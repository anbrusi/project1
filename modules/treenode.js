class TreeNode {
    constructor() {
        this.uid = undefined;
        this.txt = undefined;
        this.order = undefined;
        this.expanded = false;
        this.subtree = null;
        console.log('Constructed tree node: ');
    }
    /**
     * Loads properties uid, parent, txt, defined in descriptor
     * 
     * @param {object} descriptor 
     */
    load( descriptor ) {
        this.uid = descriptor.uid;
        this.txt = descriptor.txt;
        this.order = descriptor.order;
    }
    /**
     * Creates and returns a TreeNode as specified by descriptor
     * 
     * @param {object} descriptor 
     */
    create( descriptor ) {
        let node = new TreeNode();
        node.load(descriptor);
        return node;
    }
    expand() {
        this.expanded = true;
        console.log('expanded TreeNode ' + this.txt);
    }
    collapse() {
        this.expanded = false;
        console.log('collapsed TreeNode ' + this.txt);
    }
    html() {
        let node = document.createElement('li');
        let text = this.order + ': [' + this.uid + '] ' + this.txt;
        node.appendChild( document.createTextNode(text));
        return node;
    }
}

export { TreeNode };