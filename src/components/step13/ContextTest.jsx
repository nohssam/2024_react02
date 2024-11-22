import React, { useState } from 'react';
import Page from './Page';
import './ContextTest.css';

// React Context : 컴포넌트 계층구조 전체에서 데이터를 전달할때  여러 단계의 Props 전달을 피하기 위한 방법
//                  즉, 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할때, props를 거치지 앟고 데이터 고유
// 주요 사용 : 테마, 사용자 인증, 다국어 지원
// 단점 : Context 값이 변경되면, 모든 하위 컴포넌트가 재렌더링 되어야 한다 .
//        복잡한 상태 관리 하는데는 부적절, 디버깅이 어렵다.  
function ContextTest(props) {
    const [isDark, setIsDark] = useState(false)
    return (
        <div>
            <Page isDark={isDark} setIsDark={setIsDark} />
        </div>
    );
}

export default ContextTest;