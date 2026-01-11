import KitchenBackgroundGrid from '@/components/Home/Products/Kitchen/KitchenBackgroundGrid'
import KitchenImageGrid from '@/components/Home/Products/Kitchen/KitchenImageGrid'
import KitchenMenu from '@/components/Home/Products/Kitchen/KitchenMenu'
import React from 'react'

function KitchenPage() {
    return (
        <main>
            <KitchenImageGrid />
            <KitchenMenu />
            <KitchenBackgroundGrid />
        </main>
    )
};

export default KitchenPage