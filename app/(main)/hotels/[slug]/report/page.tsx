export default async function Page({
	params,
}: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	return <>Reports for hotel with slug {slug}</>;
}
