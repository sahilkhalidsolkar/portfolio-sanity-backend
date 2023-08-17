import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'showCaseImg1',
      title: 'Show Case Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'showCaseImg2',
      title: 'Show Case Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'string',
    }),
    defineField({
      name: 'short_desc',
      title: 'short description',
      type: 'text',
    }),
    defineField({
      name: 'linkedIn_url',
      title: 'LinkedIn URL',
      type: 'string',
    }),
    defineField({
      name: 'insta_url',
      title: 'Instagram URL',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp_url',
      title: 'Whatsapp URL',
      type: 'string',
    }),
    defineField({
      name: 'mail_url',
      title: 'Mail URL',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
