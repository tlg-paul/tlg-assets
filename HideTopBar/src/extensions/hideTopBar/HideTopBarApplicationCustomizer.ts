import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';

export interface IHideTopBarApplicationCustomizerProperties {}

export default class HideTopBarApplicationCustomizer extends BaseApplicationCustomizer<IHideTopBarApplicationCustomizerProperties> {
    public onInit(): Promise<void> {
        console.log('HideTopBarApplicationCustomizer initialized');
        
        // Create a style element to hide the top bar
        const style = document.createElement('style');
        style.innerText = `
            #SuiteNavWrapper {
                display: none !important;
            }

            #sp-appBar {
                display: none !important;
            }

        `;
        document.head.appendChild(style);

        return Promise.resolve();
    }
}
