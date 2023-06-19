export default function dynamicRouting({ params }: { params: { id: number } }) {
  return <div>this user {params.id}</div>;
}
