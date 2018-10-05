export default {
  id: 'embeddedMusic',
  label: 'Embedded Music',
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string'
    },
    {
      name: 'iframe',
      label: 'IFrame Code',
      widget: 'text'
    }
  ],
  pattern: /^<EmbeddedMusic\s+title="(.*)"\s+iframe={(.*)}\s+\/>/,
  fromBlock: regexMatch => ({
    title: regexMatch[1],
    iframe: regexMatch[2]
  }),
  toBlock: ({ title, iframe }) =>
    `<EmbeddedMusic title="${title || ''}" iframe={${iframe || ''}} />`,
  toPreview: () => `<div></div>` // will be overriden by MarkdownRenderer
}
