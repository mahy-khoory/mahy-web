import KitchenBackgroundGrid from '@/components/Products/Kitchen/KitchenBackgroundGrid'
import KitchenImageGrid from '@/components/Products/Kitchen/KitchenImageGrid'
import KitchenItems from '@/components/Products/Kitchen/KitchenItems'
import KitchenMenu from '@/components/Products/Kitchen/KitchenMenu'
import React from 'react'

function KitchenDesignPage() {
    return (
        <main>
            <KitchenImageGrid />
            <KitchenMenu />
            <KitchenBackgroundGrid />
            <KitchenItems />
        </main>
    )
}

export default KitchenDesignPage