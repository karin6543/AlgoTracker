export const pMap = {'array' : 'ds' ,
'backtracking' : 'technique' ,
'bfs' : 'technique' ,
'binary-search' : 'technique' ,
'binary-tree' : 'ds' ,
'binary-search-tree' : 'ds' ,
'bit-manipulation' : 'technique' ,
'brainteaser' : 'type' ,
'bucket-sort' : 'technique' ,
'combinatorics' : 'type' ,
'concurrency' : 'type' ,
'counting' : 'technique' ,
'data-stream' : 'ds' ,
'design' : 'type' ,
'dfs' : 'technique' ,
'divide-and-conquer' : 'technique' ,
'doubly-linked-list' : 'ds' ,
'dp' : 'type' ,
'enumeration' : 'type' ,
'game-theory' : 'type' ,
'geometry' : 'type' ,
'graph' : 'ds' ,
'greedy' : 'technique' ,
'hash-table' : 'ds' ,
'hash-function' : 'technique' ,
'heap-priority-queue' : 'ds' ,
'iterator' : 'type' ,
'linked-list' : 'ds' ,
'math' : 'type' ,
'matrix' : 'ds' ,
'memoization' : 'technique' ,
'merge-sort' : 'technique' ,
'number-theory' : 'type' ,
'ordered-set' : 'type' ,
'prefix-sum' : 'technique' ,
'probability-and-statistics' : 'type' ,
'queue' : 'ds' ,
'quickselect' : 'technique' ,
'randomized' : 'type' ,
'recursion' : 'technique' ,
'rolling-hash' : 'type' ,
'shortest-path' : 'type' ,
'simulation' : 'type' ,
'sliding-window' : 'technique' ,
'sorting' : 'technique' ,
'stack' : 'ds' ,
'string' : 'ds' ,
'string-matching' : 'type' ,
'topological-sort' : 'technique' ,
'trie' : 'ds' ,
'two-pointers' : 'technique' ,
'union-find' : 'technique'  }

export const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'difficulty',
      headerName: 'Difficulty',
      width: 150,
      editable: true,
    },
    {
      field: 'rate',
      headerName: 'Rate',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'type',
      headerName: 'Type',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
    },
  ];

 export const arrayType = 
["*Array",
"*Backtracking",
"*Binary-Indexed-Tree",
"*Binary-Search",
"*Binary-Search-Tree",
"*Binary-Tree",
"*Bit-Manipulation",
"*Brainteaser",
"*Breadth-First-Search",
"*Bucket-Sort",
"*Combinatorics",
"*Concurrency",
"*Counting",
"*Counting-Sort",
"*Data-Stream",
"*Depth-First-Search",
"*Design",
"*Divide-and-Conquer",
"*Doubly-Linked-List",
"*Dynamic-Programming",
"*Enumeration",
"*Game-Theory",
"*Geometry",
"*Graph",
"*Greedy",
"*Hash-Function",
"*Hash-Table",
"*Heap-Priority-Queue",
"*Interactive",
"*Iterator",
"*Linked-List",
"*Math",
"*Matrix",
"*Memoization",
"*Merge-Sort",
"*Minimum-Spanning-Tree",
"*Monotonic-Queue",
"*Monotonic-Stack",
"*Number-Theory",
"*Ordered-Set",
"*Prefix-Sum",
"*Probability-and-Statistics",
"*Queue",
"*Quickselect",
"*Randomized",
"*Recursion",
"*Rolling-Hash",
"*Shortest-Path",
"*Simulation",
"*Sliding-Window",
"*Sorting",
"*Stack",
"*String",
"*String-Matching",
"*Strongly-Connected-Component",
"*Suffix-Array",
"*Topological-Sort",
"*Tree",
"*Trie",
"*Two-Pointers",
"*Union-Find"]