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
                href: "/about-us/group-history-and-legacy",
              },
              {
                label: t("VisionMissionValues"),
                href: "/about-us/mission-vision-values",
              },
            ],
          },
          {
            title: t("LeadershipGovernance"),
            links: [
              {
                label: t("LeadershipManagement"),
                href: "/about-us/leadership-and-management",
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
                href: "/about-us/certifications-and-accreditations",
              },
              {
                label: t("QualityManagementSystems"),
                href: "/about-us/quality-management-systems",
              },
              {
                label: t("HSE"),
                href: "/about-us/health-safety-environment",
              },
              {
                label: t("PoliciesCodeConduct"),
                href: "/about-us/code-of-conduct",
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
                href: "/about-us/capabilities",
              },
              {
                label: t("StrategicPartnershipsOverview"),
                href: "/about-us/partners",
              },
              {
                label: t("SustainabilityCSR"),
                href: "/about-us/sustainability",
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
            title: t("TheHolding"),
            links: [
              {
                label: t("HoldingCompanyOverview"),
                href: "/companies/holding-overview",
              },
              {
                label: t("GroupStructure"),
                href: "/companies/group-structure",
              },
              {
                label: t("GovernanceOversight"),
                href: "/companies/governance-oversight",
              },
            ],
          },
          {
            title: t("BusinessSectors"),
            links: [
              {
                label: "Containerboard Manufacturing",
                href: "/companies/containerboard-manufacturing",
              },
              {
                label: "Trading & Distribution",
                href: "/companies/trading-distribution",
              },
              {
                label: "Waste Management",
                href: "/companies/waste-management",
              },
              {
                label: "Industrial Packaging Solutions",
                href: "/companies/industrial-packaging-solutions",
              },
              {
                label: "Engineering & Technical Services",
                href: "/companies/engineering-technical-services",
              },
              {
                label: "Automotive",
                href: "/companies/automotive",
              },
              {
                label: "Compressed Wood Blocks",
                href: "/companies/compressed-wood-blocks",
              },
              {
                label: "Energy & Sustainability Consulting",
                href: "/companies/energy-sustainability-consulting",
              },
              {
                label: "Solar & Renewable Energy",
                href: "/companies/solar-renewable-energy",
              },
              {
                label: "Transportation & Logistics",
                href: "/companies/transportation-logistics",
              },
              {
                label: "Hospitality",
                href: "/companies/hospitality",
              },
              {
                label: "Food & Beverage",
                href: "/companies/food-and-beverage",
              },
              {
                label: "Packaging Manufacturing & Sustainable Packaging Solutions",
                href: "/companies/packaging-manufacturing-sustainable-packaging-solutions",
              }
            ],
            // {
            //   label: t("Trading&Distribution"),
            //   href: "/companies/trading",
            // },
            // {
            //   label: t("Engineering&TechnicalServices"),
            //   href: "/companies/engineering-services",
            // },
            // {
            //   label: t("Paper&CorrugatedManufacturing"),
            //   href: "/companies/manufacturing",
            // },
            // {
            //   label: t("WasteCollection&EnvironmentalServices"),
            //   href: "/companies/environmental-services",
            // },
            // {
            //   label: t("Transportation&Logistics"),
            //   href: "/companies/logistics",
            // },
            // {
            //   label: t("Automotive"),
            //   href: "/companies/automotive",
            // },
            // {
            //   label: t("Energy&RenewableSolutions"),
            //   href: "/companies/energy-solutions",
            // },
            // {
            //   label: t("Hospitality"),
            //   href: "/companies/hospitality",
            // },
            // {
            //   label: t("Food&Beverage"),
            //   href: "/companies/food-beverage",
            // },
          },
          {
            title: t("Operations&Capabilities"),
            links: [
              {
                label: t("ManufacturingFacilities"),
                href: "/companies/operations-and-capabilities/factories",
              },
              {
                label: t("Warehousing&Logistics"),
                href: "/companies/operations-and-capabilities/warehousing-logistics",
              },
              {
                label: t("Technology&Innovation"),
                href: "/companies/operations-and-capabilities/technology-innovation",
              },
              {
                label: t("QualitySafety&Compliance"),
                href: "/companies/operations-and-capabilities/quality-safety-compliance",
              },
              {
                label: t("Sustainability&Environment"),
                href: "/companies/operations-and-capabilities/sustainability-environment",
              },
            ],
          },
          {
            title: t("GroupCompanies"),
            links: [
              {
                label: t("AllGroupCompanies"),
                href: "/companies/all",
              },
            ],
          },
        ],
      },
      {
        id: "product-services",
        label: "Product & Services",
        href: "/products-and-services",
        linkType: "mega",
        columns: [
          {
            title: "Pumps & Water Systems",
            links: [
              {
                label: t("PumpingSolutions"),
                href: "/products/pumping-solutions",
              },
              {
                label: t("BoosterPumps"),
                href: "/products/booster-pumps"
              },
              {
                label: t("TransferPumps"),
                href: "/products/transfer-pumps"
              },
              {
                label: t("SubmersiblePumps"),
                href: "/products/submersible-pumps",
              },
              {
                label: t("Sewage&WastewaterPumps"),
                href: "/products/sewage-wastewater-pumps",
              },
              {
                label: t("ChilledWaterPumps"),
                href: "/products/chilled-water-pumps",
              },
              {
                label: t("ARISTONWaterHeaters"),
                href: "/products/ariston-water-heaters",
              },
              {
                label: "Pressure Tanks",
                href: "/products/global-water-pressure-tanks",
              },
              // {
              //   label: t("DX&VRFAirConditioningSystems"),
              //   href: "/products/dx-vrf-air-conditioning",
              // },
              // {
              //   label: t("AKAS&RYNEVentilationFans"),
              //   href: "/products/akas-ryne-ventilation-fans",
              // },
              // {
              //   label: t("ECOLINKLEDBulbs&LightingProducts"),
              //   href: "/products/ecolink-led-bulbs-lighting",
              // },
              // {
              //   label: t("DEWALTPowerTools&SafetyShoes"),
              //   href: "/products/dewalt",
              // },
              // {
              //   label: t("VINZORAluminumLadders"),
              //   href: "/products/vinzor-aluminum-ladders",
              // },
              // {
              //   label: t("CorrugatedBoxes"),
              //   href: "/products/corrugated-boxes",
              // },
              // {
              //   label: t("PlasticJerryCans"),
              //   href: "/products/plastic-jerry-cans",
              // },
              // { label: t("PalletBlocks"), href: "/products/pallet-blocks" },
              // {
              //   label: t("PremiumWoodenPallets"),
              //   href: "/products/premium-wooden-pallets",
              // },
            ],
          },
          {
            title: "HVAC & Air Solutions",
            links: [
              {
                label: t("DX&VRFAirConditioningSystems"),
                href: "/products/dx-vrf-air-conditioning",
              },
              {
                label: "Ventilation Fans",
                href: "/products/akas-ryne-ventilation-fans",
              },
              {
                label: t("AirConditioningServices"),
                href: "/services/air-conditioning-services",
              },
              {
                label: t("ComprehensivePumpingSystem&HVACServices"),
                href: "/services/comprehensive-pumping-system-hvac-services",
              },
              // {
              //   label: t("Engineering&TechnicalServices"),
              //   href: "/services/engineering-technical-services",
              // },
              // {
              //   label: t("PumpingSystemServices"),
              //   href: "/services/pumping-system-services",
              // },
              // {
              //   label: t("AnnualMaintenanceContracts"),
              //   href: "/services/annual-maintenance-contracts",
              // },
              // {
              //   label: t("SolarPanelInstallation&O&MServices"),
              //   href: "/services/solar-panel-installation",
              // },
              // {
              //   label: t("WasteCollection&RecyclingServices"),
              //   href: "/services/waste-collection-recycling",
              // },
              // {
              //   label: t("ServicedHotelApartments"),
              //   href: "/services/serviced-hotel-apartments",
              // },

            ],
          },
          {
            title: "Industrial & Building Products",
            links: [
              {
                label: "LED Lighting Products",
                href: "/products/led-lighting-products",
              },
              {
                label: "Power Tools & Safety Shoes",
                href: "/products/dewalt",
              },
              {
                label: "Aluminum Ladders",
                href: "/products/vinzor-aluminum-ladders",
              },
              {
                label: t("CorrugatedBoxes"),
                href: "/products/corrugated-boxes",
              },
              {
                label: t("PlasticJerryCans"),
                href: "/products/plastic-jerry-cans",
              },
              {
                label: t("PalletBlocks"),
                href: "/products/pallet-blocks"
              },
              {
                label: t("PremiumWoodenPallets"),
                href: "/products/premium-wooden-pallets",
              },
              {
                label: "Corrugated Paper Reels",
                href: "/products/corrugated-paper-reels",
              }
              // {
              //   label: t("DX&VRFAirConditioningSystems"),
              //   href: "/products/dx-vrf-air-conditioning",
              // },
              // {
              //   label: "Ventilation Fans",
              //   href: "/products/akas-ryne-ventilation-fans",
              // },
              // {
              //   label: t("AirConditioningServices"),
              //   href: "/services/air-conditioning-services",
              // },
              // {
              //   label: t("ComprehensivePumpingSystem&HVACServices"),
              //   href: "/services/comprehensive-pumping-system-hvac-services",
              // },
            ]
          },
          {
            title: "Services & Solutions",
            links: [
              {
                label: t("Engineering&TechnicalServices"),
                href: "/companies/engineering-services",
              },
              {
                label: t("PumpingSystemServices"),
                href: "/services/pumping-system-services",
              },
              {
                label: t("AnnualMaintenanceContracts"),
                href: "/services/annual-maintenance-contracts",
              },
              {
                label: t("SolarPanelInstallation&O&MServices"),
                href: "/services/solar-panel-installation",
              },
              {
                label: t("WasteCollection&RecyclingServices"),
                href: "/services/waste-collection-recycling",
              },
              {
                label: t("ServicedHotelApartments"),
                href: "/services/serviced-hotel-apartments",
              },
              {
                label: t("Restaurant&DiningServices"),
                href: "/services/restaurant-dining-services",
              },
              {
                label: t("KitchenDesigningSolutions"),
                href: "/services/kitchen-designing-solutions",
              },
              {
                label: t("SpareParts"),
                href: "/products/spare-parts"
              },
            ]
          }
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

      // {
      //   id: "careers",
      //   label: t("Careers"),
      //   href: "/careers",
      //   linkType: "mega",
      //   columns: [
      //     {
      //       title: t("CareerOpportunities"),
      //       links: [
      //         { label: t("CareersAtMahy"), href: "/careers" },
      //         { label: t("CurrentVacancies"), href: "/careers/jobs" },
      //         {
      //           label: t("InternshipOpportunities"),
      //           href: "/careers/internships",
      //         },
      //         // { label: t("GraduateEarlyCareer"), href: "/careers/graduates" },
      //       ],
      //     },
      //     {
      //       title: t("LifeAtMahy"),
      //       links: [
      //         { label: t("WorkingAtMahy"), href: "/careers/life" },
      //         {
      //           label: t("CultureValuesEnvironment"),
      //           href: "/careers/culture",
      //         },
      //         {
      //           label: t("EmployeeBenefitsRewards"),
      //           href: "/careers/benefits",
      //         },
      //         {
      //           label: t("DiversityEquityInclusion"),
      //           href: "/careers/diversity",
      //         },
      //       ],
      //     },
      //     {
      //       title: t("LearningProfessionalDevelopment"),
      //       links: [
      //         {
      //           label: t("LearningDevelopmentFramework"),
      //           href: "/careers/learning",
      //         },
      //         { label: t("CareerProgressionGrowth"), href: "/careers/growth" },
      //         {
      //           label: t("PerformanceManagementRecognition"),
      //           href: "/careers/performance",
      //         },
      //         {
      //           label: t("LeadershipTalentDevelopment"),
      //           href: "/careers/leadership",
      //         },
      //       ],
      //     },
      //     {
      //       title: t("RecruitmentProcessApplications"),
      //       links: [
      //         { label: t("ApplyPosition"), href: "/careers/apply" },
      //         // { label: t("SubmitCV"), href: "/careers/submit-cv" },
      //         {
      //           label: t("RecruitmentSelectionProcess"),
      //           href: "/careers/process",
      //         },
      //         { label: t("CandidateFAQs"), href: "/careers/faqs" },
      //       ],
      //     },
      //   ],
      // },
      {
        id: "contact",
        label: t("Contact"),
        href: "/contact-us",
        linkType: "mega",
        columns: [
          {
            title: t("Contact"),
            links: [
              { label: t("ContactInformation"), href: "/contact-us" },
              {
                label: t("OfficeLocationsMaps"),
                href: "/contact-us/locations",
              },
              { label: t("Contact"), href: "/contact-us/enquiry" },
            ],
          },
          {
            title: t("SalesBusinessEnquiries"),
            links: [
              // { label: t("SalesEnquiry"), href: "/contact-us/sales" },
              { label: t("RequestQuotation"), href: "/rfq" },
              {
                label: t("KeyAccountContacts"),
                href: "/contact-us/key-accounts",
              },
            ],
          },
          {
            title: t("CustomerSupportAfterSales"),
            links: [
              { label: t("CustomerSupportOverview"), href: "/support" },
              // { label: t("ServiceRequest"), href: "/contact-us/service-request" },
              { label: t("ServiceRequest"), href: "/contact-us/schedule-service" },

              { label: t("SiteVisitRequest"), href: "/contact-us/site-visit" },
              { label: t("CustomerComplaint"), href: "/contact-us/customer-complaint" },
              // { label: t("CustomerDocumentUpdate"), href: "/document-update" },
            ],
          },
          {
            title: t("Partnerships"),
            links: [
              // { label: t("PartnerRegistration"), href: "/partners/register" },
              { label: t("VendorRegistration"), href: "/contact-us/vendor-registration" },
              { label: "Customer Registration", href: "/contact-us/customer-registration" },
            ],
          },
        ],
      },
    ],
  };
}
