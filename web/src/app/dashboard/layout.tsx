import { ClerkProvider } from "@clerk/nextjs"
import { dark } from '@clerk/themes'

const DashboardLayout: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <>
            <ClerkProvider appearance={dark} children={children} />
        </>
    )
}

export default DashboardLayout