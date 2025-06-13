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
        'leetcode_patterns/dynamic-programming',
        'leetcode_patterns/leetcode150',
       
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
