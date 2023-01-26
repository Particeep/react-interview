export interface Movie {
	id: string
	title: string
	description?: string
	image?: string
	category: string
	likes: number
	dislikes: number
}

const movies: Movie[] = [
	{
		id: '1',
		title: 'Oceans 8',
		category: 'Comedy',
		likes: 4,
		description:
			'Debbie Ocean is released from jail after serving a prison sentence. She assembles a special crew of seven women to steal a diamond necklace, worth 150 million dollars, from the Met Gala.',
		image: 'https://is2-ssl.mzstatic.com/image/thumb/Features114/v4/89/78/b0/8978b04b-ba81-d799-f98a-7180ed63436c/mzl.lduqwvfj.png/1200x675mf.jpg',
		dislikes: 1,
	},
	{
		id: '2',
		title: 'Midnight Sun',
		category: 'Comedy',
		description:
			'Sheltered since childhood, 17-year-old Katie Price lives with a life-threatening sensitivity to sunlight. Her world opens up after dark when she ventures out to play her guitar for random travelers.',
		image: 'https://i.pinimg.com/originals/75/5a/fa/755afa948a73119cf37e3f0e099f7e39.jpg',
		likes: 2,
		dislikes: 0,
	},
	{
		id: '3',
		title: 'Les indestructibles 2',
		description:
			'Entrusted with a task to restore public faith in superheroes, Helen sets off on a mission to catch a supervillain, while Bob faces the challenges of stay-at-home parenting. Enjoy the family friendly blockbuster!',
		image: 'https://www.nme.com/wp-content/uploads/2017/07/fun-facts-about-the-incredibles.jpg',
		category: 'Animation',
		likes: 3,
		dislikes: 1,
	},
	{
		id: '4',
		title: 'Sans un bruit',
		category: 'Thriller',
		description:
			'A family struggles for survival in a world where most humans have been killed by blind but noise-sensitive creatures. They are forced to communicate in sign language to keep the creatures at bay.',
		image: 'https://images.squarespace-cdn.com/content/v1/59d7e2c7e45a7c0ce235bb55/1621346232454-AEM6C7C0607XZI39UGS1/Film-Review-A-Quiet-Place-Part-II.jpg',
		likes: 6,
		dislikes: 6,
	},
	{
		id: '5',
		title: 'Creed II',
		category: 'Drame',
		description:
			"In 1985, Ivan Drago killed Apollo Creed in a tragic boxing match. Under the guidance of his trainer Rocky, Apollo's son Adonis confronts Drago's son in an ultimate showdown. A tale of vengeance awaits!",
		image: 'https://i2-prod.mirror.co.uk/incoming/article13664832.ece/ALTERNATES/s1200b/0_Creed-2.jpg',
		likes: 16,
		dislikes: 2,
	},
	{
		id: '6',
		title: 'Pulp Fiction',
		category: 'Thriller',
		description:
			"In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals. One of the best movies of all time!",
		image: 'https://images-prod.dazeddigital.com/1800/azure/dazed-prod/1140/5/1145937.jpg',
		likes: 11,
		dislikes: 3,
	},
	{
		id: '7',
		title: 'Pulp Fiction',
		category: 'Thriller',
		description:
			"In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals. One of the best movies of all time!",
		image: 'https://media.newyorker.com/photos/5ad11cf551fedf7258aa3c06/master/w_2560%2Cc_limit/941010_ra504.jpg',
		likes: 12333,
		dislikes: 32,
	},
	{
		id: '8',
		title: 'Seven',
		category: 'Thriller',
		description:
			'A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal. Will they succeed?',
		image: 'https://filmschoolrejects.com/wp-content/uploads/2020/09/se7en-brad-pitt-morgan-freeman.jpg',
		likes: 2,
		dislikes: 1,
	},
	{
		id: '9',
		title: 'Inception',
		category: 'Thriller',
		description:
			"Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son. A visually stunning movie!",
		image: 'https://64.media.tumblr.com/tumblr_mbgpa7nxxm1rgvhcro1_1280.jpg',
		likes: 2,
		dislikes: 1,
	},
	{
		id: '10',
		title: 'Gone Girl',
		category: 'Thriller',
		description:
			'Nick Dunne discovers that the entire media focus has shifted on him when his wife, Amy Dunne, mysteriously disappears on the day of their fifth wedding anniversary. A psychological thriller!',
		image: 'https://images.immediate.co.uk/production/volatile/sites/3/2020/07/Gone-Girl-67a9235-scaled.jpg',
		likes: 22,
		dislikes: 12,
	},
]

export const movies$ = new Promise<Movie[]>((resolve, reject) =>
	setTimeout(resolve, 100, movies)
)
