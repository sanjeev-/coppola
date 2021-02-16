module.exports = {
  pagePerSection: true,
  components: 'src/components/**/[A-Z]*.tsx',
  usageMode: 'expand',
  title: 'Coppola React Component Library',
  sections: [
    {
      name: 'Typography',
      components: [
        'src/components/Text/[A-Z]*.tsx',
        'src/components/Link/[A-Z]*.tsx'
      ],
      sectionDepth: 1
    },
    {
      name: 'UI',
      components: ['src/components/Flex/[A-Z]*.tsx'],
      sectionDepth: 1
    }
  ]
}
