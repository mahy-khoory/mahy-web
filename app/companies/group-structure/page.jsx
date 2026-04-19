import GroupStructure from '@/components/UI/companies/GroupStructure'
import SubPageHeading from '@/components/UI/SubPageHeading'

function GroupStructurePage() {
    return (
        <main>

              <SubPageHeading
                  fullHeight
                    title={"MAHY KHOORY GROUP"}
                    image={
                    //   "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776593285/holding-overview-page.jpg_norjia.jpg"
            "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776629188/urban-jewel-tones-sunrise-paints-glass-facades.jpg_h5bjgi.jpg"
                }
                  />
            <GroupStructure />
        </main>
    )
}

export default GroupStructurePage