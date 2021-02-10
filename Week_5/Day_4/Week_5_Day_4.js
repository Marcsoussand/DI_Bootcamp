

function treeCycle(n) {
    var treeSize = 1;
    for (i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            treeSize = treeSize * 2;
        }
        else treeSize += 1;
    }
    return treeSize;
}

console.log(treeCycle(5));