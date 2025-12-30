export const FLOW = {
    q1_business: {
        text: "Hello! ☺️ Please choose the business you need help with -",
        type: "options",
        field: "business",
        options: [
            { label: "🔧 Pump", next: "q2_pump_support" },
            { label: "⚙️ VFD", next: "q_name" },
            { label: "🛢️ Pressure Vessel", next: "q_name" },
            { label: "🚿 Water Heater", next: "wh_type_select" },
            { label: "🔩 Valves", next: "q_name" },
            { label: "❄️ Air Conditioning", next: "ac_usage" },
            { label: "🌬️ Odour Controller & Air Purification", next: "q_name" },
            { label: "🧰 Tools", next: "tools_category" },
            { label: "🕳️ Manhole Covers", next: "q_name" },
            { label: "🦺 Safety Products", next: "safety_product_select" },
            { label: "🪑 Furniture", next: "fur_type" },
        ],
    },

    safety_product_select: {
        text: "Please select the safety product",
        type: "options",
        field: "safetyProductType",
        options: [
            { label: "🥾 Safety Shoes", next: "q_name" },
            { label: "📄 Sand Paper", next: "q_name" },
            { label: "🪜 Aluminum Ladder", next: "q_name" },
        ],
    },

    //tools category
    tools_category: {
        text: "Please select the product category",
        type: "options",
        field: "toolsCategory",
        options: [
            { label: "🛠️ Power Tools", next: "q_name" },
            { label: "🔧 Accessories", next: "q_name" },
        ],
    },


    sp_usage: {
        text: "Are you interested in solar for your home, business, or both?",
        type: "options",
        field: "solarUsageType",
        options: [
            { label: "Home", next: "sp_existing" },
            { label: "Business", next: "sp_existing" },
            { label: "Both", next: "sp_existing" },
        ],
    },

    sp_existing: {
        text: "Do you already have solar panels installed?",
        type: "options",
        field: "solarExistingInstallation",
        options: [
            { label: "Yes", next: "sp_capacity" },
            { label: "No", next: "sp_capacity" },
        ],
    },

    sp_capacity: {
        text: "What is the capacity of the project?",
        type: "text",
        field: "solarCapacity",
        next: "sp_name",
    },

    sp_name: {
        text: "May I know your name? ☺️",
        type: "text",
        field: "name",
        next: "sp_location",
    },

    sp_location: {
        text: "May I know your location — UAE, GCC, or Foreign?",
        type: "options",
        field: "location",
        options: [
            { label: "UAE", next: "sp_email" },
            { label: "GCC", next: "sp_email" },
            { label: "Foreign", next: "sp_email" },
        ],
    },

    sp_email: {
        text: "Can I have your email address to share details with you? 📨",
        type: "email",
        field: "email",
        next: "sp_phone",
    },

    sp_phone: {
        text: "Please share your mobile number so our team can assist you instantly 📞",
        type: "phone",
        field: "phone",
        submit: true,
    },


    wh_type_select: {
        text: "Please select the type of water heater required",
        type: "options",
        field: "waterHeaterType",
        options: [
            { label: "☀️ Solar Water Heater", next: "q_name" },
            { label: "⚡ Electric Water Heater", next: "q_name" },
        ],
    },


    car_budget: {
        text: "Kindly indicate your budget range so I can present the right cars for you.",
        type: "text",
        field: "carBudget",
        next: "car_consultation",
    },

    car_consultation: {
        text: "Would you like to schedule a consultation with a sales advisor?",
        type: "options",
        field: "carConsultation",
        options: [
            { label: "Yes", next: "car_name" },
            { label: "No", next: "car_submit" },
        ],
    },

    car_submit: {
        text: "Thank you! Your inquiry has been submitted — our team will get back to you soon 🚗✨",
        type: "info",
        submit: true,
    },

    car_name: {
        text: "May I know your name? ☺️",
        type: "text",
        field: "name",
        next: "car_location",
    },

    car_location: {
        text: "May I know your location — UAE, GCC, or Foreign?",
        type: "options",
        field: "location",
        options: [
            { label: "UAE", next: "car_email" },
            { label: "GCC", next: "car_email" },
            { label: "Foreign", next: "car_email" },
        ],
    },

    car_email: {
        text: "Can I have your email address to share details with you? 📨",
        type: "email",
        field: "email",
        next: "car_phone",
    },

    car_phone: {
        text: "Please share your mobile number so our team can assist you instantly 📞",
        type: "phone",
        field: "phone",
        submit: true,
    },


    // FURNITURE FLOW

    fur_type: {
        text: "Could you tell me the style or type of furniture you're looking for?",
        type: "text",
        field: "furnitureType",
        next: "fur_usage",
    },


    fur_usage: {
        text: "May I know if this is for your home or office space?",
        type: "options",
        field: "furnitureUsage",
        options: [
            { label: "Home", next: "q_name" },
            { label: "Office", next: "q_name" },
        ],
    },


    fur_brand_pref: {
        text: "Do you prefer a specific brand?",
        type: "options",
        field: "furnitureBrandPreference",
        options: [
            { label: "✅ Yes", next: "fur_brand_name" },
            { label: "❌ No", next: "fur_name" },
        ],
    },

    fur_brand_name: {
        text: "Which Brand are you looking for?",
        type: "text",
        field: "furnitureBrand",
        next: "fur_name",
    },

    fur_name: {
        text: "May I know your name? ☺️",
        type: "text",
        field: "name",
        next: "fur_location",
    },

    fur_location: {
        text: "May I know your location — UAE, GCC, or Foreign?",
        type: "options",
        field: "location",
        options: [
            { label: "UAE", next: "fur_email" },
            { label: "GCC", next: "fur_email" },
            { label: "Foreign", next: "fur_email" },
        ],
    },

    fur_email: {
        text: "Can I have your email address to share details with you? 📨",
        type: "email",
        field: "email",
        next: "fur_phone",
    },

    fur_phone: {
        text: "Please share your mobile number so our team can assist you instantly 📞",
        type: "phone",
        field: "phone",
        submit: true,
    },


    // WATER HEATER FLOW

    wh_usage: {
        text: "Are you looking for a water heater for residential or commercial use?",
        type: "options",
        field: "waterHeaterUsage",
        options: [
            { label: "Residential", next: "wh_capacity" },
            { label: "Commercial", next: "wh_capacity" },
        ],
    },

    wh_capacity: {
        text: "What capacity do you need (e.g., 10L, 25L, 50L)?",
        type: "text",
        field: "waterHeaterCapacity",
        next: "wh_brand_pref",
    },

    wh_brand_pref: {
        text: "Do you prefer a specific brand?",
        type: "options",
        field: "waterHeaterBrandPreference",
        options: [
            { label: "✅ Yes", next: "wh_brand_name" },
            { label: "❌ No", next: "wh_name" },
        ],
    },

    wh_brand_name: {
        text: "Which Brand are you looking for?",
        type: "text",
        field: "waterHeaterBrand",
        next: "wh_name",
    },

    wh_name: {
        text: "May I know your name? ☺️",
        type: "text",
        field: "name",
        next: "wh_location",
    },

    wh_location: {
        text: "May I know your location — UAE, GCC, or Foreign?",
        type: "options",
        field: "location",
        options: [
            { label: "UAE", next: "wh_email" },
            { label: "GCC", next: "wh_email" },
            { label: "Foreign", next: "wh_email" },
        ],
    },

    wh_email: {
        text: "Can I have your email address to share details with you? 📨",
        type: "email",
        field: "email",
        next: "wh_phone",
    },

    wh_phone: {
        text: "Please share your mobile number so our team can assist you instantly 📞",
        type: "phone",
        field: "phone",
        submit: true,
    },


    // -------------------------------------------------
    // AIR CONDITIONING FLOW
    // -------------------------------------------------

    ac_usage: {
        text: "Are you looking for an AC for home or office use?",
        type: "options",
        field: "acUsageType",
        options: [
            { label: "Home", next: "ac_room_size" },
            { label: "Office", next: "ac_room_size" },
        ],
    },

    ac_room_size: {
        text: "What room size or area do you want to cool?",
        type: "text",
        field: "acRoomSize",
        next: "q_name",
    },


    ac_brand_pref: {
        text: "Do you prefer a specific brand?",
        type: "options",
        field: "acBrandPreference",
        options: [
            { label: "✅ Yes", next: "ac_brand_name" },
            { label: "❌ No", next: "ac_name" },
        ],
    },

    ac_brand_name: {
        text: "Which AC Brand are you looking for?",
        type: "text",
        field: "acBrandName",
        next: "ac_name",
    },

    ac_name: {
        text: "May I know your name? ☺️",
        type: "text",
        field: "name",
        next: "ac_location",
    },

    ac_location: {
        text: "May I know your location — UAE, GCC, or Foreign?",
        type: "options",
        field: "location",
        options: [
            { label: "UAE", next: "ac_email" },
            { label: "GCC", next: "ac_email" },
            { label: "Foreign", next: "ac_email" },
        ],
    },

    ac_email: {
        text: "Can I have your email address to share details with you? 📨",
        type: "email",
        field: "email",
        next: "ac_phone",
    },

    ac_phone: {
        text: "Please share your mobile number so our team can assist you instantly 📞",
        type: "phone",
        field: "phone",
        submit: true,
    },

    // -------------------------------------------------
    // FALLBACK GENERIC LEAD FLOW FOR OTHER BUSINESSES
    // -------------------------------------------------

    lead_name: {
        text: "May I know your name? ☺️",
        type: "text",
        field: "name",
        next: "lead_location",
    },

    lead_location: {
        text: "May I know your location — UAE, GCC, or Foreign?",
        type: "options",
        field: "location",
        options: [
            { label: "UAE", next: "lead_email" },
            { label: "GCC", next: "lead_email" },
            { label: "Foreign", next: "lead_email" },
        ],
    },

    lead_email: {
        text: "Can I have your email address to share details with you? 📨",
        type: "email",
        field: "email",
        next: "lead_phone",
    },

    lead_phone: {
        text: "Please share your mobile number so our team can assist you instantly 📞",
        type: "phone",
        field: "phone",
        submit: true,
    },

    // -------------------------------------------------
    // PUMP FLOW
    // -------------------------------------------------

    q2_pump_support: {
        text: "What kind of support are you seeking today? 🤝",
        type: "options",
        field: "pumpSupportType",
        options: [
            { label: "🆕 New Pump Enquiry", next: "q3_business_type" },
            { label: "🛠️ Service Related Job", next: "q3_service_type" },
            { label: "♻️ Retrofitting Job", next: "q_name" },
            { label: "🔩 Spare Parts Enquiry", next: "q3_spare_equipment" },
            { label: "⚙️ Customized Pump Solution", next: "q3_custom_solution_type" },
        ],
    },

    q3_custom_solution_type: {
        text: "Which type of pump solution do you require?",
        type: "options",
        field: "customPumpSolutionType",
        options: [
            { label: "Boosting System", next: "q4_usage" },
            { label: "Transfer System", next: "q4_usage" },
            { label: "Irrigation System", next: "q4_usage" },
            { label: "Circulation System", next: "q4_usage" },
            { label: "Process Pumping System", next: "q4_usage" },
            { label: "Drainage & Dewatering System", next: "q4_usage" },
            { label: "Others", next: "q3_custom_solution_other_desc" },
        ],
    },


    q3_custom_solution_other_desc: {
        text: "Please mention 📝",
        type: "text",
        field: "customSolutionOtherDetails",
        next: "q_name",
    },


    q3_business_type: {
        text: "What is the primary line of business?",
        type: "options",
        field: "primaryBusinessType",
        options: [
            { label: "General Contractor", next: "q4_usage" },
            { label: "MEP Contractor", next: "q4_usage" },
            { label: "Consultant (Engineering / Project / Business)", next: "q4_usage" },
            { label: "Trading Company / Distributor", next: "q_name" }, // 🔥 DIRECT
            { label: "End User / Client", next: "q4_usage" },
            { label: "Service Provider", next: "q4_usage" },
            { label: "Other", next: "q3_other_business_desc" },
        ],
    },



    q3_other_business_desc: {
        text: "Please mention 📝",
        type: "text",
        field: "otherBusinessType",
        next: "q_name",
    },

    // --------- NEW Pump Enquiry Path ---------

    q3_pump_type: {
        text: "What type of pump are you looking for? 🚰",
        type: "options",
        field: "pumpType",
        options: [
            { label: "🚰 Submersible Pump", next: "q4_usage" },
            { label: "🚰 Borewell Pump", next: "q4_usage" },
            { label: "🚰 Centrifugal Pump", next: "q4_usage" },
            { label: "🚰 Vertical Multistage Pump", next: "q4_usage" },
            { label: "🚰 Horizontal End Suction Pump", next: "q4_usage" },
            { label: "🚰 Dozing Pump", next: "q4_usage" },
            { label: "🚰 Circulation Pump", next: "q4_usage" },
            { label: "🚰 High Pressure Pump", next: "q4_usage" },
            { label: "🚰 Other", next: "q3_other_pump_desc" },
        ],
    },

    q3_other_pump_desc: {
        text: "Please mention the pump type 📝",
        type: "text",
        field: "otherPumpType",
        next: "q4_usage",
    },

    q4_usage: {
        text: "Is this for residential, commercial, or industrial use?",
        type: "options",
        field: "usageType",
        options: [
            { label: "🏠 Residential Building Services", next: "q5_supply" },
            { label: "🏢 Commercial Building Services", next: "q5_supply" },
            { label: "🏭 Industry", next: "q5_supply" },
            { label: "💧 Irrigation Pumps", next: "q5_supply" },
        ],
    },


    q5_supply: {
        text: "Do you need installation or just supply?",
        type: "options",
        field: "supplyType",
        options: [
            { label: "🛠️ Installation", next: "q_name" },
            { label: "🧰 Only Supply", next: "q_name" },
        ],
    },


    q6_brand_pref: {
        text: "Do you prefer a specific brand?",
        type: "options",
        field: "brandPreference",
        options: [
            { label: "✅ Yes", next: "q7_brand_name" },
            { label: "❌ No", next: "q_name" },
        ],
    },

    q7_brand_name: {
        text: "Which Brand are you looking for? 🏭",
        type: "text",
        field: "brandName",
        next: "q_name",
    },

    // --------- SERVICE PATH ---------

    q3_service_type: {
        text: "Which type of Service do you need?",
        type: "options",
        field: "serviceType",
        options: [
            { label: "🛠️ Installation", next: "q_name" },
            { label: "🧰 Repair", next: "q_name" },
            { label: "📅 Annual Maintenance", next: "q_name" },
            { label: "🚨 Emergency Breakdown", next: "q_emergency_contact" },
            { label: "📍 Site Visit", next: "q_site_location" },
        ],
    },

    q_emergency_contact: {
        text: "📞 Emergency Contact Number\n🚨 +971 4 6067300",
        type: "info",
        submit: true,
    },


    q_site_location: {
        text: "Please share the site location 📍",
        type: "text",
        field: "siteLocation",
        next: "q_name",
    },

    q_emergency_info: {
        text: "📞 Emergency Contact Number\n🚨 +971 4 6067300",
        type: "info",
        options: [
            { label: "Back", next: "q3_service_type" },
            { label: "Next", next: "q_emergency_final" },
        ],
    },

    q_emergency_final: {
        text: "📞 Please contact us for any enquiry.\n800-6249",
        type: "info",
        options: [
            { label: "Back", next: "q_emergency_info" },
            { label: "Submit", next: "q_emergency_submit" },
        ],
    },

    // q_emergency_submit: {
    //     text: "🚨 Emergency breakdown logged — our team will reach you shortly.",
    //     type: "info",
    //     submit: true,
    // },

    q_emergency_submit: {
        text: "🚨 Emergency Breakdown",
        type: "info",
        submit: true,
    },

    // --------- SPARE PART PATH ---------

    q3_spare_equipment: {
        text: "Which equipment do you require spare parts for?",
        type: "options",
        field: "sparePartsEquipment",
        options: [
            { label: "💧 Water Pumps", next: "q_name" },
            { label: "⚡ Generators", next: "q_name" },
            { label: "📝 Others", next: "q3_spare_other_desc" },
        ],
    },

    q3_spare_other_desc: {
        text: "Please mention 📝",
        type: "text",
        field: "spareOtherEquipment",
        next: "q_name",
    },



    q_spare_other_desc: {
        text: "Please mention 📝",
        type: "text",
        field: "spareOtherDetails",
        next: "q_name",
    },

    // --------- CUSTOM PUMP SOLUTION PATH ---------

    q_custom_solution_desc: {
        text: "Please mention 📝",
        type: "text",
        field: "customSolutionDetails",
        next: "q_name",
    },

    // -------------------------------------------------
    // SHARED CONTACT BLOCK FOR PUMP FLOW
    // -------------------------------------------------

    q_name: {
        text: "May I know your name? ☺️",
        type: "text",
        field: "name",
        next: "q_location",
    },

    q_location: {
        text: "May I know your location — UAE, GCC, or Foreign?",
        type: "options",
        field: "location",
        options: [
            { label: "UAE", next: "q_uae_area" },
            { label: "GCC", next: "q_gcc_country" },
            { label: "Others", next: "q_other_country" },
        ],
    },


    q_other_country: {
        text: "Please select your country",
        type: "country",
        field: "country",
        next: "q_email",
    },

    q_gcc_country: {
        text: "Please select your country",
        type: "options",
        field: "gccCountry",
        options: [
            { label: "Saudi Arabia", next: "q_email" },
            { label: "Kuwait", next: "q_email" },
            { label: "Qatar", next: "q_email" },
            { label: "Bahrain", next: "q_email" },
            { label: "Oman", next: "q_email" },
        ],
    },



    q_uae_area: {
        text: "May I know which area you are based in, in the UAE?",
        type: "options",
        field: "uaeArea",
        options: [
            { label: "Abu Dhabi", next: "q_email" },
            { label: "Dubai", next: "q_email" },
            { label: "Sharjah", next: "q_email" },
            { label: "Ajman", next: "q_email" },
            { label: "Umm Al Quwain", next: "q_email" },
            { label: "Ras Al Khaimah", next: "q_email" },
            { label: "Fujairah", next: "q_email" },
            { label: "Al Ain", next: "q_email" },
        ],
    },


    q_email: {
        text: "Can I have your email address to share details with you? 📨",
        type: "email",
        field: "email",
        next: "q_phone",
    },

    q_phone: {
        text: "Please share your mobile number so our team can assist you instantly 📞",
        type: "phone",
        field: "phone",
        submit: true,
    },

};