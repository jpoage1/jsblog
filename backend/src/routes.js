// Local path, route,  select, from, where, order 
module.exports = [
	{
		path: '/Api/Posts',
		method: {
			get: {
				select: ['id','title','date','content'],
				from: ['posts'],
				where: [],
				order: '', // asc, desc
				orderBy: [],
			},
			post: {
				table: 'posts',
				insert: ['title', 'date', 'content'],
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
					type: 'string'
				},
				date: {
					type: 'date'
				},
				content: {
					type: 'string'
				},
			},
		},
		formDefaults: {
			nickname: 'Enter a nick name',
		},
	},
];