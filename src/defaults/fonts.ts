import { Inter, Plus_Jakarta_Sans, Manrope, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: "--font-jakarta" })
const manrope = Manrope({ subsets: ['latin'], variable: "--font-manrope" })
const montserrat = Montserrat({ subsets: ['latin'], variable: "--font-montserrat" })


const fonts = {
    inter,
    jakarta,
    manrope,
    montserrat
}

export default fonts;