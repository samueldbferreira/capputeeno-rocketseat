import { products } from "../../../../utils/generateFakeProducts";

export async function GET() {
	return Response.json(products);
}
