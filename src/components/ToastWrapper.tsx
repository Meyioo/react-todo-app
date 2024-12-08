'use client';

import { Toast } from 'flowbite-react';
import { useToast } from '../store/hooks/useToastStore';

export const ToastWrapper: React.FC = () => {
	const { currentToast } = useToast();

	if (!currentToast) return null;
	return (
		<div className="sticky mx-auto bottom-0 mt-auto">
			<Toast className="rounded-md text-sm text-white shadow-lg bg-green-500 me-3">
				{currentToast.message}
			</Toast>
		</div>
	);
};
