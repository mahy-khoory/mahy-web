import KitchenBackgroundGrid from '@/components/Services/Kitchen/KitchenBackgroundGrid'
import KitchenImageGrid from '@/components/Services/Kitchen/KitchenImageGrid'
import KitchenImageScaledGrid from '@/components/Services/Kitchen/KitchenImageScaledGrid'
import KitchenItems from '@/components/Services/Kitchen/KitchenItems'
import KitchenMenu from '@/components/Services/Kitchen/KitchenMenu'
import React from 'react'

function KitchenDesignPage() {
    return (
        <main>
            <KitchenImageGrid />
            <KitchenMenu />
            <KitchenBackgroundGrid />
            <KitchenItems />
            <KitchenImageScaledGrid />
        </main>
    )
}

export default KitchenDesignPage