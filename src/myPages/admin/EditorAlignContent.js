export default {
  id: 'alignContent',
  label: 'Align Content',
  fields: [
    {
      name: 'align',
      label: 'Align Content Below',
      widget: 'select',
      options: [
        { label: 'Left', value: 'LEFT' },
        { label: 'Center', value: 'CENTER' },
        { label: 'Right', value: 'RIGHT' }
      ]
    }
  ],
  pattern: /^<AlignContent\s+align="([A-Z]+)"\s+\/>/,
  fromBlock: regexMatch => ({
    align: regexMatch[1]
  }),
  toBlock: fields => `<AlignContent align="${fields.align}" />`,
  toPreview: () => `<div></div>` // will be overriden by MarkdownRenderer
}
