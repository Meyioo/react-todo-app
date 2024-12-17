import { useToast } from '../store/hooks/useToastStore';

export const ToastWrapper: React.FC = () => {
	const { currentToast } = useToast();

	if (!currentToast) return null;
	return (
		<div className="sticky mx-auto bottom-0 mt-auto">
			<div
				className="rounded-md text-sm text-white shadow-lg bg-green-500 {{ toast.color }}"
				role="alert"
			>
				<div className="flex p-4">{currentToast.message}</div>
			</div>
		</div>
	);
};
