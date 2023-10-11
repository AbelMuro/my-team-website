export const titleVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            x: {duration: 0.3},
            opacity: {duration: 0.6}
        }
    }
}

export const descVariants = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6
        }
    }
}

export const imageVariants = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            damping: 6,
            stiffness: 150
        }
    }
}