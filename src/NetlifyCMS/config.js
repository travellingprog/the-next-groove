export default {
  backend: {
    name: 'git-gateway',
    branch: 'netlify'
  },
  media_folder: 'public/images/uploads',
  public_folder: '/images/uploads',

  /* Collections */
  collections: [
    {
      name: 'posts',
      label: 'Post',
      description: 'A post about music',
      folder: 'public/content/posts',
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
      create: true,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          tagname: 'h1'
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown'
        }
      ]
    }
  ]
}
