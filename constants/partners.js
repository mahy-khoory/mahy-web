import { getTranslations } from "next-intl/server";

const partners = [
    { id: 0, image: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994346/grundfos_lbiolu.png", name: "Grundfos" },
    { id: 1, image: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994347/GAIA_r8o2xz.png", name: "Gaia" },
    { id: 2, image: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994347/oventrop_v6j8mf.png", name: "Oventrop" },
    { id: 3, image: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994347/ListerPetter_ea6myv.png", name: "Lister Petter" },
    { id: 4, image: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994347/Marathon_rqvumo.png", name: "Marathon Motor" },
    { id: 5, image: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994347/Artiston_dkapb8.png", name: "Ariston" },
    { id: 6, image: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994347/PakaWaste_ltpkeg.png", name: "Pakawaste" }
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