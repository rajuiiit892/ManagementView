export const data=[
    {
        id: 1,
        page: 'marketplace offers',
        program: 'summary',
        type: 'notices',
        title: 'Title of the information',
         // imageUrl: require("./sampleImage.png"),
        description: 'The maximum latency between customer purchasing the offer and it being reported here is 48 hours.',
        learnMoreLink: 'https://harmonyhub.azurewebsites.net/',
        showFeedBack: true,
        expired: true
    },
    {
        id: 2,
        page: 'marketplace offers',
        program: 'orders',
        type: 'announcements',
        title: 'Customer experience update',
         // imageUrl: '',
        description: 'Get in touch with customers often for ensuring their experience is seamless.',
        learnMoreLink: 'https://harmonyhub.azurewebsites.net/',
        showFeedBack: false,
    },
    {
        id: 3,
        page: 'marketplace offers',
        program: 'summary',
        type: 'recommendations',
        title: 'Title of the information',
         // imageUrl: '',
         
        learnMoreLink: 'https://harmonyhub.azurewebsites.net/',
        showFeedBack: false,
    },
    {
        id: 4,
        page: 'membership',
        program: 'products',
        type: 'insights',
        tittle: 'Reach your customers',
         // imageUrl: require("./sampleImage.png"),
         
        learnMoreLink: 'https://harmonyhub.azurewebsites.net/',
        showFeedBack: false,
    },
    {
        id: 5,
        page: 'membership',
        program: 'customer',
        type: 'announcements',
        title: 'Title of the information',
         // imageUrl: '',
         
        learnMoreLink: 'https://harmonyhub.azurewebsites.net/',
        showFeedBack: false,
    },
    {
        id: 6,
        page: 'referrals',
        program: 'Leads',
        type: "what's new",
        tittle: 'Reach your customers',
         // imageUrl: '',
        description: 'Get in touch with customers often for ensuring their experience is seamless.',
        learnMoreLink: 'https://harmonyhub.azurewebsites.net/',
        showFeedBack: true,
    },
    {
        id: 7,
        page: 'referrals',
        program: 'summary',
        type: 'announcements',
        title: 'Customer experience update',
         // imageUrl: '',
        description: 'Get in touch with customers often for ensuring their experience is seamless.',
        learnMoreLink: 'https://harmonyhub.azurewebsites.net/',
        showFeedBack: false,
    },
    {
        id: 8,
        page: 'marketplace offers',
        program: 'orders',
        type: "what's new",
        tittle: 'Reach your customers',
         // imageUrl: '',
         
        learnMoreLink: 'https://harmonyhub.azurewebsites.net/',
        showFeedBack: false,
    },
];

export const dropdownList : {
    [key: string]: string[]
} = {
        'membership': [
            'summary', 'customers', 'resellers', 'proucts', 'organization skills', 'benefits'
        ],
        'marketplace offers': [
            'summary', 'orders', 'usage', 'customers', 'lisencing'
        ],
        'referrals': [
            'summary', 'leas', 'co-sell opportunities'
        ]
};

export const itemTypes = [
    "what's new", "announcements", "recommendations", "notices", "insights"
];

export const ContentPanelData = {
        title: 'Title 1',
        description: 'Description 1',
        hyperlink: true,
        url: 'Dummy URL',
        text: 'Dummy hyperlink',
        media: true,
        imageUrl: '',
        expiry: true,
        expiryDate: '02-04-2022'
    }