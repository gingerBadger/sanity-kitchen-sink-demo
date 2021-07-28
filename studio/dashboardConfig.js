export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61018093a5da7134f5a6a3ad',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-demo-studio-88wzx3qd',
                  apiId: '842ae8fb-e982-44da-8eaf-995548e2226a'
                },
                {
                  buildHookId: '61018093f455f33164f2759d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-demo-web-re71nuo8',
                  apiId: '8acf1a0f-3eb3-406a-b29b-dd45bb084183'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gingerBadger/sanity-kitchen-sink-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-demo-web-re71nuo8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
