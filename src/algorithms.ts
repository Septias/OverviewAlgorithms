interface Problem {
  title: string
  given?: string
  goal?: string
  lc: number
  solution?: string[]
  html?: string
}
interface Algorithm {
  title: string
  complexity?: string
  solves?: string[]
  function?: string[]
  html?: string
}

interface ProofTechnique {
  title: string
  steps?: string[]
  html?: string
}

export interface Data {
  problems: Problem[]
  algorithms: Algorithm[]
  proofTechnique: ProofTechnique[]
}

export const data: Data = {
  problems: [
    {
      title: 'Interval Scheduling',
      given: 'Intervals',
      goal: 'Pick as many as possible',
      lc: 2,
      solution: ['- Earliest Endtime First', ''],
    },
    {
      title: 'Weighted Intervals',
      given: 'Intervals with values',
      goal: 'Pick as many as possible while maximizing values',
      lc: 3,
      solution: [
        'Dynamic programm with',
        '$OPT(j, w) = \\max \\{ OPT(j-1 ,w), OPT(j-1, w - w_i) + w_j \\}$',
      ],

    },
    {
      title: 'Knapsack',
      given: 'Items with weight and value',
      goal: 'Pick as many items as possible and maximize value',
      lc: 3,
      solution: [
        '$OPT(j, w) = \\max \\{ OPT(j-1 ,w), OPT(j-1, w - w_i) + v_j\\}$',
      ],
    },
    {
      title: 'Segmentation',
      given: 'Points',
      goal: 'Put em into segments while minimizing segmentation cost',
      lc: 4,
      solution: [
        '$OPT(j) = \\underset{i}{\\min} OPT(i-1) + e_{ij}$',
      ],
    },
    {
      title: 'Sequence Comparison',
      given: 'Two strings',
      goal: 'Align them as good as possible',
      lc: 4,
      solution: [
        ' $\\min \\{OPT(i-1, j-1) + a_{ij}, OPT(i-1, j) + \\delta, OPT(i, j-1) + \\delta \\}$',
      ],
    },
    {
      title: 'Searching',
      given: 'Array of items',
      goal: 'Find one specific item',
      lc: 5,
      solution: ['Binary Search'],
    },
    {
      title: 'Skyline',
      given: 'Array of rects',
      goal: 'Build a skyline',
      lc: 5,
    },
    {
      title: 'Counting Inversions',
      given: 'Sequence of items',
      goal: 'Count the amount of inversion in the array',
      lc: 6,
      solution: [
        '- Do Merge Sort while counting',
        '- In the lowest comparison step, maybe increase inversion count',
        '- Merge two storted lists in O(n) and increase count whilest doing that',
        '- T(n) = 2T(n/2) + O(n) => O(n log n)',
      ],
    },
    {
      title: 'Fast Multiplication',
      given: 'two numbers',
      goal: 'multiply',
      lc: 7,
    },
    {
      title: 'Closest Points',
      given: 'set of points (x, y)',
      goal: 'Find the two closest points',
      lc: 7,
      solution: [
        '- Sort the points by x in O(n log n)',
        '- Find closest points in both halves',
        '- While merging check in delta-radius of split, if there is closer pair',
        '- this can only take O(n) operations',
        '- T(n) = 2T(n/2) + O(n) => O(n log n)',
      ],
    },
    {
      title: 'Undirected Graph Connectivity',
      given: 'Graph',
      goal: 'Find out if it is connected',
      lc: 8,
      solution: ['- Do BFS', 'If any node is not reached, it is not connected', 'O(m)'],
    },
    {
      title: 'Strong Connectivity in Directed Graphs',
      given: 'DiGraph',
      goal: 'Find out if it is strongly connected',
      solution: [
        '- Do BFS from s with graphs of both directions',
        '- If any node is not reached, it is not connected',
        '- O(m)',
      ],
      lc: 8,
    },
    {
      title: 'Graph Coloring',
      given: 'Graph',
      goal: 'Is graph k-colorable',
      solution: ['- only efficiently solvable for k = 2'],
      lc: 8,
    },
    {
      title: 'MST',
      given: 'Graph',
      goal: 'Find a minimal spanning tree',
      lc: 8,
      solution: ['Use Kruskals or Prims'],
    },
    {
      title: 'Detecting Directed Cycles',
      given: 'Graph',
      goal: 'Find cycle',
      lc: 9,
      solution: ['Use DAG algorithm and check if it terminates'],
    },
    {
      title: 'Topological Order',
      given: 'Graph',
      goal: 'Find topological order',
      lc: 9,
      solution: ['DAG algorithm'],
    },
    {
      title: 'Shortest Paths',
      given: 'Graph',
      goal: 'Find the longest possible path',
      lc: 9,
      solution: [
        '- DAG algorithm',
        '- $d(s, z) = min d(s, x) + l(x, z)$',
        '- minimum taken for all nodes on left',
      ],

    },
    {
      title: 'Longest Paths',
      given: 'Graph',
      goal: 'Find the longest possible path',
      lc: 9,
      solution: ['same as Shortest Paths but use max instead'],
    },
    {
      title: 'Clique',
      given: 'Graph',
      goal: 'Find vertices where all possible pairs are connected',
      lc: 10,
    },
    {
      title: 'Independet Set',
      given: 'Graph',
      goal: 'Find set of vertices which which are non-adjacent',
      lc: 10,
    },
    {
      title: 'Vertex Cover',
      given: 'Graph',
      goal: 'Find smallest possible set of vertices so all edges are saturated',
      lc: 10,
    },
    {
      title: 'SAT',
      given: 'Formular in CNF',
      goal: 'Find satisfying ...',
      lc: 11,
    },
    {
      title: '3SAT',
      given: 'Formular in CNF (max. three in each conj.)',
      goal: 'Find satisfying ...',
      lc: 11,
    },
    {
      title: 'Set Packing',
      given: 'Sets, list of items',
      goal: 'Find subset of sets so all items are covered',
      lc: 11,
    },
  ],
  algorithms: [
    {
      title: 'Binary Search',
      complexity: 'O(log n)',
      function: ['split input in half every step'],
    },
    {
      title: 'Merge Sort',
      complexity: 'O(nlog n)',
      function: [
        '- Split input in two halfs',
        '- Sort them',
        '- Merge sorted items in O(n)',
      ],
    },
    {
      title: 'Quick Sort',
      complexity: 'O(nlog n)',
      function: [
        '- Split input in two halfs',
        '- Sort them',
        '- Merge sorted items in O(n)',
      ],
    },
    {
      title: 'Selection and Median Finding',
      complexity: 'O(n)',
      function: [
        '- select random splitter',
        '- compare all elements and compute rank r',
        '- if r > k: throw out all element larger p',
        '- if r == k: solution found',
        '- if r > k: throw out all element smaller p; k = k-r',
        '- T(n) = T(n/2) + O(n) => O(n)',
      ],
    },
    {
      title: 'BFS',
      complexity: 'O(m)',
      function: ['- Start with any node', '- Always expand all children of layer i before going deeper'],
    },
    {
      title: 'DFS',
      complexity: 'O(m)',
      function: ['- Start with any node', '- Only expand one child in layer i and then go deeper'],
    },
    {
      title: 'Prims',
      complexity: 'O(m log m)',
      solves: ['MST'],
      function: [
        '- Start at any node',
        '- Recursively add the cheapest possible edge',
      ],
    },
    {
      title: 'Kruskarls',
      complexity: 'O(m log m)',
      solves: ['MST'],
      function: ['- Grow multiple trees simulatenously while adding global cheapest node to any tree without creating cycle', '- uses UnionFind'],
    },
    {
      title: 'DAGs',
      complexity: 'O(m log m)',
      solves: ['MST'],
      function: ['Recursively remove any node with zero incoming edges'],
    },
    {
      title: 'UnionFind',
      complexity: 'O(m log n)',
      function: [
        '- Sort edges in increasing cost O(m log n)',
        '- Create three arrays (indices, names, size of set)',
        '- Loop over all edges and adjust pointers and set-sizes',
        '- If no trees are connected, skip edge',
        '- returns MST',
      ],
    },
    {
      title: 'Interval Partitioning',
      complexity: 'O(n log n)',
      function: [
        'Sort items by start-time',
        'Always put the current interval x into the subset $X_i$ with the smallest possible index i',
      ],
    },
    {
      title: 'Space Efficient Sequence Comparison',
      complexity: 'O(nm)',
    },
    {
      title: 'Clustering with maximum spacing',
    },
    {
      title: 'All Connected components',
      complexity: 'O(m + n)',
    },
  ],
  proofTechnique: [
    {
      title: 'Stay Ahead Argument',
      steps: [
        '- Show that it\'s optimal at the start',
        '- show, that it never falls behind',
      ],
    },
    {
      title: 'Construction',
      steps: [
        '- Find a lower bound',
        '- Create an algorithm that always achieves that bound',
      ],
    },
    {
      title: 'Contradiction',
      steps: [
        '- Make a bad assumption',
        '- Show that this assumption can\'t hold under the given algorithm',
      ],
    },
    {
      title: 'Dynamic Programming',
      steps: [
        '- formulate goal what is max/minimized',
        '- start at the end of whatever sequence',
        '- Write down which options the alg has',
        '- Note down the base cases',
        '- Create iterative version which build a table',
      ],
    },
    {
      title: 'Divide & Conquer',
      steps: [
        '- Try to devide the problem some way',
        '- Find a way to merge the two subproblems',
        '- Define recursion end',
        '- Use master theorem to find out running time',
      ],
    },
  ],
}
