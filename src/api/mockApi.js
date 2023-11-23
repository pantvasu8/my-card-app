const mockApi = {
    fetchData: async (page, perPage) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    data: [
                        {
                            card_id: 1,
                            name: 'Mixmax',
                            budget_name: 'Software subscription',
                            owner_id: 1,
                            spent: {
                                value: 100,
                                currency: 'SGD',
                            },
                            available_to_spend: {
                                value: 900,
                                currency: 'SGD',
                            },
                            card_type: 'burner',
                            expiry: '9 Feb',
                            limit: 199,
                            status: 'active',
                            frequency: 'monthly'
                        },
                        {
                            card_id: 2,
                            name: 'Mixmax',
                            budget_name: 'Software subscription',
                            owner_id: 2,
                            spent: {
                                value: 500,
                                currency: 'SGD',
                            },
                            available_to_spend: {
                                value: 100,
                                currency: 'SGD',
                            },
                            card_type: 'burner',
                            expiry: '19 Nov',
                            limit: 699,
                            status: 'active',
                            frequency: 'monthly'
                        },
                        {
                            card_id: 3,
                            name: 'Quickbooks',
                            budget_name: 'Software subscription',
                            owner_id: 2,
                            spent: {
                                value: 150,
                                currency: 'SGD',
                            },
                            available_to_spend: {
                                value: 250,
                                currency: 'SGD',
                            },
                            card_type: 'subscription',
                            expiry: '_',
                            limit: 499,
                            status: 'active',
                            frequency: 'monthly'
                        },
                        {
                            card_id: 4,
                            name: 'Quickbooks',
                            budget_name: 'Software subscription',
                            owner_id: 1,
                            spent: {
                                value: 350,
                                currency: 'SGD',
                            },
                            available_to_spend: {
                                value: 650,
                                currency: 'SGD',
                            },
                            card_type: 'subscription',
                            expiry: '_',
                            limit: 999,
                            status: 'active',
                            frequency: 'monthly'
                        },
                        {
                            card_id: 5,
                            name: 'LinkedIn',
                            budget_name: 'Memberfive',
                            owner_id: 1,
                            spent: {
                                value: 100,
                                currency: 'SGD',
                            },
                            available_to_spend: {
                                value: 450,
                                currency: 'SGD',
                            },
                            card_type: 'burner',
                            expiry: '21 July',
                            limit: 350,
                            status: 'active',
                            frequency: 'monthly'
                        },
                        {
                            card_id: 6,
                            name: 'LinkedIn',
                            budget_name: 'Memberfive',
                            owner_id: 2,
                            spent: {
                                value: 600,
                                currency: 'SGD',
                            },
                            available_to_spend: {
                                value: 200,
                                currency: 'SGD',
                            },
                            card_type: 'subscription',
                            expiry: '_',
                            limit: 750,
                            status: 'active',
                            frequency: 'monthly'
                        },
                        {
                            card_id: 7,
                            name: 'AWS Card',
                            budget_name: 'Software subscription',
                            owner_id: 2,
                            spent: {
                                value: 150,
                                currency: 'SGD',
                            },
                            available_to_spend: {
                                value: 850,
                                currency: 'SGD',
                            },
                            card_type: 'subscription',
                            expiry: '_',
                            limit: 100,
                            status: 'active',
                            frequency: 'monthly'
                        },
                        {
                            card_id: 8,
                            name: 'AWS Card',
                            budget_name: 'Software subscription',
                            owner_id: 1,
                            spent: {
                                value: 150,
                                currency: 'SGD',
                            },
                            available_to_spend: {
                                value: 250,
                                currency: 'SGD',
                            },
                            card_type: 'burner',
                            expiry: '20 Aug',
                            limit: 300,
                            status: 'active',
                            frequency: 'monthly'
                        },
                        {
                            card_id: 9,
                            name: 'Offsite event',
                            budget_name: 'Software subscription',
                            owner_id: 1,
                            spent: {
                                value: 150,
                                currency: 'SGD',
                            },
                            available_to_spend: {
                                value: 550,
                                currency: 'SGD',
                            },
                            card_type: 'subscription',
                            expiry: '_',
                            limit: 500,
                            status: 'active',
                            frequency: 'monthly'
                        },
                        {
                            card_id: 10,
                            name: 'Travel Allowance',
                            budget_name: 'Software subscription',
                            owner_id: 2,
                            spent: {
                                value: 950,
                                currency: 'SGD',
                            },
                            available_to_spend: {
                                value: 150,
                                currency: 'SGD',
                            },
                            card_type: 'burner',
                            expiry: '25 Nov',
                            limit: 980,
                            status: 'active',
                            frequency: 'monthly'
                        },

                    ],
                    page: 1,
                    per_page: perPage,
                    total: 100,
                });
            }, 500);
        });
    },
};

export default mockApi;
