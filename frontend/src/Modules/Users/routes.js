//import Posts from './Posts';
//import Post from './Components/Post';
import NewUser from './NewUser';
//import EditPost from './EditPost';
import server from './../../server';

const posts_routes = [
/*
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
	    },
	},*/
	{
	    path: 'User/new',
	    component: NewUser,
		dataRoute: `${server}/User/new`,
	    routeProps: {
	    	header: 'Registration',
	    	form: {
	    		firstName: {
	    			Tag: 'input',
	    			props: {
		    			type: 'text',
	    				value: 'First Name',
	    			},
	    		},
	    		lastName: {
	    			Tag: 'input',
	    			props: {
		    			type: 'text',
	    				value: 'Last Name',
	    			},
	    		},
	    		alias: {
	    			Tag: 'input',
	    			props: {
		    			type: 'text',
	    				value: 'Alias',
	    			},
	    		},
	    		email: {
	    			Tag: 'input',
	    			props: {
		    			type: 'text',
	    				value: 'Email Address',
	    			},
	    		},
	    		password: {
	    			Tag: 'input',
	    			props: {
		    			type: 'password',
	    				value: 'Password',
	    			},
	    		},
	    	},
		},
	},/*
	{
	    path: 'editpost',
	    component: EditPost,
		dataRoute: `${server}/Post/:id/edit`,
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
	},*/
]
export default posts_routes;
