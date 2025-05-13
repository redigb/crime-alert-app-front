import {
    Dialog,
    Button,
    Typography,
} from "@material-tailwind/react";

import { CheckCircle, AlertTriangle as WarningTriangle } from "../../assets/icons/Icons";

import {
    createContext,
    useContext,
    useState,
    useCallback,
    ReactNode,
} from "react";

// Definimos el tipo de notificación
type NotificationType = "success" | "error";

interface NotificationState {
    type: NotificationType;
    title?: string;
    message?: string;
}

// Contexto
const NotificationContext = createContext<{
    showNotification: (notification: NotificationState) => void;
} | null>(null);

// Hook para usar desde cualquier parte
export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error("useNotification debe usarse dentro de NotificationProvider");
    }
    return context;
};

// Provider global
export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    const [notification, setNotification] = useState<NotificationState>({
        type: "success",
    });

    const showNotification = useCallback((notif: NotificationState) => {
        setNotification(notif);
        setOpen(true);
    }, []);

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}

            <Dialog open={open} size="sm">
                <Dialog.Trigger /> {/* Necesario por diseño de Tailwind */}
                <Dialog.Overlay>
                    <Dialog.Content className="text-center bg-[#1a1d29]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2e3347]/50 shadow-xl">
                        {notification.type === "success" ? (
                            <CheckCircle className="mb-6 h-16 w-16 text-green-500 mx-auto" />
                        ) : (
                            <WarningTriangle className="mb-6 h-16 w-16 text-red-500 mx-auto" />
                        )}

                        <Typography variant="h4" className="text-2xl text-white">
                            {notification.title ||
                                (notification.type === "success"
                                    ? "¡Operación exitosa!"
                                    : "¡Ha ocurrido un error!")}
                        </Typography>
                        <Typography className="text-gray-400 mt-2">
                            {notification.message ||
                                (notification.type === "success"
                                    ? "La acción fue completada correctamente."
                                    : "Ocurrió un problema inesperado. Inténtalo nuevamente.")}
                        </Typography>

                        <div className="mb-1 mt-8 flex items-center justify-center gap-2">
                            <Dialog.DismissTrigger as={Button} className="bg-gradient-to-r from-primary to-red-500 via-purple-500 hover:from-primary hover:to-red-500 text-white rounded-lg shadow-lg shadow-purple-500/20 transition-all duration-300" 
                            onClick={() => setOpen(false)}>
                                Cerrar
                            </Dialog.DismissTrigger>
                        </div>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog>
        </NotificationContext.Provider>
    );
};
