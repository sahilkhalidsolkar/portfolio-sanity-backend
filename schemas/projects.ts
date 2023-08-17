import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'project_image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'project_name',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'live_url',
      title: 'Live URL',
      type: 'string',
    }),
    defineField({
      name: 'github_url',
      title: 'Github URL',
      type: 'string',
    }),
    defineField({
      name: 'isDemoCredentials',
      title: 'Demo Credentials',
      type: 'boolean',
    }),
    defineField({
      name: 'demo_email',
      title: 'Demo Email',
      type: 'string',
    }),
    defineField({
      name: 'demo_password',
      title: 'Demo Password',
      type: 'string',
    }),
    defineField({
      name: 'isVideo',
      title: 'Video URL available',
      type: 'boolean',
    }),
    defineField({
      name: 'video_url',
      title: 'Video URL',
      type: 'string',
    }),
  ],
})
