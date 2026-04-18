import { useState, useEffect, useEffectEvent } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = (color : TrafficLightColor  = 'red') => {
    const [light, setLight] = useState<TrafficLightColor>(color);
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
    //? Countdown effect
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

    //? Change light color effect
    const setLightAction = useEffectEvent(() => {
        setCountdown(5);
    
        setLight(prev => {
            if (prev === 'red') return 'green';
            if (prev === 'green') return 'yellow';
            return 'red';
        });
    });
    
    useEffect(() => {
        if (countdown > 0) return;
    
        setLightAction();
    }, [countdown]);
  return ({
    // Props
    countdown,

    // Computed
    percentage: (countdown / 5) * 100,
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
    redLight: light === 'red' ? colors.red : 'bg-gray-500',
    
});
}
