const storageType = localStorage;
const consentPropertyName = 'fontanero_consent';
const coolDown = 60 * 1000;

const shouldShowPopup = () => {
	const compare = new Date().getTime() - coolDown;
	if (storageType.getItem(consentPropertyName) < compare)
		return true;
	else 
		return false;
	
}
	
const saveToStorage = () => storageType.setItem(consentPropertyName, new Date().getTime());

window.onload = () => {
    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('hide');
    }

    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');

    acceptBtn.addEventListener('click', acceptFn);


    if (!shouldShowPopup()) 
		consentPopup.classList.add('hide');
};