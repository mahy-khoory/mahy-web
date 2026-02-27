import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function ScrollToTop({ href, children, className, ariaLabel, onClick }) {
    const router = useRouter();

    const buildUrl = () => {
        if (href !== "/contact-us/vendor-registration" && href !== "/contact-us/customer-registration") return href;
        const cookie = Cookies.get("mahy_company");
        if (!cookie) return href;

        const company = JSON.parse(cookie);
        const url = new URL(href, window.location.origin);
        url.searchParams.set("company", company.id);
        return url.pathname + url.search;
    };

    const scrollToTop = () => {
        if (onClick) onClick();

        const finalUrl = buildUrl();
        // console.log(finalUrl);


        if (window.scrollY === 0) {
            router.push(finalUrl);
            return;
        }

        const onScrollEnd = () => {
            if (window.scrollY <= 0) {
                window.removeEventListener("scroll", onScrollEnd);
                router.push(finalUrl);
            }
        };

        window.addEventListener("scroll", onScrollEnd, { passive: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button className={className} onClick={scrollToTop} aria-label={ariaLabel}>
            {children}
        </button>
    );
}

export default ScrollToTop;