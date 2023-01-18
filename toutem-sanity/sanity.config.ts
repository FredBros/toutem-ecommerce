//@ts-ignore
import {defineConfig} from 'sanity'
//@ts-ignore
import {deskTool} from 'sanity/desk'
//@ts-ignore
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'toutem-sanity',

  projectId: 'h4q4mxsa',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
