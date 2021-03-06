// 태그 추가하는 컴포넌트
import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const TagBoxBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;

  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5;
  }
`;

const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.gray[9]};
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }
  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: ${palette.gray[8]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${palette.gray[6]};
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

// 태그 1개
type tagProps = {
  tag: string;
  onRemove: (tag: string) => void;
};
const TagItem = React.memo(({ tag, onRemove }: tagProps) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

// 태그 리스트
type TagListProps = {
  tags: string[];
  onRemove: (tag: string) => void;
};
const TagList = React.memo(({ tags, onRemove }: TagListProps) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

type TagBoxProps = {
  tags: string[];
  onChangeTags: (nextTags: string[]) => void;
};

// 태그 박스
function TagBox({ tags, onChangeTags }: TagBoxProps) {
  const [input, setInput] = useState<string>("");
  const [localTags, setLocalTags] = useState<string[]>([]);

  const insertTag = useCallback(
    (tag) => {
      // 공백이라면 추가 x
      if (!tag) return;
      // 이미 존재하면 추가 x
      if (localTags.includes(tag)) return;
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  // 태그 삭제, 태그 누르면 삭제됨
  const onRemove = useCallback(
    (tag) => {
      const nextTags = localTags.filter((t) => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  // 태그 작성
  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  // 태그 넣기
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim()); // 앞뒤 공백
      setInput(""); // 넣고, 초기화
    },
    [input, insertTag]
  );

  // tags 값이 바뀔 때
  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input
          placeholder="태그를 입력하세요"
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
}

export default TagBox;
