import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button"
import { use } from "react";
import { useNavigate } from "react-router";

export const ProfilePage = () => {
    // const { user} = useContext(UserContext);
    const {user, logout } = use(UserContext);
    const navigate = useNavigate();
    const handleLogout  = () => {
        logout();
        navigate('login');
    }
    return (
        <div className="
            min-h-screen
            flex flex-col 
            items-center 
            justify-center
            px-4
            py-10 
        ">
            <div className="
                w-full
                max-w-2xl
                flex
                flex-col
                items-center
                gap-6
            ">
                <h1 className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    font-bold
                    text-center
                "> 
                    Perfil del usuario
                </h1>
                <pre className="
                    w-full
                    overflow-x-auto
                    rounded-xl
                    p-4
                    text-sm
                    md:text-base
                    shadow
                ">
                    {JSON.stringify(user, null, 2)}
                </pre>
            </div>
            <Button 
                variant="destructive"
                className="
                    w-full
                    sm:w-auto    
                "
                onClick={handleLogout}
            > 
                Salir
            </Button>
        </div>
    )
}
