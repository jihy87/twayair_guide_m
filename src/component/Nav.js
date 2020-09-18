import React from 'react';

class Nav extends React.Component {
	render(){
        return (
            <nav>
                <dl>
                    <dt>레이아웃</dt>
                    <dd><a href="#1">로딩</a></dd>
                    <dd><a href="#1">모달팝업</a></dd>
                    <dd><a href="#1">완료메세지</a></dd>
                </dl>
                <dl>
                    <dt>컨텐츠</dt>
                    <dd><a href="#1">버튼</a></dd>
                    <dd><a href="#1">페이징</a></dd>
                    <dd><a href="#1">테이블</a></dd>
                    <dd><a href="#1">리스트</a></dd>
                    <dd><a href="#1">날짜 달력</a></dd>
                    <dd><a href="#1">지역 달력</a></dd>
                    <dd><a href="#1">탭</a></dd>
                    <dd><a href="#1">텍스트 필드, 체크박스, 라디오버튼</a></dd>
                    <dd><a href="#1">본문 텍스트</a></dd>
                    <dd><a href="#1">약관</a></dd>
                    <dd><a href="#1">유의사항</a></dd>
                </dl>
                <dl>
                    <dt>예매 컨텐츠</dt>
                    <dd><a href="#1">여정 선택 슬라이더</a></dd>
                    <dd><a href="#1">가격 선택 슬라이더</a></dd>
                    <dd><a href="#1">수하물 선택 슬라이더</a></dd>
                    <dd><a href="#1">구간 운항 정보 카드</a></dd>
                    <dd><a href="#1">구간별 여정정보 카드</a></dd>
                    <dd><a href="#1">탑승자 정보 카드</a></dd>
                    <dd><a href="#1">운항스케줄 카드</a></dd>
                    <dd><a href="#1">스텝</a></dd>
                    <dd><a href="#1">레인지 슬라이드</a></dd>
                    <dd><a href="#1">결제정보</a></dd>
                </dl>
            </nav>
        )
    }
}

export default Nav;