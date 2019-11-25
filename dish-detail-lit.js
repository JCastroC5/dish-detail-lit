import {html, LitElement} from "lit-element";
import '@polymer/paper-card';
import '@polymer/paper-button';
import style from './dish-detail-styles';
import "rating-component-lit/rating-component";

class DishDetailLit extends LitElement{
    constructor() {
        super();
        this.dish = {
            id: 0,
            image: 'https://discountseries.com/wp-content/uploads/2017/09/default.jpg',
            name: 'Nombre',
            energyValue: -1,
            rate: 0,
            description: 'Descripción',
            price: -1
        };
        this.showButtons = false;
    }

    static get properties() {
        return {
            dish: Object,
            showButtons: {
                type:Boolean
            }
        }
    }

    static get styles() {
        return style;
    }

    get energyValueText() {
        return this.dish.energyValue > -1 ? this.dish.energyValue + ' cal' : 'Contenido energético';
    }

    get formattedPrice() {
        return this.dish.price > -1 ? '$' + this.dish.price.toFixed(2) + ' MXN' : 'Precio';
    }

    __updateDish() {
        this.dispatchEvent(new CustomEvent('update-dish', {
            detail: this.dish
        }));
    }

    __deleteDish() {
        this.dispatchEvent(new CustomEvent('delete-dish', {
            detail: this.dish
        }));
    }

    render() {
        return html`
            <paper-card image="${this.dish.image}">
                <div class="card-content">
                    <div class="cafe-header">
                        ${this.dish.name}
                        <div class="cafe-location cafe-light">
                            <span>${this.energyValueText}</span>
                        </div>
                    </div>
                    <rating-component rate="${this.dish.rate}"></rating-component>
                    <p>${this.formattedPrice}</p>
                    <p class="cafe-light">${this.dish.description}</p>
                    ${this.showButtons ? html`
                        <div class="card-actions">
                            <div class="horizontal">
                                <paper-button class="info" @click="${e => this.__updateDish()}">Modificar</paper-button>
                                <paper-button class="error" @click="${e => this.__deleteDish()}">Eliminar</paper-button>
                            </div>
                        </div>
                    `: html``}
                </div>    
            </paper-card>
        `;
    }
}

window.customElements.define('dish-detail-lit', DishDetailLit);