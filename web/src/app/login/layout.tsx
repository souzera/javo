const LoginLayout:React.FC = ({ children }:React.PropsWithChildren<{}>) => {
    return (
        <div className="flex items-center justify-center">
            {children}
        </div>
    )
}

export default LoginLayout