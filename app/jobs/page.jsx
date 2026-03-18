import Breadcrumb from '@/components/UI/Breadcrumb';
import JobList from '@/components/UI/jobs/JobList'
import PageHeading from '@/components/UI/PageHeading'
import { getLocale, getTranslations } from 'next-intl/server'
import React from 'react'

async function Jobs({ searchParams }) {
    const params = await searchParams;
    const t = await getTranslations("JobsPage");
    const t2 = await getTranslations("CareersPage");
    const locale = await getLocale();

    const formLabels = {
        title: t("FormTitle"),
        label1: t("Label1"),
        label2: t("Label2"),
        label3: t("Label3"),
        button1: t("Button1"),
        button2: t("Button2"),
        cta: t("Cta"),
    }

    return (
        <main>
            <PageHeading
                title={t("Heading")}
                description={t("SubHeading")}
                image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822107/careers_samv9o.webp"}
            />
            <Breadcrumb
                segments={[{ label: t2("Page"), href: "/careers" }, { label: t("Page"), href: "/jobs" }]}
                locale={locale}
            />
            <JobList params={params} formLabels={formLabels} t={t} locale={locale} />
        </main >
    )
}

export default Jobs