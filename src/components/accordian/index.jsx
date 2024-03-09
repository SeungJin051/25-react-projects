import { useState } from "react";
import data from "./data";
import "../accordian/styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null); // 선택된 아이템의 ID
  const [enableMultipleSelected, setEnableMultipleSelected] = useState(false); // 다중 선택 활성화 여부
  const [multipleSelected, setMultipleSelected] = useState([]); // 다중 선택된 아이템의 ID 배열

  // 단일 선택 처리 함수
  function handleSingleSelection(getDataId) {
    setSelected(getDataId === selected ? null : getDataId);
  }

  // 다중 선택 처리 함수
  function handleMultipleSelection(getDataId) {
    setMultipleSelected((prevMultipleSelected) => {
      const isSelected = prevMultipleSelected.includes(getDataId);
      if (isSelected) {
        // 이미 선택된 경우 선택 해제
        return prevMultipleSelected.filter((id) => id !== getDataId);
      } else {
        // 선택되지 않은 경우 선택
        return [...prevMultipleSelected, getDataId];
      }
    });
  }

  return (
    <div className="wrapper">
      {/* 단일 선택/다중 선택 전환 버튼 */}
      <button
        onClick={() => setEnableMultipleSelected(!enableMultipleSelected)}
      >
        {enableMultipleSelected ? "단일 선택으로 전환" : "다중 선택으로 전환"}
      </button>
      {/* 아코디언 컴포넌트 */}
      <div className="accordion">
        {data && data.length > 0 ? (
          // 데이터가 있는 경우 아코디언 아이템 매핑
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() =>
                  enableMultipleSelected
                    ? handleMultipleSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                {/* 아코디언 아이템 제목 */}
                <h3>{dataItem.question}</h3>
                {/* 아이콘 표시 (+ 또는 -) */}
                <span>
                  {enableMultipleSelected
                    ? multipleSelected.includes(dataItem.id)
                      ? "-" // 선택된 경우 -
                      : "+" // 선택되지 않은 경우 +
                    : selected === dataItem.id
                    ? "-" // 선택된 경우 -
                    : "+"}{" "}
                  {/* 선택된 경우 - 아이콘 표시 */}
                </span>
              </div>
              {/* 선택된 아이템의 콘텐츠 표시 */}
              {(enableMultipleSelected
                ? multipleSelected.includes(dataItem.id)
                : selected === dataItem.id) && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          // 데이터가 없는 경우 표시할 내용
          <div>No data</div>
        )}
      </div>
    </div>
  );
}
