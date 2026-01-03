import Filters from '../companies/Filters'
import JobCard from './JobCard';
import JobModal from './JobModal';

function JobList({ params, formLabels, t, locale }) {
    const search = params.search;

    const categories = [
        { id: 1, label: t("Filter1Label1") },
        { id: 2, label: t("Filter1Label2") },
        { id: 3, label: t("Filter1Label3") },
        { id: 4, label: t("Filter1Label4") },
        { id: 5, label: t("Filter1Label5") },
    ];
    const types = [
        { id: 1, label: t("Filter2Label1") },
        { id: 2, label: t("Filter2Label2") },
    ];
    const locations = [
        { id: 1, label: t("Filter3Label1") },
        { id: 2, label: t("Filter3Label2") },
    ];

    const filters = [
        {
            title: t("Filter1"),
            key: "category",
            options: categories,
            count: categories.length.toLocaleString(locale)
        },
        {
            title: t("Filter2"),
            key: "type",
            options: types,
            count: types.length.toLocaleString(locale)
        },
        {
            title: t("Filter3"),
            key: "location",
            options: locations,
            count: locations.length.toLocaleString(locale)
        },
    ];
    const jobs = [
        { name: t("Job1"), category: 1, type: 1, location: 1 },
        { name: t("Job2"), category: 2, type: 1, location: 2 },
        { name: t("Job3"), category: 3, type: 2, location: 1 },
        { name: t("Job4"), category: 4, type: 1, location: 2 },
        { name: t("Job5"), category: 5, type: 2, location: 1 },
    ];

    const getJobs = () => {
        let filteredJobs = search
            ? jobs.filter((job) =>
                job.name.toLowerCase().includes(search.toLowerCase())
            )
            : jobs;

        const categoryIds = params.category?.split(",").map(Number) || [];
        const typeIds = params.type?.split(",").map(Number) || [];
        const locationIds = params.location?.split(",").map(Number) || [];

        return filteredJobs.filter((job) => {
            if (categoryIds.length && !categoryIds.includes(job.category)) return false;
            if (typeIds.length && !typeIds.includes(job.type)) return false;
            if (locationIds.length && !locationIds.includes(job.location)) return false;
            return true;
        });
    };

    return (
        <section id='list' className='max-w-7xl mx-auto px-5 py-10'>
            <JobModal formLabels={formLabels} toastText={t("Toast")} />
            <div className='grid gap-10 md:grid-cols-10 mt-8'>
                <div className="col-span-3">
                    <Filters filters={filters} search={search} />
                </div>
                <div className="col-span-7 space-y-5 mt-3">
                    {getJobs().map((job, i) => (
                        <JobCard
                            key={i}
                            name={job.name}
                            category={categories.find(cat => cat.id === job.category)?.label}
                            type={types.find(type => type.id === job.type)?.label}
                            location={locations.find(loc => loc.id === job.location)?.label}
                            cta={t("JobCta")}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JobList