export default {
  name: 'product',
  title: 'Product',
  type: 'document',

  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },

    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'details',
      title: 'Details',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      validation: (Rule: {required: () => any}) => Rule.required(),
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Oil', value: 'oil'},
          {title: 'Cosmetic', value: 'cosmetic'},
          {title: 'Diffuser', value: 'diffuser'},
          {title: 'Soap', value: 'soap'},
          {title: 'Pack', value: 'pack'},
        ],
      },
    },
    {
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'soldCount',
      title: 'Sold Count',
      type: 'number',
      initialValue: 0,
      readOnly: true,
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
