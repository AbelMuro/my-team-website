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

export const titleVariants = {
    hidden: {
        opacity: 0,
        x: -170
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            x: {duration: 0.6},
            opacity: {duration: 1.2}
        }
    }
}

export const cardVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            staggerChildren: 0.4
        }
    }
}