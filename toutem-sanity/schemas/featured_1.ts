export default {
  name: 'featured_1',
  title: 'Featured_1',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'ButtonLink',
      type: 'string',
    },
  ],
}