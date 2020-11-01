class TreeNode {
    constructor(txt) {
        this.parent = null;
        this.txt = txt;
        this.expanded = false;
        console.log('Created tree node: ' + this.txt);
    }
    expand() {
        this.expanded = true;
        console.log('expanded TreeNode ' + this.txt);
    }
    collapse() {
        this.expanded = false;
        console.log('collapsed TreeNode ' + this.txt);
    }
}

export { TreeNode };