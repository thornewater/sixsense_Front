import React from 'react';
import './Agree.scss';

const Agree = () => {
  return (
    <div className="agree">
      <div className="checkBox">
        <input type="checkbox" className="check" />
        <p>
          위 상품의 판매조건을 명확히 확인하였으며, 구매 진행에 동의합니다.
          (전자상거래법 제 8조 2항)
        </p>
      </div>
      <ul>
        <li>
          할인 쿠폰 적용 후 결제 금액(배송비, 쇼핑백 환경부담금 제외)가 3만원
          이상인 경우 무료 배송이 적용됩니다. (단, 티웨어는 브랜드별로
          무료배상기준이 상이하오니, 제품고시정보 내의 배송안내
          확인부탁드립니다.)
        </li>
        <li>
          배송 정보(=수취인정보)가 동일할 경우 자동으로 합배송(1개의 송장번호)
          될 수 있습니다. (반드시 제품 수령 후, 송장번호 기입하시어 1:1 상담
          게시판을 통해 배송비 환불 요청해주세요.)
        </li>
        <li>
          다수의 주문건에 쿠폰 할인을 받는 대신 배송료를 결제하는 경우, 합배송
          환불에서 제외 될 수도 있습니다.
        </li>
        <p> ❇︎단, 합배송 개별 신청은 불가능합니다.</p>
      </ul>
    </div>
  );
};

export default Agree;
