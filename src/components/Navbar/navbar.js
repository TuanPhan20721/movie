import Nexfix from '../../assets/imgs/Netflix-logo-red-black-png.png';
import {BsSearch} from 'react-icons/bs';
import styled from 'styled-components';
function Navbar(props) {
    return (  
        <Navigation>
            <div className='navContainer'>
                <div className='logo'>
                   <img src={Nexfix} alt=''/>
                </div>
                <div className='navSearch'>
                    <BsSearch className='iconSearch'/>
                    <input type="text" placeholder='input title'/>
                </div>
            </div>
        </Navigation>
    );
}

export default Navbar;
const Navigation = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    z-index:10;
    .navContainer{
        background-color: var(--color-background);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        @media only screen and (max-width:600px){
            flex-direction: column;
        }
        .logo{
            width: 120px;
            cursor: pointer;
            img{
                width: 100%;
            }
        }
        .navSearch{
            color: gray;
            padding-right: 20px;
            display: flex;
            justify-content: flex-end;
            &:hover .iconSearch{
                color: red;
            }
            .iconSearch{
                height: 19px;
                width:19px;
                cursor: pointer;
                padding-right: 4px;
                transform: translateX(24px) translateY(8px);
                color: gray;
            }
            input{
                font-size: 14px;
                border: none;
                color: white;
                outline: none;
                width: 0;
                padding: 10px;
                cursor: pointer;
                opacity: 0;
                backgroud: var(--color-background);
                transition: width 0.5s;
                &:focus{
                    padding-left: 26px;
                    width:300px;
                    cursor:text;
                    opacity: 1;
                    border-radius:4px;
                }
            }
        }
    }
`;