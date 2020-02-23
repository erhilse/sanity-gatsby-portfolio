export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5e52bba68bfad710696095f6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2j3siujm',
                  apiId: '239b9d5e-e8f6-4a14-acfa-e0887c2638d3'
                },
                {
                  buildHookId: '5e52bba7ee454f0780f92e8c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wocircwc',
                  apiId: '8f8780bd-cbf8-40dc-bf46-297bf337365a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erhilse/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wocircwc.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
