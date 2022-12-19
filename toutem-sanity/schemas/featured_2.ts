export default {
  name: 'featured_2',
  title: 'Featured_2',
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
