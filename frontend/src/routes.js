import Posts from './Components/Posts';
//import Post from './Components/Post';
import NewPost from './Components/NewPost';
import server from './server';

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
		dataRoute: `${server}/Posts`,
	    default: 
    	{
			title: 'No Posts',
			content: `There currently aren't any posts to display.`,
	    }
	},
	{
	    path: 'Post/:id',
	    component: Posts,
		dataRoute: `${server}`,
	    default: 
    	{
			title: 'Sorry',
			content: `You have either reached this page in error, or the article you are attempting to read has been deleted.`,
	    }
	},
	{
	    path: 'newpost',
	    component: NewPost,
		dataRoute: `${server}/Posts`,
	    routeProps: {
	    	header: 'New Post',
	    	popupHeader: 'Edit Post',
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