const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Authentication',
      link: {
        type: 'doc',
        id: 'authentication/authentication',
      },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Mobile Authenticators",
          link: {
            type: 'doc',
            id: 'authentication/mobile-authenticators/mobile-authenticators',
          },
          items: [
            'authentication/mobile-authenticators/blockid-mobile-app/blockid-mobile-application-user-guide',
            'authentication/mobile-authenticators/blockid-mobile-app/release-notes',   
            {
              type: "category",
              label: "BlockID Mobile Application",
              link: {
                type: 'doc',
                id: 'authentication/mobile-authenticators/blockid-mobile-app/blockid-mobile-app-level-3',
              },
          },
        {
          type: "category",
          label: "FIDO Authenticators",
          link: {
            type: 'doc',
            id: 'authentication/fido-authenticators/fido-authenticators',
          },
          items: [
            'authentication/fido-authenticators/webauthn',
            'authentication/fido-authenticators/release-notes',
            {
              type: "category",
              label: "FIDO Authenticators",
              link: {
                type: 'doc',
                id: 'authentication/fido-authenticators/fido-authenticators/fido-authenticators-level-3',
              },
              items: [
                'authentication/fido-authenticators/webauthn',
              ],
            },
        },
        {
          type: "category",
          label: "AdminX",
          link: {
            type: 'doc',
            id: 'adminx/adminx',
          },
          collapsed: false,
          items: [
            {
              type: "category",
              label: "AdminX",
              items: [
    
                ] 
          
          ],
         },
       
        }
          ], 
        },
       
      },
    {
      type: "category",
      label: "AdminX",
      link: {
        type: 'doc',
        id: 'adminx/adminx',
      },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "AdminX",
          items: [

            ]

        ]
   
   
      }
       
        
    },
    {
      type: "category",
      label: "Mobile Authenticators",
      items: [
        {
          type: "category",
          label: "Mobile Authenticators"
          items: [
            "index",
            "index",         
          ],
        },
      ],
      items: [
        "mobile-sdk/mobile-sdk-overview",
        "mobile-sdk/mobile-sdk-api-reference",
        {
          type: "category",
          label: "Integration Guide",
          items: [
            "mobile-sdk/integration-guide/mobile-sdk-integration-guide-ios",
            "mobile-sdk/integration-guide/mobile-sdk-integration-guide-android",
          ],
        },
      ],
    },

  ],
};    