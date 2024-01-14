import { ClerkProvider } from "@clerk/nextjs"
import {dark} from '@clerk/themes'

const DashboardLayout: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <ClerkProvider
            appearance={{baseTheme:dark}}
        >
            <div className="flex items-center justify-center">
                {children}
            </div>
        </ClerkProvider>
    )
}

export default DashboardLayout