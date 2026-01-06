export function getNavigation(t) {
  return {
    contact: t("Contact"),

    links: [
      { id: "home", label: t("Home"), href: "/" },

      {
        id: "about",
        label: t("AboutUs"),
        href: "/about-us",
        linkType: "mega",
        columns: [
          {
            title: t("CorporateOverview"),
            links: [
              {
                label: t("CompanyProfile"),
                href: "/about-us/company-profile",
              },
              {
                label: t("GroupHistoryLegacy"),
                href: "/about-us/history",
              },
              {
                label: t("VisionMissionValues"),
                href: "/about-us/vision-mission-values",
              },
            ],
          },
          {
            title: t("LeadershipGovernance"),
            links: [
              {
                label: t("LeadershipManagement"),
                href: "/about-us/leadership-management",
              },
              {
                label: t("BoardDirectors"),
                href: "/about-us/board-of-directors",
              },
              {
                label: t("CorporateGovernance"),
                href: "/about-us/corporate-governance",
              },
            ],
          },
          {
            title: t("ComplianceAssurance"),
            links: [
              {
                label: t("CertificationsAccreditations"),
                href: "/about-us/certifications",
              },
              {
                label: t("QualityManagementSystems"),
                href: "/about-us/qms",
              },
              {
                label: t("HSE"),
                href: "/about-us/hse",
              },
              {
                label: t("PoliciesCodeConduct"),
                href: "/about-us/policies",
              },
            ],
          },
          {
            title: t("GroupStrengthResponsibility"),
            links: [
              {
                label: t("IndustriesWeServe"),
                href: "/industries",
              },
              {
                label: t("KeyCapabilitiesExpertise"),
                href: "/capabilities",
              },
              {
                label: t("StrategicPartnershipsOverview"),
                href: "/partners",
              },
              {
                label: t("SustainabilityCSR"),
                href: "/sustainability",
              },
            ],
          },
        ],
      },

      {
        id: "companies",
        label: t("Companies"),
        href: "/companies",
        linkType: "mega",
        columns: [
          {
            title: t("BusinessVerticals"),
            links: [
              {
                label: t("InfrastructureUtilities"),
                href: "/companies/infrastructure",
              },
              {
                label: t("IndustrialManufacturing"),
                href: "/companies/industrial",
              },
              {
                label: t("EnvironmentalWasteSolutions"),
                href: "/companies/environmental",
              },
              {
                label: t("CommercialResidential"),
                href: "/companies/commercial",
              },
              {
                label: t("HospitalityLifestyle"),
                href: "/companies/hospitality",
              },
              { label: t("FurnitureInteriors"), href: "/companies/furniture" },
            ],
          },
          {
            title: t("HowWeWork"),
            links: [
              {
                label: t("ProjectDelivery"),
                href: "/companies/project-delivery",
              },
              {
                label: t("ManufacturingAssembly"),
                href: "/companies/manufacturing",
              },
              { label: t("TradingDistribution"), href: "/companies/trading" },
              { label: t("ServiceAfterSales"), href: "/companies/service" },
              {
                label: t("IntegratedSolutions"),
                href: "/companies/integrated",
              },
            ],
          },
          {
            title: t("CompanyDirectory"),
            links: [
              {
                label: t("CompanyDirectorySearch"),
                href: "/companies/directory",
              },
              { label: t("AllGroupCompaniesAZ"), href: "/companies/all" },
              { label: t("GroupStructure"), href: "/companies/structure" },
              { label: t("GroupLocations"), href: "/companies/locations" },
              {
                label: t("GovernanceOwnershipOverview"),
                href: "/companies/governance",
              },
              { label: t("DownloadGroupProfile"), href: "/companies/profile" },
            ],
          },
          {
            title: t("GroupCompanies"),
            links: [
              { label: t("AllGroupCompaniesAZ"), href: "/companies/all" },
            ],
          },
        ],
      },
      {
        id: "shop",
        label: t("Shop"),
        href: "/shop",
        linkType: "mega",
        columns: [
          {
            title: t("ProductsSolutions"),
            links: [
              { label: t("Pumps"), href: "/shop/pumps" },
              { label: t("SpareParts"), href: "/shop/spare-parts" },
              { label: t("Furniture"), href: "/shop/furniture" },
              { label: t("Accessories"), href: "/shop/accessories" },
            ],
          },
          {
            title: t("BrandsManufacturers"),
            links: [
              { label: t("OurBrandsOverview"), href: "/shop/brands" },
              { label: t("IndividualBrandPages"), href: "/shop/brands/all" },
            ],
          },
          {
            title: t("ServicesSupport"),
            links: [
              { label: t("ServicesOverview"), href: "/services" },
              { label: t("ServiceRequest"), href: "/services/request" },
              { label: t("SiteVisitRequest"), href: "/services/site-visit" },
              { label: t("WarrantyAfterSales"), href: "/services/warranty" },
            ],
          },
          {
            title: t("RequestsDocumentation"),
            links: [
              { label: t("RequestQuotation"), href: "/rfq" },
              { label: t("CustomerComplaint"), href: "/complaint" },
              { label: t("CustomerDocumentUpdate"), href: "/document-update" },
              {
                label: t("PartnerVendorRegistration"),
                href: "/partner-registration",
              },
              { label: t("DownloadCatalogues"), href: "/downloads/catalogues" },
              {
                label: t("TechnicalDocumentation"),
                href: "/downloads/technical",
              },
            ],
          },
        ],
      },
      {
        id: "news",
        label: t("News"),
        href: "/news",
        linkType: "mega",
        columns: [
          {
            title: t("CorporateUpdates"),
            links: [
              { label: t("CompanyNews"), href: "/news/company" },
              { label: t("IndustryInsights"), href: "/news/industry" },
              { label: t("Announcements"), href: "/news/announcements" },
            ],
          },
          {
            title: t("ProjectsDelivery"),
            links: [
              { label: t("ProjectsCompleted"), href: "/projects/completed" },
              { label: t("ProjectHighlights"), href: "/projects/highlights" },
              { label: t("CaseStudies"), href: "/projects/case-studies" },
            ],
          },
          {
            title: t("EventsMedia"),
            links: [
              { label: t("EventsExhibitions"), href: "/events" },
              { label: t("MediaCoverage"), href: "/media" },
              { label: t("PressReleases"), href: "/press" },
            ],
          },
          {
            title: t("Recognition"),
            links: [
              { label: t("AwardsCertifications"), href: "/awards" },
              { label: t("Milestones"), href: "/milestones" },
              { label: t("SuccessStories"), href: "/success-stories" },
            ],
          },
        ],
      },
      {
        id: "careers",
        label: t("Careers"),
        href: "/careers",
        linkType: "mega",
        columns: [
          {
            title: t("CareerOpportunities"),
            links: [
              { label: t("CareersAtMahy"), href: "/careers" },
              { label: t("CurrentVacancies"), href: "/careers/jobs" },
              {
                label: t("InternshipOpportunities"),
                href: "/careers/internships",
              },
              // { label: t("GraduateEarlyCareer"), href: "/careers/graduates" },
            ],
          },
          {
            title: t("LifeAtMahy"),
            links: [
              { label: t("WorkingAtMahy"), href: "/careers/life" },
              {
                label: t("CultureValuesEnvironment"),
                href: "/careers/culture",
              },
              {
                label: t("EmployeeBenefitsRewards"),
                href: "/careers/benefits",
              },
              {
                label: t("DiversityEquityInclusion"),
                href: "/careers/diversity",
              },
            ],
          },
          {
            title: t("LearningProfessionalDevelopment"),
            links: [
              {
                label: t("LearningDevelopmentFramework"),
                href: "/careers/learning",
              },
              { label: t("CareerProgressionGrowth"), href: "/careers/growth" },
              {
                label: t("PerformanceManagementRecognition"),
                href: "/careers/performance",
              },
              {
                label: t("LeadershipTalentDevelopment"),
                href: "/careers/leadership",
              },
            ],
          },
          {
            title: t("RecruitmentProcessApplications"),
            links: [
              { label: t("ApplyPosition"), href: "/careers/apply" },
              // { label: t("SubmitCV"), href: "/careers/submit-cv" },
              {
                label: t("RecruitmentSelectionProcess"),
                href: "/careers/process",
              },
              { label: t("CandidateFAQs"), href: "/careers/faqs" },
            ],
          },
        ],
      },
      {
        id: "contact",
        label: t("Contact"),
        href: "/contact-us",
        linkType: "mega",
        columns: [
          {
            title: t("GeneralContact"),
            links: [
              { label: t("ContactInformation"), href: "/contact-us" },
              { label: t("OfficeLocationsMaps"), href: "/contact/locations" },
              { label: t("GeneralEnquiry"), href: "/contact/enquiry" },
            ],
          },
          {
            title: t("SalesBusinessEnquiries"),
            links: [
              { label: t("SalesEnquiry"), href: "/contact/sales" },
              { label: t("RequestQuotation"), href: "/rfq" },
              { label: t("KeyAccountContacts"), href: "/contact/key-accounts" },
            ],
          },
          {
            title: t("CustomerSupportAfterSales"),
            links: [
              { label: t("CustomerSupportOverview"), href: "/support" },
              { label: t("ServiceRequest"), href: "/services/request" },
              { label: t("SiteVisitRequest"), href: "/services/site-visit" },
              { label: t("CustomerComplaint"), href: "/complaint" },
              { label: t("CustomerDocumentUpdate"), href: "/document-update" },
            ],
          },
          {
            title: t("Partnerships"),
            links: [
              { label: t("PartnerRegistration"), href: "/partners/register" },
              { label: t("VendorRegistration"), href: "/vendors/register" },
            ],
          },
        ],
      },
    ],
  };
}
