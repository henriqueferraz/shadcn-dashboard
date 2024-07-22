export default function PageTitle({ title }: { title: string }) {
    return (
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h1>
    );
}