import Nexfix from '../../assets/imgs/Netflix-logo-red-black-png.png';
import {BsSearch} from 'react-icons/bs';
import styled from 'styled-components';
import {useScrolly} from '../hook';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar(props) {
    const [scrollY]= useScrolly();
    const [keywords,setKeywords] = useState('');
    const navigate = useNavigate();

    const handleChangeInput = (e) =>{
        let keywords = e.target.value;
        setKeywords(keywords);
        (keywords.length > 0) ?
            navigate(`/search?keywords=${keywords.trim()}`)
        : navigate('/')
    }
    const goHome = ()=>{
        navigate('/');
        setKeywords('');
    }
    return (  
        <Navigation style={scrollY < 5 ? {backgroundColor:'transparent'}:{backgroundColor:'black'}}>
            <div className='navContainer'>
                <div className='logo' onClick={goHome}>
                   <img src={Nexfix} alt=''/>
                </div>
                <div className='navSearch'>
                    <BsSearch className='iconSearch'/>
                    <input type="text" 
                    placeholder='input title'
                    onChange={handleChangeInput}
                    value={keywords}                     
                    />
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
        background-color: transparent;
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
                height: 20px;
                width: 20px;
                cursor: pointer;
                padding-right: 4px;
                transform: translateX(24px) translateY(8px);
                color: gray;
            }
            input{
                font-size: 14px;
                border: 1px solid #fff;
                color: black;
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