import {NumberRule, defineField, defineType} from 'sanity'

export default defineType({
  name: 'technologies',
  title: 'Technologies',
  type: 'document',
  fields: [
    defineField({
        name: 'icon_image',
        title: 'Icon Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    defineField({
      name: 'name',
      title: 'Technology Name',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type of tool',
      type: 'string',
    }),
    
      defineField({
        name: 'skill_level',
        title: 'Skill Level (1-10)',
        type: 'number',
        validation: (rule: NumberRule) => rule.min(1).max(10),
      }),
  ],
})
