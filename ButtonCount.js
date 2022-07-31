export class ButtonCount extends HTMLElement{momodu
    /*empty constructor that only calls
    the super constructor*/
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        /*returns this shadow root*/

        let buttonTag = document.createElement('button');
        buttonTag.textContent = `Times Clicked: `;

        /*use an output tag to hold the output*/
        let count = document.createElement('output');
        /*then modity the content, 
        easier this way to manitulate variable*/
        count.textCountent = 0;

        /*putting <output> in side <button>*/
        buttonTag.append(count);

        /*slot tag holds markup*/
        let slot = document.createElement('slot'); 
        buttonTag.append(slot);       
        /*both output and slot in button*/     
        
        
        /*done with adding tags*/
        buttonTag.addEventListener('click', () => {
            /*must convert text 0 to number 0*/
            let currentCount = Number(count.textContent);
            /*using variable to update from nubmer to text*/
            count.textContent = currentCount+1;
        }); 

        this.shadowRoot.append(buttonTag);
    }
}

customElements.define('button-count', ButtonCount);