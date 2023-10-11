export const overlayVariants = {
    hidden: {
        clipPath: 'circle(0px at right top)',
        transition: {when: 'afterChildren', duration: 0.5},
    },
    show: {
        clipPath: 'circle(100%)',
        transition: {when: 'beforeChildren', duration: 0.7, staggerChildren: 0.2}
    }
}

export const menuVariants = {
    hidden: {
        clipPath: 'circle(0px at 220px 60px)',
        transition: {when: 'afterChildren', duration: 0.5},
    },
    show: {
        clipPath: 'circle(100%)',
        transition: {when: 'beforeChildren', duration: 0.7, staggerChildren: 0.2}
    }
}

export const linkVariants = {
    hidden: {
        y: -100,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1
    }
}