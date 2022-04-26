import { FC, useState } from 'react';
import {
  Container, MessageBox, MessageCompose, MessageList, CustomInput, SendButton,
} from './body.styles';

const Body: FC = () => {
  const [inputContent, setInputContent] = useState('');

  return (
    <Container>
      <MessageList>
        <MessageBox isOwner>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Illum assumenda tempora odit excepturi corporis repellendus,
          maxime rem molestias est totam mollitia nobis, enim vel earum
          deleniti ducimus aperiam rerum expedita.
        </MessageBox>
        <MessageBox isOwner={false}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Illum assumenda tempora odit excepturi corporis repellendus,
          maxime rem molestias est totam mollitia nobis, enim vel earum
          deleniti ducimus aperiam rerum expedita.
        </MessageBox>
      </MessageList>
      <MessageCompose>
        <CustomInput
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        />
        <SendButton onClick={() => setInputContent('')} />
      </MessageCompose>
    </Container>
  );
};

export default Body;
