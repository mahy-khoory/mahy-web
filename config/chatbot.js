export const chatbotData = (t) => {
    return {
        idle: {
            heading1: t("Heading1"),
            heading2: t("Heading2"),
            cta: t("Cta")
        },
        layout: {
            title: t("Title"),
            welcome: t("Welcome"),
            concierge: t("Concierge"),
            you: t("You"),
            send: t("Send"),
            start: t("Start"),
            type: t("Type"),
            change: t("Change"),
            submit1: t("Submit1"),
            submit2: t("Submit2"),
            locationPrompt: t("LocationPrompt"),
            locationHint: t("LocationHint"),
            locationUseCurrent: t("LocationUseCurrent"),
            locationFetching: t("LocationFetching"),
            locationShare: t("LocationShare"),
            locationApprox: t("LocationApprox"),
            locationFallback: t("LocationFallback"),
            locationSuccess: t("LocationSuccess"),
            locationConfirm: t("LocationConfirm")
        },
        flow: {
            q1_business: {
                text: t("Flow1Text"),
                type: "options",
                field: "business",
                options: [
                    { label: t("Flow1Option1"), next: "q2_pump_support" },
                    { label: t("Flow1Option2"), next: "q_name" },
                    { label: t("Flow1Option3"), next: "q_name" },
                    { label: t("Flow1Option4"), next: "wh_type_select" },
                    { label: t("Flow1Option5"), next: "q_name" },
                    { label: t("Flow1Option6"), next: "ac_usage" },
                    { label: t("Flow1Option7"), next: "q_name" },
                    { label: t("Flow1Option8"), next: "tools_category" },
                    { label: t("Flow1Option9"), next: "q_name" },
                    { label: t("Flow1Option10"), next: "safety_product_select" },
                    { label: t("Flow1Option11"), next: "fur_type" },
                ],
            },
            safety_product_select: {
                text: t("Flow2Text"),
                type: "options",
                field: "safetyProductType",
                options: [
                    { label: t("Flow2Option1"), next: "q_name" },
                    { label: t("Flow2Option2"), next: "q_name" },
                    { label: t("Flow2Option3"), next: "q_name" },
                ],
            },
            tools_category: {
                text: t("Flow3Text"),
                type: "options",
                field: "toolsCategory",
                options: [
                    { label: t("Flow3Option1"), next: "q_name" },
                    { label: t("Flow3Option2"), next: "q_name" },
                ],
            },
            sp_usage: {
                text: t("Flow4Text"),
                type: "options",
                field: "solarUsageType",
                options: [
                    { label: t("Flow4Option1"), next: "sp_existing" },
                    { label: t("Flow4Option2"), next: "sp_existing" },
                    { label: t("Flow4Option3"), next: "sp_existing" },
                ],
            },
            sp_existing: {
                text: t("Flow5Text"),
                type: "options",
                field: "solarExistingInstallation",
                options: [
                    { label: t("Flow5Option1"), next: "sp_capacity" },
                    { label: t("Flow5Option2"), next: "sp_capacity" },
                ],
            },
            sp_capacity: {
                text: t("Flow6Text"),
                type: "text",
                field: "solarCapacity",
                next: "sp_name",
            },

            sp_name: {
                text: t("Flow7Text"),
                type: "text",
                field: "name",
                next: "sp_location",
            },
            sp_location: {
                text: t("Flow8Text"),
                type: "options",
                field: "location",
                options: [
                    { label: t("Flow8Option1"), next: "sp_email" },
                    { label: t("Flow8Option2"), next: "sp_email" },
                    { label: t("Flow8Option3"), next: "sp_email" },
                ],
            },
            sp_email: {
                text: t("Flow9Text"),
                type: "email",
                field: "email",
                next: "sp_phone",
            },
            sp_phone: {
                text: t("Flow10Text"),
                type: "phone",
                field: "phone",
                submit: true,
            },
            wh_type_select: {
                text: t("Flow11Text"),
                type: "options",
                field: "waterHeaterType",
                options: [
                    { label: t("Flow11Option1"), next: "q_name" },
                    { label: t("Flow11Option2"), next: "q_name" },
                ],
            },
            car_budget: {
                text: t("Flow12Text"),
                type: "text",
                field: "carBudget",
                next: "car_consultation",
            },
            car_consultation: {
                text: t("Flow13Text"),
                type: "options",
                field: "carConsultation",
                options: [
                    { label: t("Flow13Option1"), next: "car_name" },
                    { label: t("Flow13Option2"), next: "car_submit" },
                ],
            },
            car_submit: {
                text: t("Flow14Text"),
                type: "info",
                submit: true,
            },
            car_name: {
                text: t("Flow15Text"),
                type: "text",
                field: "name",
                next: "car_location",
            },
            car_location: {
                text: t("Flow16Text"),
                type: "options",
                field: "location",
                options: [
                    { label: t("Flow16Option1"), next: "car_email" },
                    { label: t("Flow16Option2"), next: "car_email" },
                    { label: t("Flow16Option3"), next: "car_email" },
                ],
            },
            car_email: {
                text: t("Flow17Text"),
                type: "email",
                field: "email",
                next: "car_phone",
            },
            car_phone: {
                text: t("Flow18Text"),
                type: "phone",
                field: "phone",
                submit: true,
            },
            // FURNITURE FLOW
            fur_type: {
                text: t("Flow19Text"),
                type: "text",
                field: "furnitureType",
                next: "fur_usage",
            },
            fur_usage: {
                text: t("Flow20Text"),
                type: "options",
                field: "furnitureUsage",
                options: [
                    { label: t("Flow20Option1"), next: "q_name" },
                    { label: t("Flow20Option2"), next: "q_name" },
                ],
            },
            fur_brand_pref: {
                text: t("Flow21Text"),
                type: "options",
                field: "furnitureBrandPreference",
                options: [
                    { label: t("Flow21Option1"), next: "fur_brand_name" },
                    { label: t("Flow21Option2"), next: "fur_name" },
                ],
            },
            fur_brand_name: {
                text: t("Flow22Text"),
                type: "text",
                field: "furnitureBrand",
                next: "fur_name",
            },

            fur_name: {
                text: t("Flow23Text"),
                type: "text",
                field: "name",
                next: "fur_location",
            },
            fur_location: {
                text: t("Flow24Text"),
                type: "options",
                field: "location",
                options: [
                    { label: t("Flow24Option1"), next: "fur_email" },
                    { label: t("Flow24Option2"), next: "fur_email" },
                    { label: t("Flow24Option3"), next: "fur_email" },
                ],
            },
            fur_email: {
                text: t("Flow25Text"),
                type: "email",
                field: "email",
                next: "fur_phone",
            },
            fur_phone: {
                text: t("Flow26Text"),
                type: "phone",
                field: "phone",
                submit: true,
            },
            // WATER HEATER FLOW
            wh_usage: {
                text: t("Flow27Text"),
                type: "options",
                field: "waterHeaterUsage",
                options: [
                    { label: t("Flow27Option1"), next: "wh_capacity" },
                    { label: t("Flow27Option1"), next: "wh_capacity" },
                ],
            },
            wh_capacity: {
                text: t("Flow28Text"),
                type: "text",
                field: "waterHeaterCapacity",
                next: "wh_brand_pref",
            },
            wh_brand_pref: {
                text: t("Flow29Text"),
                type: "options",
                field: "waterHeaterBrandPreference",
                options: [
                    { label: t("Flow29Option1"), next: "wh_brand_name" },
                    { label: t("Flow29Option2"), next: "wh_name" },
                ],
            },
            wh_brand_name: {
                text: t("Flow30Text"),
                type: "text",
                field: "waterHeaterBrand",
                next: "wh_name",
            },
            wh_name: {
                text: t("Flow31Text"),
                type: "text",
                field: "name",
                next: "wh_location",
            },
            wh_location: {
                text: t("Flow32Text"),
                type: "options",
                field: "location",
                options: [
                    { label: t("Flow32Option1"), next: "wh_email" },
                    { label: t("Flow32Option2"), next: "wh_email" },
                    { label: t("Flow32Option3"), next: "wh_email" },
                ],
            },
            wh_email: {
                text: t("Flow33Text"),
                type: "email",
                field: "email",
                next: "wh_phone",
            },
            wh_phone: {
                text: t("Flow34Text"),
                type: "phone",
                field: "phone",
                submit: true,
            },
            // AIR CONDITIONING FLOW
            ac_usage: {
                text: t("Flow35Text"),
                type: "options",
                field: "acUsageType",
                options: [
                    { label: t("Flow35Option1"), next: "ac_room_size" },
                    { label: t("Flow35Option2"), next: "ac_room_size" },
                ],
            },
            ac_room_size: {
                text: t("Flow36Text"),
                type: "text",
                field: "acRoomSize",
                next: "q_name",
            },
            ac_brand_pref: {
                text: t("Flow37Text"),
                type: "options",
                field: "acBrandPreference",
                options: [
                    { label: t("Flow37Option1"), next: "ac_brand_name" },
                    { label: t("Flow37Option2"), next: "ac_name" },
                ],
            },
            ac_brand_name: {
                text: t("Flow38Text"),
                type: "text",
                field: "acBrandName",
                next: "ac_name",
            },
            ac_name: {
                text: t("Flow39Text"),
                type: "text",
                field: "name",
                next: "ac_location",
            },
            ac_location: {
                text: t("Flow40Text"),
                type: "options",
                field: "location",
                options: [
                    { label: t("Flow40Option1"), next: "ac_email" },
                    { label: t("Flow40Option2"), next: "ac_email" },
                    { label: t("Flow40Option3"), next: "ac_email" },
                ],
            },
            ac_email: {
                text: t("Flow41Text"),
                type: "email",
                field: "email",
                next: "ac_phone",
            },
            ac_phone: {
                text: t("Flow42Text"),
                type: "phone",
                field: "phone",
                submit: true,
            },
            // FALLBACK GENERIC LEAD FLOW FOR OTHER BUSINESSES
            lead_name: {
                text: t("Flow43Text"),
                type: "text",
                field: "name",
                next: "lead_location",
            },
            lead_location: {
                text: t("Flow44Text"),
                type: "options",
                field: "location",
                options: [
                    { label: t("Flow44Option1"), next: "lead_email" },
                    { label: t("Flow44Option2"), next: "lead_email" },
                    { label: t("Flow44Option3"), next: "lead_email" },
                ],
            },
            lead_email: {
                text: t("Flow45Text"),
                type: "email",
                field: "email",
                next: "lead_phone",
            },
            lead_phone: {
                text: t("Flow46Text"),
                type: "phone",
                field: "phone",
                submit: true,
            },
            // PUMP FLOW
            q2_pump_support: {
                text: t("Flow47Text"),
                type: "options",
                field: "pumpSupportType",
                options: [
                    { label: t("Flow47Option1"), next: "q3_business_type" },
                    { label: t("Flow47Option2"), next: "q3_service_type" },
                    { label: t("Flow47Option3"), next: "q_name" },
                    { label: t("Flow47Option4"), next: "q3_spare_equipment" },
                    { label: t("Flow47Option5"), next: "q3_custom_solution_type" },
                ],
            },
            q3_custom_solution_type: {
                text: t("Flow48Text"),
                type: "options",
                field: "customPumpSolutionType",
                options: [
                    { label: t("Flow48Option1"), next: "q4_usage" },
                    { label: t("Flow48Option2"), next: "q4_usage" },
                    { label: t("Flow48Option3"), next: "q4_usage" },
                    { label: t("Flow48Option4"), next: "q4_usage" },
                    { label: t("Flow48Option5"), next: "q4_usage" },
                    { label: t("Flow48Option6"), next: "q4_usage" },
                    { label: t("Flow48Option7"), next: "q3_custom_solution_other_desc" },
                ],
            },
            q3_custom_solution_other_desc: {
                text: t("Flow49Text"),
                type: "text",
                field: "customSolutionOtherDetails",
                next: "q_name",
            },
            q3_business_type: {
                text: t("Flow50Text"),
                type: "options",
                field: "primaryBusinessType",
                options: [
                    { label: t("Flow50Option1"), next: "q4_usage" },
                    { label: t("Flow50Option2"), next: "q4_usage" },
                    { label: t("Flow50Option3"), next: "q4_usage" },
                    { label: t("Flow50Option4"), next: "q_name" },
                    { label: t("Flow50Option5"), next: "q4_usage" },
                    { label: t("Flow50Option6"), next: "q4_usage" },
                    { label: t("Flow50Option7"), next: "q3_other_business_desc" },
                ],
            },
            q3_other_business_desc: {
                text: t("Flow51Text"),
                type: "text",
                field: "otherBusinessType",
                next: "q_name",
            },
            // --------- NEW Pump Enquiry Path ---------
            q3_pump_type: {
                text: t("Flow52Text"),
                type: "options",
                field: "pumpType",
                options: [
                    { label: t("Flow52Option1"), next: "q4_usage" },
                    { label: t("Flow52Option2"), next: "q4_usage" },
                    { label: t("Flow52Option3"), next: "q4_usage" },
                    { label: t("Flow52Option4"), next: "q4_usage" },
                    { label: t("Flow52Option5"), next: "q4_usage" },
                    { label: t("Flow52Option6"), next: "q4_usage" },
                    { label: t("Flow52Option7"), next: "q4_usage" },
                    { label: t("Flow52Option8"), next: "q4_usage" },
                    { label: t("Flow52Option9"), next: "q3_other_pump_desc" },
                ],
            },
            q3_other_pump_desc: {
                text: t("Flow53Text"),
                type: "text",
                field: "otherPumpType",
                next: "q4_usage",
            },
            q4_usage: {
                text: t("Flow54Text"),
                type: "options",
                field: "usageType",
                options: [
                    { label: t("Flow54Option1"), next: "q5_supply" },
                    { label: t("Flow54Option2"), next: "q5_supply" },
                    { label: t("Flow54Option3"), next: "q5_supply" },
                    { label: t("Flow54Option4"), next: "q5_supply" },
                ],
            },
            q5_supply: {
                text: t("Flow55Text"),
                type: "options",
                field: "supplyType",
                options: [
                    { label: t("Flow55Option1"), next: "q_name" },
                    { label: t("Flow55Option2"), next: "q_name" },
                ],
            },
            q6_brand_pref: {
                text: t("Flow56Text"),
                type: "options",
                field: "brandPreference",
                options: [
                    { label: t("Flow56Option1"), next: "q7_brand_name" },
                    { label: t("Flow56Option2"), next: "q_name" },
                ],
            },
            q7_brand_name: {
                text: t("Flow57Text"),
                type: "text",
                field: "brandName",
                next: "q_name",
            },
            // --------- SERVICE PATH ---------
            q3_service_type: {
                text: t("Flow58Text"),
                type: "options",
                field: "serviceType",
                options: [
                    { label: t("Flow58Option1"), next: "q_name" },
                    { label: t("Flow58Option2"), next: "q_name" },
                    { label: t("Flow58Option3"), next: "q_name" },
                    { label: t("Flow58Option4"), next: "q_emergency_contact" },
                    { label: t("Flow58Option5"), next: "q_site_location" },
                ],
            },
            q_emergency_contact: {
                text: t("Flow59Text"),
                type: "info",
                submit: true,
            },
            q_site_location: {
                text: t("Flow60Text"),
                type: "location",
                field: "siteLocation",
                next: "q_name",
            },
            q_emergency_info: {
                text: t("Flow61Text"),
                type: "info",
                options: [
                    { label: t("Flow61Option1"), next: "q3_service_type" },
                    { label: t("Flow61Option2"), next: "q_emergency_final" },
                ],
            },
            q_emergency_final: {
                text: t("Flow62Text"),
                type: "info",
                options: [
                    { label: t("Flow62Option1"), next: "q_emergency_info" },
                    { label: t("Flow62Option2"), next: "q_emergency_submit" },
                ],
            },
            q_emergency_submit: {
                text: t("Flow63Text"),
                type: "info",
                submit: true,
            },
            // --------- SPARE PART PATH ---------
            q3_spare_equipment: {
                text: t("Flow64Text"),
                type: "options",
                field: "sparePartsEquipment",
                options: [
                    { label: t("Flow64Option1"), next: "q_name" },
                    { label: t("Flow64Option2"), next: "q_name" },
                    { label: t("Flow64Option3"), next: "q3_spare_other_desc" },
                ],
            },
            q3_spare_other_desc: {
                text: t("Flow65Text"),
                type: "text",
                field: "spareOtherEquipment",
                next: "q_name",
            },
            q_spare_other_desc: {
                text: t("Flow66Text"),
                type: "text",
                field: "spareOtherDetails",
                next: "q_name",
            },
            q_custom_solution_desc: {
                text: t("Flow67Text"),
                type: "text",
                field: "customSolutionDetails",
                next: "q_name",
            },
            // SHARED CONTACT BLOCK FOR PUMP FLOW
            q_name: {
                text: t("Flow68Text"),
                type: "text",
                field: "name",
                next: "q_location",
            },
            q_location: {
                text: t("Flow69Text"),
                type: "options",
                field: "location",
                options: [
                    { label: t("Flow69Option1"), next: "q_uae_area" },
                    { label: t("Flow69Option2"), next: "q_gcc_country" },
                    { label: t("Flow69Option3"), next: "q_other_country" },
                ],
            },
            q_other_country: {
                text: t("Flow70Text"),
                type: "country",
                field: "country",
                next: "q_email",
            },
            q_gcc_country: {
                text: t("Flow71Text"),
                type: "options",
                field: "gccCountry",
                options: [
                    { label: t("Flow71Option1"), next: "q_email" },
                    { label: t("Flow71Option2"), next: "q_email" },
                    { label: t("Flow71Option3"), next: "q_email" },
                    { label: t("Flow71Option4"), next: "q_email" },
                    { label: t("Flow71Option5"), next: "q_email" },
                ],
            },
            q_uae_area: {
                text: t("Flow72Text"),
                type: "options",
                field: "uaeArea",
                options: [
                    { label: t("Flow72Option1"), next: "q_email" },
                    { label: t("Flow72Option2"), next: "q_email" },
                    { label: t("Flow72Option3"), next: "q_email" },
                    { label: t("Flow72Option4"), next: "q_email" },
                    { label: t("Flow72Option5"), next: "q_email" },
                    { label: t("Flow72Option6"), next: "q_email" },
                    { label: t("Flow72Option7"), next: "q_email" },
                    { label: t("Flow72Option8"), next: "q_email" },
                ],
            },
            q_email: {
                text: t("Flow73Text"),
                type: "email",
                field: "email",
                next: "q_phone",
            },

            q_phone: {
                text: t("Flow74Text"),
                type: "phone",
                field: "phone",
                submit: true,
            },
        }
    };
};
