export const imageVariants = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
        transition: {
            delay: 0.7,
            type: 'spring',
            damping: 6,
            stiffness: 150,
        }
    }
}

export const iconVariants = {
    hidden: {
        x: -100,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4
        }
    }
}