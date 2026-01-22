import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants =
    "h-10 px-4 py-2 mt-1 text-gray-600 block flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-gray-300 bg-gray-50 hover:bg-accent hover:text-gray-800";

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return <Comp className={buttonVariants} ref={ref} {...props} />;
    },
);
Button.displayName = "Button";

export { Button, buttonVariants };
