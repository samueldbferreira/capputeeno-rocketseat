export default function Product({ params }: { params: { id: string } }) {
	return <main>{params.id}</main>;
}
