

function ProductInfo({ technical, description }) {
    return (
        <section className="border-t border-gray-300 pt-8 mt-10">
            <h2 className="text-2xl font-semibold">Product information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
                <div>
                    <h3 className="text-lg font-semibold">Technical Details</h3>
                    <div className="mt-3 border-t border-gray-300 text-sm">
                        {technical.map((item, i) => (
                            <div key={i} className="flex justify-between py-2.5 border-b border-gray-200">
                                <span className="text-gray-700 font-medium w-1/2">{item.title}</span>
                                <span className="text-gray-700 w-1/2">{item.text}</span>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Description</h3>
                    <div className="mt-3 border-t pt-2.5 border-gray-300 text-sm text-gray-700 text-justify">
                        {description}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductInfo