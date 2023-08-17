import {defineField, defineType} from 'sanity'
import technologies from './technologies'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'about_me',
      title: 'About me',
      type: 'text',
    }),
    defineField({
      name: 'resume_url',
      title: 'Resume URL (google drive file link)',
      type: 'string',
    }),
    defineField({
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of:[{
            type: 'reference',
            to: { type: 'technologies' },
          },]
      }),
    
      
  ],
})
