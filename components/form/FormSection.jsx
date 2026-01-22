export function FormSection({ title, children }) {
    return (
        <section className="space-y-4">
            <h2 className="text-gray-900 font-semibold border-b border-gray-300 pb-2">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {children}
            </div>
        </section>
    );
}
