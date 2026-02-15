import { getTranslations } from "next-intl/server";

const partners = [
    { id: 0, image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771178552/Grundfos_kie0kp.jpg", name: "Grundfos" },
    { id: 1, image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771178557/partners-gaia_awpjog.jpg", name: "Gaia" },
    { id: 2, image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771178553/oventop_hykzpm.jpg", name: "Oventrop" },
    { id: 3, image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771178584/partners-lister-petter_jexgqd.jpg", name: "Lister Petter" },
    { id: 4, image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771178586/partners-marathon-motor_zbdrme.jpg", name: "Marathon Motor" },
    { id: 5, image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771178556/partners-ariston_gmgj3s.jpg", name: "Ariston" },
    { id: 6, image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771178589/partners-pakawaste_tcdj3m.jpg", name: "Pakawaste" }
];

export const getPartnerNames = async () => {
    const t = await getTranslations("Partners");
    return partners.map((partner, i) => {
        return {
            id: i,
            label: t(`Partner${i + 1}`)
        }
    });
}

export default partners;