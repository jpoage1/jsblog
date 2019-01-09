import posts_routes from '../Posts/routes';
import users_routes from '../Users/routes';

const routes = 
[
	...users_routes,
	...posts_routes,
	/* Catch all will be added back later
	{ // No 'path' is set because it is a catch all
		component: Posts,
	    default: 
    	{
			title: 'Error 404',
			content: `The page cannot be found`,
	    }
	},*/
];
export default routes;