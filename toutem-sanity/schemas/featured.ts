export default {
  name: 'featured',
  title: 'Featured',
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
      type: 'text',
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
