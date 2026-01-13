import OperationsAndCapabilitiesOverview from "@/components/UI/companies/operations-and-capabilities/OperationsAndCapabilitiesOverview";

export default async function OperationsAndCapabilitiesLayout({ children }) {
    return (
        <main>
            <OperationsAndCapabilitiesOverview />
            {children}
        </main>
    );
}