import { categories } from 'myUtils/constants'

const isProd = process.env.NODE_ENV === 'production'
const saveFolder = isProd ? 'cms-content' : 'cms-dev-content'

export default {
  backend: {
    name: 'git-gateway',
    branch: isProd ? 'master' : process.env.REACT_APP_CMS_BACKEND_BRANCH
  },
  media_folder: `public/${saveFolder}/uploads`,
  public_folder: `${saveFolder}/uploads`,

  /* Collections */
  collections: [
    {
      name: 'articles',
      label: 'Article',
      description: 'An article about music',
      folder: `public/${saveFolder}/articles`,
      slug: '{{year}}{{month}}{{day}}_{{slug}}',
      create: true,
      format: 'json',
      fields: [
        {
          name: 'publicationDate',
          label: 'Publication Date',
          widget: 'date',
          format: 'MMM DD, YYYY'
        },
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
          tagname: 'h1'
        },
        {
          name: 'mainImage',
          label: 'Main Image',
          widget: 'image'
        },
        {
          name: 'category',
          label: 'Category',
          widget: 'select',
          options: categories.map(category => (
            {
              value: category.key,
              label: category.name
            }
          ))
        },
        {
          name: 'summary',
          label: 'Summary',
          widget: 'text160Limit'
        },
        {
          name: 'body',
          label: 'Body',
          widget: 'markdown'
        }
      ]
    },
    {
      name: 'pages',
      label: 'Page',
      description: 'The unique pages',
      delete: false,
      format: 'json',
      files: [
        {
          name: 'about',
          label: 'About Page',
          file: `public/${saveFolder}/pages/about.json`,
          fields: [
            {
              name: 'mainImage',
              label: 'Main Image',
              widget: 'image'
            },
            {
              name: 'body',
              label: 'Body',
              widget: 'markdown'
            }
          ]
        }
      ]
    }
  ]
}
