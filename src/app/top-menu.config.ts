const routerConfig: Routes[
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
	},
	{
		path: 'programming',
		redirectTo: '/prog'
	},
	{
		path: 'reviews',
		redirectTo: '/reviews'
	},
	{
		path: 'equipment',
		redirectTo: '/equip'
	}
];