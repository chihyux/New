import styled from 'styled-components'
import sceneSea from './image/photo-1517384084767-6bc118943770.jpg'

export const IndexWrapper = styled.div`
    margin: 3em auto;
    text-align: center;
    overflow: hidden;
    background: url(${sceneSea}) left center repeat-y;
    background-attachment: fixed;
    background-size: cover;

    .ant-row {
        background: #fff;
    }
    span {
        font-size: 3em;
        font-family: 'Caveat',cursive;
        color: #d6d5b9;
        text-align: left;
        white-space: nowrap;
        
        @media(min-width: 480px) {
            font-size: 5em;
        }
        @media(min-width: 768px) {
            font-size: 6em;
        }
    }
    .bottom {
        background: #fff;
        margin: 0 !important;
        padding: 5em 0;
    }
    .days {
        position: relative;
        left: 14em;
        z-index: 2;
        display: flex;
        flex-direction: column;
        top: 0;
        @media(max-width: 1440px) {
            left: 8em;
        }
        @media(max-width: 1280px) {
            left: 0;
        }
    }
    .june {
        position: relative;
        top: 2em;
        z-index:2;
    }
    .collection {
        padding: 8em 0;
        span {
            border-top: 5px solid #d6d5b9;
            border-bottom: 5px solid #d6d5b9;
            font-size: 4em;
            color: #806638;
            @media(max-width: 580px) {
                font-size: 2em;
            }
        }
    }
    .parallax {
        height: 40em;
        max-height: 40em;
        background: transparent;
    }
    .sunshine {
        left: 0;
        @media(min-width: 480px) {
            left: -1.25em;
            top: 0.5em;
            z-index: 2;
            position: relative;
    }
    }
    .summer-hat {
        width: 65%;
    }
`