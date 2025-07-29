export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    },
    {
      name: 'material',
      title: 'Material',
      type: 'string'
    },
    {
      name: 'shape',
      title: 'Shape',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image'
    },
    {
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'basePrice',
      title: 'Base Price',
      type: 'object',
      fields: [
        {
          name: 'usd',
          title: 'USD Price',
          type: 'number'
        },
        {
          name: 'pkr',
          title: 'PKR Price',
          type: 'number'
        }
      ]
    },
    {
      name: 'weights',
      title: 'Weight Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'size',
              title: 'Size',
              type: 'string'
            },
            {
              name: 'weight',
              title: 'Weight',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'size',
              title: 'Size Reference',
              type: 'string'
            },
            {
              name: 'dimension',
              title: 'Dimension',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'packaging',
      title: 'Packaging',
      type: 'object',
      fields: [
        {
          name: 'pcsPerCarton',
          title: 'Pieces Per Carton',
          type: 'string'
        },
        {
          name: 'casesPerPallet',
          title: 'Cases Per Pallet',
          type: 'string'
        },
        {
          name: 'pcsPerContainer',
          title: 'Pieces Per Container',
          type: 'string'
        },
        {
          name: 'productBoxSizes',
          title: 'Product Box Sizes',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'size',
                  title: 'Size Reference',
                  type: 'string'
                },
                {
                  name: 'boxSize',
                  title: 'Box Size',
                  type: 'string'
                }
              ]
            }
          ]
        },
        {
          name: 'caseCartonSizes',
          title: 'Case Carton Sizes',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'size',
                  title: 'Size Reference',
                  type: 'string'
                },
                {
                  name: 'caseSize',
                  title: 'Case Size',
                  type: 'string'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}