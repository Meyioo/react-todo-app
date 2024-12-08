'use client';

import { Toast } from 'flowbite-react';
import { useToast } from '../store/hooks/useToastStore';

export const ToastWrapper: React.FC = () => {
	const { currentToast } = useToast();

	if (!currentToast) return null;
	return <Toast className="bg-green-500 text-white shadow-lg">{currentToast.message}</Toast>;
};
