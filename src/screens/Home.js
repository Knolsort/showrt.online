import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppNavbar from '../componets/Navbar';

// Styled Components
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  border: 1px solid #ccc;
  padding: 20px;
  overflow-y: auto;
`;

const MessageBubble = styled.div`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const ChatInput = styled.input`
  padding: 10px;
  margin: 10px;
  width: 95%;
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
        <Container >
            <Row>
                <AppNavbar/>
            </Row>
            <Row>
                <Col md={8}>
                    <ul>
                        <li>hyyftu</li>
                    </ul>
                </Col>
                <Col md={4}>
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
