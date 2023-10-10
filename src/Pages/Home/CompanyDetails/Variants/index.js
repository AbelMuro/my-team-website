export const imageVariants = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
        transition: {type: 'spring', damping: 6, stiffness: 150}
    }
}

export const darkCircleVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {duration: 0.4}
    }
}

export const descVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4
        }
    }
}

export const detailVariants = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4
        }
    }
}
