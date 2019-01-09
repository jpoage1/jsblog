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
		path: '/Posts',
		method: {
			get: {
				select: ['id','title','author','timestamp','content'],
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
				author: {
					type: 'integer',
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
		path: '/Post/:id',
		method: {
			get: {
				select: ['id','title','author','timestamp','content'],
				from: ['posts'],
				where: [['id','eq',':params.id']], // need to do data validation to make sure there is an array nested inside of an array
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
		path: '/Posts/Sidebar',
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