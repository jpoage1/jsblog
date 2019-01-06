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
				table: 'users',
				insert: ['nickname', 'firstname', 'lastname'],
			},
			put: '*',
			delete: {
				table: 'users',
				where: ['id','eq',':id'],
			},
		},
		table: {
			name: 'users',
			columns: {
				id: {
					type: 'integer',
					autoIncrement: true,
				},
				nickName: {
					type: 'string'
				},
				firstName: {
					type: 'string'
				},
				lastName: {
					type: 'string'
				},
			},
		},
		formDefaults: {
			nickname: 'Enter a nick name',
		},
	},
];