export const titleVariants = {
    hidden: {
        opacity: 0,
        x : -100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4
        }
    }
}

export const buttonVariants = {
    hidden: {
        opacity: 0,
        x : 100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4
        }
    }
}

export const imageVariants = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            damping: 4,
            stiffness: 150
        }
    }
}