export function clickOutside(element: HTMLElement, callbackFunction: { (): void; (): void }) {
	function onClickOutside(event: MouseEvent) {
		if (!element.contains(event.target as Node)) {
			callbackFunction();
		}
	}

	document.body.addEventListener('click', onClickOutside);

	return {
		update(newCallbackFunction: () => void) {
			callbackFunction = newCallbackFunction;
		},

		destroy() {
			document.body.removeEventListener('click', onClickOutside);
		}
	};
}
