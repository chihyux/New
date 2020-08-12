import styled from 'styled-components'
import sceneSea from './image/photo-1517384084767-6bc118943770.jpg'

export const IndexWrapper = styled.div`
    margin: 3em auto;
    text-align: center;
    overflow: hidden;
    .ant-row {
        background: #fff;
    }
    span {
        font-size: 6em;
        font-family: 'Caveat',cursive;
        color: #d6d5b9;
        text-align: left;
        white-space: nowrap;
        @media(max-width: 580px) {
            font-size: 2em;
        }
    }
    .bottom {
        background: #fff;
        margin: 30em 0 0 0;
        padding: 7em 0;
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
    .sea {
        height: 800px;
        max-height: 800px;
        overflow: hidden;
        z-index: -1;
        position: fixed;
        top: 0;
        width: 100%;
        background: url(${sceneSea}) left bottom no-repeat;
        background-size: 100%;
    }
    .parallax {
        margin-bottom: 600px !important;
        background: #fff;
        padding: 0 0 5em 0;
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
    .sunshine {
        position: relative;
        left: -3em;
    }
    .summer-hat {
        width: 65%;
        position: absolute;
        bottom: 6em;
        right: 4em;
    }
`