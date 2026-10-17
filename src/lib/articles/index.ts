import Test from '#lib/articles/initial/Test.svelte';

export const categories = ['initial'];

export type Article = {
	id: string;
	name: string;
	category: string;
	english: __sveltets_2_IsomorphicComponent<any>;
};

export const articles: Article[] = [
	{
		id: 'test',
		name: 'Test',
		category: 'Initial',
		english: Test
	}
];
