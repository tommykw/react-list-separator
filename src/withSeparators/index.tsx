import React, { type ReactNode } from 'react';

export const withSeparators = (items: ReactNode[]) => ({
	separatedBy(separator: ReactNode): ReactNode[] {
		return items.map((item, index) => (
			<React.Fragment
				key={`react-list-separator-item-${/* biome-ignore lint/suspicious/noArrayIndexKey: This is a controlled array and index is a safe and acceptable unique key in this specific context */ index}`}
			>
				{item}
				{index < items.length - 1 && (
					<React.Fragment
						key={`react-list-separator-sep-${/* biome-ignore lint/suspicious/noArrayIndexKey: Separator keys are generated based on their index, and this use case does not introduce any reordering or dynamic list modification issues */ index}`}
					>
						{separator}
					</React.Fragment>
				)}
			</React.Fragment>
		));
	},
});
