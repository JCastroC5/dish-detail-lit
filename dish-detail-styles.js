import {css} from 'lit-element';

export default css`
    :host {
        display: block;
      }
    
      paper-card {
        width: 400px;
        height: 600px;
        overflow: hidden;
        margin: 0;
        border: 1px solid;
    
        --paper-card-header-image: {
            display: block;
            width: 100%;
        };
      }
    
      .cafe-header {
        @apply --paper-font-headline;
      }
    
      .cafe-light {
        color: var(--paper-grey-600);
      }
    
      .cafe-location {
        float: right;
        font-size: 15px;
        vertical-align: middle;
      }
    
      .horizontal {
        display: flex;
        justify-content: center;
      }
      
      paper-button.info {
        background-color: #3367d6;
        color: white;
      }

      paper-button.error {
        background-color: #ff0000;
        color: white;
      }
`;