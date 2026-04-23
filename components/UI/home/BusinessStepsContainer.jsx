import BusinessSteps from "./BusinessSteps"

async function BusinessStepsContainer() {

  const items = {
    heading: "Driving Industrial Excellence Through Integrated Solutions",
    text: "Partner with us to build smarter, more sustainable, and future-ready solutions",
    button: "Learn More",
  };

  const steps = [
    {
      id: 1,
      title: "Integrated Industrial Strength",
      description:
        "Bringing together trading, manufacturing, and services to deliver complete, end-to-end solutions across multiple industries.",
      icon: "/icons/step1.png",
    },
    {
      id: 2,
      title: "Sustainable Resource Management",
      description:
        "Transforming waste into value through responsible recycling and environmentally conscious operations that support a circular economy.",
      icon: "/icons/step1.png",
    },
    {
      id: 3,
      title: "Reliable Engineering & Expertise",
      description:
        "Providing dependable, high-performance solutions backed by decades of technical knowledge and industry experience.",
      icon: "/icons/step1.png",
    },
  ];
    return (
        <BusinessSteps items={items} steps={steps} />
    )
}

export default BusinessStepsContainer