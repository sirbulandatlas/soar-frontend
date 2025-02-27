import { Box, Paper, Typography, Grid, styled, css } from '@mui/material';
import CardChip from '../../assets/icons/Chip_Card.svg';
import CardChipLight from '../../assets/icons/chip-card-light.svg';
import MasterCardLogo from '../../assets/icons/mastercard.svg';
import MasterCardLogoLight from '../../assets/icons/mastercard-light.svg';
import SectionHeading from './SectionHeading';
import { useAppContext } from '../../context/AppContext';

const CardContainer = styled(Paper)<{ dark?: string }>`
  fontFamily: 'Lato';
  padding: 24px;
  border-radius: 0;
  padding-bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background: ${({ dark }) =>
    dark === 'true'
      ? 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)'
      : '#FFFFFF'}; 
  color: ${({ dark }) => (dark === 'true' ? 'white' : '#343C6A')}; 
  overflow: hidden;
  &::before: {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background:
      radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
  },
`;

const CardNumberContainer = styled(Paper)<{ dark?: string }>`
  background: ${({ dark }) =>
    dark === 'true'
      ? 'linear-gradient(107.38deg, #5b5a6f 2.61%, #000000 101.2%)'
      : '#FFFFFF'};
  border-radius: 0px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 12px 24px 12px 24px;
  color: ${({ dark }) => (dark === 'true' ? 'white' : '#343C6A')};
  display: flex;
  justify-content: space-between;
  ${({ dark }) =>
    dark !== 'true' &&
    css`
      border-top: solid 1px #dfeaf2;
    `}
`;

const CardDetails = styled(Box)<{ dark?: string }>`
  h4 {
    font-family: 'Lato';
    font-size: 1.25rem;
  }
  h5 {
    font-family: 'Lato';
    font-size: 0.93rem;
  }
  h6 {
    font-family: 'Lato';
    font-size: 0.75rem;
    margin-bottom: 0;
    ${({ dark }) =>
      dark !== 'true' &&
      css`
        color: #718ebf;
      `}
  }
`;

const MyCards = () => {
  const { cards, loading } = useAppContext();

  if (loading) {
    return <Box>Loading cards...</Box>;
  }

  return (
    <Box>
      <SectionHeading>My Cards</SectionHeading>
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} md={6} key={card.id}>
            <CardContainer elevation={0} dark={(index % 2 === 0).toString()}>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}
              >
                <CardDetails dark={(index % 2 === 0).toString()}>
                  <Typography variant='h6' sx={{ mb: 3 }}>
                    Balance
                  </Typography>
                  <Typography variant='h4' sx={{ mb: 3 }}>
                    ${card.balance.toLocaleString()}
                  </Typography>
                </CardDetails>
                <img src={index % 2 === 0 ? CardChip : CardChipLight} />
              </Box>
              <Box sx={{ display: 'flex', gap: 5 }}>
                <CardDetails dark={(index % 2 === 0).toString()}>
                  <Typography variant='h6' sx={{ mb: 3 }}>
                    CARD HOLDER
                  </Typography>
                  <Typography variant='h5' sx={{ mb: 3 }}>
                    {card.holder}
                  </Typography>
                </CardDetails>
                <CardDetails dark={(index % 2 === 0).toString()}>
                  <Typography variant='h6' sx={{ mb: 3 }}>
                    VALID THRU
                  </Typography>
                  <Typography variant='h5' sx={{ mb: 3 }}>
                    {card.expiry}
                  </Typography>
                </CardDetails>
              </Box>
            </CardContainer>
            <CardNumberContainer dark={(index % 2 === 0).toString()}>
              <Box>
                <Typography variant='h6'>{card.number}</Typography>
              </Box>
              <img
                src={index % 2 === 0 ? MasterCardLogo : MasterCardLogoLight}
              />
            </CardNumberContainer>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyCards;
