export enum ModalName {
	productImages = 'product-images',
	compareList = 'compare-list',
	login = 'login',
	signup = 'signup',
	restorePassword = 'restorePassword',
	quickView = 'quickView',
	sendReview = 'sendReview',
  loginBeforeSendReview = 'loginBeforeSendReview',
	addedToCart = 'addedToCart',
	reviewPlaceholder = 'reviewPlaceholder',
	sortModal = 'sortModal',
	consultModal = 'consultModal',
	thanksModal = 'thanksModal',
	cheaperModal = 'cheaperModal',
	availableModal = 'availableModal',
	cityModal = 'cityModal',
	infoModal = 'infoModal',
	ofertModal = 'ofertModal'
}
export const ModalComponents: { [key: string]: () => Promise<any> } = {
    [ModalName.login]: () => import('~/components/Modals/LoginModal.vue'),
}