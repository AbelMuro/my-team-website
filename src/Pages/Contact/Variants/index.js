export const imageVariants = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            damping: 6,
            stiffness: 150,
        }
    }
}

export const textVariants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6
        }
    }
}