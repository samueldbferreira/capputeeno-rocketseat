import { products } from "../../../../../utils/generateFakeProducts";

export async function GET(_: Request, { params }: { params: { id: string } }) {
	const product = products.find((p) => p.id === params.id) || null;

	return Response.json(product);
}
