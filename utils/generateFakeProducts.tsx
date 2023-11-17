import { faker } from "@faker-js/faker";

const TOTAL_PAGES = 5;

const baseProducts = [
	{
		name: "Caneca de cerâmica rústica",
		description: faker.lorem.paragraph(),
		image_url:
			"https://raw.githubusercontent.com/samueldbferreira/capputeeno-cdn/main/uploads/Caneca%2001.jpg",
		category: "mugs",
	},
	{
		name: "Camiseta not today.",
		description: faker.lorem.paragraph(),
		image_url:
			"https://raw.githubusercontent.com/samueldbferreira/capputeeno-cdn/main/uploads/Camiseta%2001.jpg",
		category: "t-shirts",
	},
	{
		name: "Caneca Black Ring",
		description: faker.lorem.paragraph(),
		image_url:
			"https://raw.githubusercontent.com/samueldbferreira/capputeeno-cdn/main/uploads/Caneca%2006.jpg",
		category: "mugs",
	},
	{
		name: "Camiseta Broken Saints",
		description: faker.lorem.paragraph(),
		image_url:
			"https://raw.githubusercontent.com/samueldbferreira/capputeeno-cdn/main/uploads/Camiseta%2005.jpg",
		category: "t-shirts",
	},
	{
		name: "Camiseta Outcast",
		description: faker.lorem.paragraph(),
		image_url:
			"https://raw.githubusercontent.com/samueldbferreira/capputeeno-cdn/main/uploads/Camiseta%2004.jpg",
		category: "t-shirts",
	},
	{
		name: "Caneca The Grounds",
		description: faker.lorem.paragraph(),
		image_url:
			"https://raw.githubusercontent.com/samueldbferreira/capputeeno-cdn/main/uploads/Camiseta%2004.jpg",
		category: "mugs",
	},
	{
		name: "Camiseta evening",
		description: faker.lorem.paragraph(),
		image_url:
			"https://raw.githubusercontent.com/samueldbferreira/capputeeno-cdn/main/uploads/Camiseta%2003.jpg",
		category: "t-shirts",
	},
	{
		name: "Caneca preto fosco",
		description: faker.lorem.paragraph(),
		image_url:
			"https://raw.githubusercontent.com/samueldbferreira/capputeeno-cdn/main/uploads/Caneca%2002.jpg",
		category: "mugs",
	},
	{
		name: "Caneca Never settle",
		description: faker.lorem.paragraph(),
		image_url:
			"https://raw.githubusercontent.com/samueldbferreira/capputeeno-cdn/main/uploads/Caneca%2005.jpg",
		category: "mugs",
	},
	{
		name: "Camiseta DREAMER",
		description: faker.lorem.paragraph(),
		image_url:
			"https://raw.githubusercontent.com/samueldbferreira/capputeeno-cdn/main/uploads/Camiseta%2002.jpg",
		category: "t-shirts",
	},
	{
		name: "Caneca Decaf! P&Co",
		description: faker.lorem.paragraph(),
		image_url:
			"https://raw.githubusercontent.com/samueldbferreira/capputeeno-cdn/main/uploads/Caneca%2003.jpg",
		category: "mugs",
	},
	{
		name: "Camiseta Ramones",
		description: faker.lorem.paragraph(),
		image_url:
			"https://raw.githubusercontent.com/samueldbferreira/capputeeno-cdn/main/uploads/Camiseta%2006.jpg",
		category: "t-shirts",
	},
];

const allProducts = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
	const products = baseProducts
		.map((product) => ({
			...product,
			id: faker.string.uuid(),
			price_in_cents: faker.number.float({
				min: 2000,
				max: 10000,
			}),
			sales: faker.number.int(40),
			created_at: faker.date.past(),
		}))
		.sort(() => 0.5 - Math.random());

	return [...acc, ...products];
}, []);

export { allProducts };
