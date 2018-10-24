export default {
  id: 'specialText',
  label: 'Special Text',
  fields: [
    {
      name: 'align',
      label: 'Align',
      widget: 'select',
      options: [
        { label: 'Left', value: 'LEFT' },
        { label: 'Center', value: 'CENTER' },
        { label: 'Right', value: 'RIGHT' }
      ]
    },
    {
      name: 'size',
      label: 'Text Size',
      widget: 'select',
      options: [
        { label: 'Normal', value: 'NORMAL' },
        { label: 'Small', value: 'SMALL' },
        { label: 'Smaller', value: 'SMALLER' },
        { label: 'Smallest', value: 'SMALLEST' }
      ],
      hint: 'These settings will affect the next paragraph'
    }
  ],
  pattern: /^<SpecialText\s+align="([A-Z]*)"\s+size="([A-Z]*)"\s+\/>/,
  fromBlock: regexMatch => ({
    align: regexMatch[1],
    size: regexMatch[2]
  }),
  toBlock: ({ align, size }) => `<SpecialText align="${align}" size="${size}" />`,
  toPreview: () => `<div></div>` // will be overriden by MarkdownRenderer
}
