import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router"
import { toast } from "sonner";

export const LoginPage = () => {
    const { login} = useContext(UserContext);
    const [userId, setUserId] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = login (+userId);
        if(!result){
            toast.error('Usuario no encontrado');
            return;
        }
        navigate('/profile');
    }
    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold"> Iniciar Sesión</h1>
            <hr />
            <form className="flex flex-col gap-2 my-10" 
            onSubmit={handleSubmit}>
                <Input
                    type="number"
                    placeholder="ID de usuario"
                    value={userId}
                    onChange={event => setUserId(event.target.value)}
                />
                <Button type="submit">
                    login
                </Button>
                <Button variant="ghost">
                    <Link to="/about">
                        Volver  a la pagina principal
                    </Link>
                </Button>
            </form>
        </div>
    )
}
