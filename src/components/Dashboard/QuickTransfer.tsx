import { useState } from 'react';
import { Box, Paper, Typography, Avatar, Button } from '@mui/material';
import SectionHeading from './SectionHeading';
import styled, { css } from 'styled-components';
import { SendIcon } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const StyledPaper = styled(Paper)`
  padding: 24px;
  border-radius: 16px;
`;

const QuickContactsContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuickContactContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuickContactAvatar = styled(Avatar)<{ active?: string }>`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

const QuickContactsName = styled(Typography)<{ active?: string }>`
  font-size: 1rem;
  text-align: center;
  ${({ active }) =>
    active &&
    css`
      font-weight: 700;
    `}
`;

const QuicKContactRole = styled(Typography)<{ active?: string }>`
  font-size: 0.95rem;
  text-align: center;
  color: #718ebf;
  ${({ active }) =>
    active &&
    css`
      font-weight: 900;
    `}
`;

const AmountContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AmountLabel = styled.label`
  color: #718ebf;
`;
const AmountInputContainer = styled(Box)`
  display: flex;
  position: relative;
`;
const AmountInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 1.125rem;
  padding: 0 24px;
  top: 238px;
  left: 155px;
  border-radius: 50px;
  background: #edf1f7;
  border: #edf1f7;
  &::placeholder {
    color: #718ebf;
  }
`;

const SendButton = styled(Button)`
  position: absolute;
  box-shadow: 4px 4px 18px -2px #e7e4e8cc;
  width: 50%;
  height: 50px;
  border-radius: 50px;
  right: 0px;
  justify-content: space-between;
  padding: 18px;
  text-transform: capitalize;
`;

const QuickTransfer = () => {
  const [amount, setAmount] = useState('');
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const { contacts, loading } = useAppContext();

  if (loading) {
    return <Box>Loading contacts...</Box>;
  }

  return (
    <>
      <SectionHeading>Quick Transfer</SectionHeading>

      <StyledPaper elevation={0}>
        <QuickContactsContainer sx={{ mt: 2 }}>
          {contacts.map((contact) => (
            <QuickContactContainer key={contact.id}>
              <QuickContactAvatar
                src={contact.avatar}
                alt={contact.name}
                onClick={() => setSelectedContact(contact.id)}
                active={(contact.id === selectedContact).toString()}
              />
              <QuickContactsName
                variant='subtitle1'
                active={(contact.id === selectedContact).toString()}
              >
                {contact.name}
              </QuickContactsName>
              <QuicKContactRole
                variant='subtitle2'
                active={(contact.id === selectedContact).toString()}
              >
                {contact.role}
              </QuicKContactRole>
            </QuickContactContainer>
          ))}
        </QuickContactsContainer>

        <Box sx={{ mt: 3 }}>
          <AmountContainer>
            <AmountLabel htmlFor='amount'>Write Amount</AmountLabel>
            <AmountInputContainer>
              <AmountInput
                id='amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder='52'
              />
              <SendButton
                variant='contained'
                sx={{
                  bgcolor: 'black',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'black',
                  },
                }}
                endIcon={<SendIcon />}
              >
                Send
              </SendButton>
            </AmountInputContainer>
          </AmountContainer>
        </Box>
      </StyledPaper>
    </>
  );
};

export default QuickTransfer;