export default {
  name: 'categoriesSection',
  title: 'Categories Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      isUnique: true,
      options: {
        list: [
          {title: 'oil', value: 'oil'},
          {title: 'cosmetic', value: 'cosmetic'},
          {title: 'diffuser', value: 'diffuser'},
          {title: 'soap', value: 'soap'},
          {title: 'pack', value: 'pack'},
        ],
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}