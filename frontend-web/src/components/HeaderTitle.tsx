import { motion } from "motion/react"
import { ReactNode } from "react"


function HeaderTitle({ icon, title1, title2, subtitle }
    : {
        icon: ReactNode,
        title1: String,
        title2: String,
        subtitle: String
    }) {
    return (
        <header className="mb-10">
            <div className="flex items-center gap-3 mb-2">
                <motion.div className="bg-gradient-to-br from-primary to-red-500 via-purple-500 p-3 rounded-xl shadow-lg shadow-purple-500/20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {icon}
                </motion.div>
                <motion.h1 className="text-3xl font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-white">{title1}</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-500 via-purple-500">{title2}</span>
                </motion.h1>
            </div>
            <motion.p className="text-gray-400 ml-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {subtitle}
            </motion.p>
        </header>
    )
}

export default HeaderTitle