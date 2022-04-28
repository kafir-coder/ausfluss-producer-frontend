import Router from 'next/router';
import { FC, useState } from 'react';
import { useSwr } from '../../../services/useSwr';
import {
  Container, MessageBox, MessageCompose, MessageList, CustomInput, SendButton,
} from './body.styles';

const Body: FC = () => {
  const [inputContent, setInputContent] = useState('');
  // const [messages, setMessages] = useState();

  const routes = Router.query;

  type Message = {
    content:string,
    from: number
    from_type: string
    id: number
    to: number
  }
  const { data } = useSwr<Message[]>(`http://localhost:8080/api/v1/messages?from=${routes.from}&to=1`);
  const handleSubmit = async () => {
    if (inputContent === '') return;
    const response = await fetch('http://localhost:8080/api/v1/messages', {
      method: 'post',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessKey')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: routes.from,
        content: inputContent,
      }),
    });
    setInputContent('');
  };
  return (
    <Container>
      <MessageList>
        {
          data?.map((element, index) => (
            <MessageBox isOwner={element.from_type === 'producer'} key={index as number}>
              {element.content}
            </MessageBox>
          ))
        }

      </MessageList>
      <MessageCompose>
        <CustomInput
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
          max={350}
        />
        <SendButton onClick={handleSubmit} />
      </MessageCompose>
    </Container>
  );
};

export default Body;
