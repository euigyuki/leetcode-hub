// sidebars.js

const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // corresponds to intro.md
    },
    {
      type: 'category',
      label: 'Leetcode Patterns',
      items: [
        // 'patterns/arrays-hashing',
        // 'patterns/two-pointers',
        // 'patterns/sliding-window',
        // 'patterns/stack',
        // 'patterns/binary-search',
        // 'patterns/tree-traversal',
        // 'patterns/graph',
        'leetcode_patterns/dynamic-programming',
        // 'patterns/backtracking',
        // 'patterns/greedy',
        // 'patterns/misc',
      ],
    },
    {
      type: 'category',
      label: 'System Design',
      items: [
        'system_design/system_design',
      ],
    },
    {
      type: 'category',
      label: 'Machine Learning',
      items: [
        'machine_learning/intro',
       
      ],
    },
  ],
};

export default sidebars;
