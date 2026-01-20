import MilestoneTimeline from "./MilestoneTimeline";
import MobileTimeline from "./MobileTimeline";

function TimelineContainer({ title, milestones }) {
    return (
        <section>
            <div className="md:hidden">
                <MobileTimeline title={title} items={milestones} accent={"#79c4e7"} />
            </div>
            <div className="hidden md:block">
                <MilestoneTimeline title={title} milestones={milestones} />
            </div>
        </section>
    );
};

export default TimelineContainer