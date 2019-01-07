import Posts from './Components/Posts';
import NewPost from './Components/NewPost';

const routes = 
[
	/*{
   	 	path: '',
		alias: 'posts', // Future implementation
	    component: Posts,
	},*/
	{
	    path: '/',
	    component: Posts,
	    exact: true,
	    default: 
    	{
			title: 'No Posts',
			content: `There currently aren't any posts to display.`,
	    }
	},
	{
	    path: 'newpost',
	    component: NewPost,
	    routeProps: {
	    	header: 'New Post',
	    	popupHeader: 'Edit Post',
			dataRoute: 'http://127.0.0.1:5000/Api/Posts',
	    	form: {
	    		title: {
	    			Tag: 'input',
	    			props: {
		    			type: 'text',
	    				value: 'Post Title',
	    			},
	    		},
	    		timestamp: {
	    			Tag: 'input',
	    			props: {
		    			type: 'text',
	    				value: 'Date',
	    			},
	    		},
	    		content: {
	    			Tag: 'textarea',
	    			props: {
		    			type: 'text',
	    				value: 'Content',
	    			},
	    		},
	    	},
		},
	},
	{ // No 'path' is set because it is a catch all
		component: Posts,
	    default: 
    	{
			title: 'Error 404',
			content: `The page cannot be found`,
	    }
	},
];
export default routes;