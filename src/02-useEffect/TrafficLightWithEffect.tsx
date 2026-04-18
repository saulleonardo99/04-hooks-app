import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}

type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {

    const [light, setLight] = useState<TrafficLightColor>('red');
    const [countdown, setCountdown] = useState(5);
    /**
     * 🎬 Ejemplo paso a paso (cuando llega a 0)

        Supongamos:

        countdown = 1
        ⏱️ El intervalo hace:

        setCountdown(prev => prev - 1); // → 0
        
        🔁 React re-renderiza

        Ahora pasa esto:

        1. 🧹 cleanup del efecto anterior → clearInterval ✅
        2. 🟢 corre nuevo useEffect
        3. entra al if (countdown === 0) → return ❌
        4. NO se crea nuevo intervalo
        
        🎯 Resultado
        intervalo anterior → eliminado
        nuevo intervalo → no creado

        👉 = se detiene todo
     */

    useEffect(() => {
        if(countdown === 0)return;

        const intervalId = setInterval (() => {
            setCountdown((prev) => prev-1);
        }, 1000);

        // Funcion de cleanup de useEffect
        return () => {
            clearInterval(intervalId);
        }
    }, [countdown]);

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-white text-3xl font-bold">Semáforo con useEffect</h1>
                <h2 className="text-white text-xl font-thin">Countdown: {countdown}</h2>
                <div className={`w-32 h-32 ${light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>

                <div className={`w-32 h-32 ${light === 'yellow' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>

                <div className={`w-32 h-32 ${light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
            </div>
        </div>
    );
};