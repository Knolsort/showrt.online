import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppNavbar from '../componets/Navbar';
import HeadCanva from '../componets/TabCanva';
import BodyCanva from '../componets/BodyCanva';

// Styled Components
const TabBoard = styled.div`
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin: 25px 0;
`;

const TabBody = styled.div`
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  padding: 20px;
  overflow-y: auto;
`;

const MessageBubble = styled.div`
  display: inline-block;
  background-color: #B9F6CA;
  padding: 10px 20px ;
  margin-left: 70px;
  margin-bottom: 10px;
  border-radius: 20px 0 20px 20px;
`;

const ChatInput = styled.input`
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 10px;
    margin: 10px;
    width: 70vw;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

// Chat Component
const Home = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    const sendMessage = () => {
        if (inputValue.trim() !== '') {
            const newMessage = { sender: 'user', text: inputValue };
            setMessages([...messages, newMessage]);
            setInputValue('');
        }
    };

    return (
        <Container fluid >
            <Row>
                <Col md={3}>
                    <TabBoard>
                        <HeadCanva/>
                        <TabBody>
                            <BodyCanva/>
                        </TabBody>
                    </TabBoard>
                </Col>
                <Col md={9}>
                    <AppNavbar />
                    <ChatContainer>
                        {messages.map((message, index) => (
                            <MessageBubble key={index}>{message.text}</MessageBubble>
                        ))}
                    </ChatContainer>
                    <ChatInput
                        type="text"
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
