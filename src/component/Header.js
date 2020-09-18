import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
	render(){
        return (
            <div>
                <header>
                    <h1><img src="http://contents-image.twayair.com/mobile/images/common/logo_main_red.png" alt="티웨이항공 모바일 컴포넌트 가이드" /></h1>
                    <button><span className="blind">메뉴열기</span></button>
                </header>
                <Nav/>
            </div>
        )
    }
}

export default Header;