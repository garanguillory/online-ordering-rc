import * as React from 'react';

interface UpdateOrderButtonProps {
	className?: string;
	updateOrder(update: number): {};
  text?: string;
  update: number;
}

const UpdateOrderButton: React.SFC<UpdateOrderButtonProps> = ({ className, updateOrder, text, update }: UpdateOrderButtonProps) => {
	return (
		<button onClick={() => updateOrder(update)} className={className}>{text}</button>
	);
};

export default UpdateOrderButton;
