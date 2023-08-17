import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company_name',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
        name: 'company_logo',
        title: 'Company Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
      }),
  ],
})
