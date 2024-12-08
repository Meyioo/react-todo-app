import React, { createContext, ReactNode, useCallback, useState } from 'react';

export interface IToast {
	message: string;
	color: string;
	duration: number;
}

export interface ToastContextType {
	showToast: (toast: IToast) => void;
	currentToast: IToast | null;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [currentToast, setCurrentToast] = useState<IToast | null>(null);

	const showToast = useCallback((toast: IToast) => {
		setCurrentToast(toast);
		setTimeout(() => {
			setCurrentToast(null);
		}, toast.duration);
	}, []);

	return (
		<ToastContext.Provider value={{ showToast, currentToast }}>{children}</ToastContext.Provider>
	);
};
