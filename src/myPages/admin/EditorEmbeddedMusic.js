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
  pattern: /^<EmbeddedMusic\s+title="(\w)"\s+iframe={`(.*)`}\s+\/>/,
  fromBlock: regexMatch => ({
    title: regexMatch[1],
    iframe: regexMatch[2] && regexMatch[2].replace(/&#96;/g, '`').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  }),
  toBlock: ({ title, iframe }) =>
    `<EmbeddedMusic title="${title}" iframe={\`${iframe ? iframe.replace(/`/g, '&#96;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : ''}\`} />`,
  toPreview: () => `<div></div>` // will be overriden by MarkdownRenderer
}
