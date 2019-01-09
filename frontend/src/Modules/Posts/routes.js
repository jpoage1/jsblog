import Posts from './Posts';
import Post from './Post';
import NewPost from './NewPost';
import EditPost from './EditPost';
import server from './../../server';

const posts_routes = [
	{
	    path: 'Posts',
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
	    path: 'Post/new',
	    component: NewPost,
		dataRoute: `${server}/Post/new`,
		exact: true,
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
	{
	    path: 'Post/:id/edit',
	    component: EditPost,
		dataRoute: `${server}/Post/:id/edit`,
		exact: true,
	    routeProps: {
	    	header: 'Edit Post',
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
	{
	    path: 'Post/:id',
	    component: Post,
		dataRoute: `${server}/Post/:id`,
		exact: true,
	    default: 
    	{
			title: 'Sorry',
			content: `You have either reached this page in error, or the article you are attempting to read has been deleted.`,
	    },
	},
]
export default posts_routes;
