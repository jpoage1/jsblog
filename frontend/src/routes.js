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
	    path: '',
	    component: Posts,
	    exact: true,
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
	    			label: 'title',
	    		},
	    		date: {
	    			Tag: 'input',
	    			props: {
		    			type: 'text',
	    				value: 'Date',
	    			},
	    			label: 'date',
	    		},
	    		content: {
	    			Tag: 'textarea',
	    			props: {
		    			type: 'text',
	    				value: 'Content',
	    			},
	    			label: 'content',
	    		},
	    	},
		},
	},
];
export default routes;