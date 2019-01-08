// Local path, route,  select, from, where, order 
const dataValidation = require("./Components/dataValidation");
module.exports = [
	{
		path: '/status',
		module: (req, res) => {
			res.send("ok");
		},
	},
	{
		path: '/Api/Posts',
		method: {
			get: {
				select: ['id','title','timestamp','content'],
				from: ['posts'],
				where: [],
				order: '', // asc, desc
				orderBy: [],
			},
			post: {
				table: 'posts',
				insert: ['title', 'timestamp', 'content'],
			},
			put: '*',
			delete: {
				table: 'posts',
				where: ['id','eq',':id'],
			},
		},
		table: {
			name: 'posts',
			columns: {
				id: {
					type: 'integer',
					autoIncrement: true,
				},
				title: {
					type: 'string',
				},
				timestamp: {
					type: 'bigint',
					validate: 'timestamp'
				},
				content: {
					type: 'string'
				},
			},
		},
	},
	{
		path: '/Api/RecentPosts',
		method: {
			get: {
				select: ['id','title'],
				from: ['posts'],
				where: [],
				order: '', // asc, desc
				orderBy: ['timestamp'],
			},
		},
		table: {
			name: 'posts',
			columns: {
				id: {
					type: 'integer',
					autoIncrement: true,
				},
				title: {
					type: 'string',
				},
				timestamp: {
					type: 'bigint',
					validate: 'timestamp'
				},
				content: {
					type: 'string'
				},
			},
		},
	},
];