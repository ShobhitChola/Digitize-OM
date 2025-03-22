import {ButtonHTMLAttributes} from "react";
import { cva } from "class-variance-authority";

const classes = cva('border h-12 rounded-full px-6 font-medium transition-all duration-300', {
    variants: {
        variant: {
            primary: "bg-[#1A73E8] text-white border-black/15 hover:bg-[#00308F] hover:text-white",
            secondary: "border-[#1A73E8] text-[#1A73E8] bg-transparent hover:border-[#00308F] hover:text-[#00308F]",
        },
    },
});

export default function Button(props: {variant: "primary" | "secondary" } & ButtonHTMLAttributes<HTMLButtonElement>) {
    {const {variant, className, ...otherProps} = props;
    return (
    <button className={classes({ 
        variant, className
    })}
    {...otherProps}
    />
    );
    }
}